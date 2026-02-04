#!/usr/bin/env bash
set -euo pipefail

# ====== config ======
COMPOSE_URL="https://raw.githubusercontent.com/sreeharip-s/suiiiii/refs/heads/main/docker-composexeample.yml"
COMPOSE_PATH="$HOME/docker-compose.yml"
WINGS_BIN="/usr/local/bin/wings"
WINGS_DIR="/etc/pterodactyl"
SYSTEMD_UNIT="/etc/systemd/system/wings.service"

# ====== helpers ======
log() { printf "\n[%s] %s\n" "$(date +'%F %T')" "$*"; }

require_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    echo "Please run as root (use: sudo bash install.sh)"
    exit 1
  fi
}

detect_arch() {
  local arch
  arch="$(uname -m)"
  case "$arch" in
    x86_64) echo "amd64" ;;
    aarch64|arm64) echo "arm64" ;;
    *)
      echo "Unsupported architecture: $arch (expected x86_64 or arm64/aarch64)" >&2
      exit 1
      ;;
  esac
}

# ====== main ======
require_root

log "Updating system packages..."
apt update
DEBIAN_FRONTEND=noninteractive apt upgrade -y

log "Installing prerequisites..."
apt install -y ca-certificates curl

log "Setting up Docker apt repository..."
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc

tee /etc/apt/sources.list.d/docker.sources > /dev/null <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "\${UBUNTU_CODENAME:-\$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

log "Installing Docker Engine + Compose plugin..."
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

log "Enabling and starting Docker..."
systemctl enable --now docker

log "Downloading docker-compose.yml to: ${COMPOSE_PATH}"
cd "$HOME"
curl -fsSL -o "$COMPOSE_PATH" "$COMPOSE_URL"

log "Starting docker compose stack..."
docker compose -f "$COMPOSE_PATH" up -d

log "Installing Pterodactyl Wings..."
mkdir -p "$WINGS_DIR"
ARCH="$(detect_arch)"
curl -fsSL -o "$WINGS_BIN" "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_${ARCH}"
chmod +x "$WINGS_BIN"

log "Creating systemd service: ${SYSTEMD_UNIT}"
tee "$SYSTEMD_UNIT" > /dev/null <<'EOF'
[Unit]
Description=Pterodactyl Wings Daemon
After=docker.service
Requires=docker.service
PartOf=docker.service

[Service]
User=root
WorkingDirectory=/etc/pterodactyl
LimitNOFILE=4096
PIDFile=/var/run/wings/daemon.pid
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
EOF

log "Reloading systemd and enabling Wings..."
systemctl daemon-reexec
systemctl daemon-reload
systemctl enable --now wings

log "Done. Status:"
systemctl --no-pager --full status docker || true
systemctl --no-pager --full status wings || true

log "Note: Wings still needs a valid /etc/pterodactyl/config.yml from the Panel to fully run."
