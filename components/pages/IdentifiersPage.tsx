import React from 'react';
import { Card } from '../common/Card';

// FIX: Refactored component props definition to use a separate interface for better type inference and clarity.
const Rule = ({ num, children }: { num: number; children: React.ReactNode }) => (
    <li className="flex">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center text-xs mr-3 border border-neutral-700">{num}</span>
        <span className="text-sm text-neutral-300">{children}</span>
    </li>
);

export const IdentifiersPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Identifiers</h1>
            <p className="text-neutral-400 mb-8">Rules for naming your variables.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 h-full">
                    <h3 className="text-lg font-bold text-orange-500 mb-4">The 3 Golden Rules</h3>
                    <ul className="space-y-4">
                        <Rule num={1}>Must start with a <strong className="text-white">Letter</strong> (A-Z) or <strong className="text-white">Underscore</strong> (_).</Rule>
                        <Rule num={2}>Can contain Letters, Digits (0-9), or Underscores.</Rule>
                        <Rule num={3}>Cannot contain <strong className="text-red-400">Spaces</strong> or <strong className="text-red-400">Special Symbols</strong> (like @, $, %).</Rule>
                    </ul>
                </Card>

                <Card className="overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr>
                                <th className="p-4 bg-neutral-900 text-orange-400 uppercase text-xs tracking-wider">Valid Name ✅</th>
                                <th className="p-4 bg-neutral-900 text-orange-400 uppercase text-xs tracking-wider">Invalid Name ❌</th>
                            </tr>
                        </thead>
                        <tbody className="text-neutral-300">
                            {[
                                { valid: 'Age', invalid: '2ndplace', reason: 'Starts with digit' },
                                { valid: '_counter', invalid: 'total-score', reason: 'Contains hyphen' },
                                { valid: 'Total_Score', invalid: 'class', reason: 'Keyword' }
                            ].map(({ valid, invalid, reason }, index) => (
                                <tr key={valid} className={index > 0 ? "border-t border-neutral-800" : ""}>
                                    <td className="p-4 font-mono text-emerald-400">{valid}</td>
                                    <td className="p-4 font-mono text-red-400">{invalid} <span className="text-xs text-neutral-500 block">({reason})</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};
