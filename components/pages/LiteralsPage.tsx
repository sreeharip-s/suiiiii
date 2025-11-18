
import React from 'react';
import { Card } from '../common/Card';
import { CodeBlock } from '../common/CodeBlock';
import { Tabs } from '../common/Tabs';

export const LiteralsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Literals</h1>
            <p className="text-neutral-400 mb-8">Fixed data values.</p>

            <Card className="p-6 mb-6">
                <Tabs tabs={['Strings', 'Numbers', 'Bool & None']}>
                    {/* String Content */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-orange-400 font-bold mb-2 text-sm">Single Line</h4>
                                <CodeBlock className="text-sm mb-4">{`s1 = 'Hello'\ns2 = "World"`}</CodeBlock>
                                <h4 className="text-orange-400 font-bold mb-2 text-sm">Multi Line</h4>
                                <CodeBlock className="text-sm">{`s3 = '''Line 1\nLine 2'''`}</CodeBlock>
                            </div>
                            <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                <h4 className="text-white font-bold mb-2 text-sm">Size of String</h4>
                                <p className="text-sm text-neutral-400 mb-2">Includes spaces and escape characters.</p>
                                <CodeBlock className="text-sm">{`len('a b')  # Result: 3`}</CodeBlock>
                            </div>
                        </div>
                    </div>

                    {/* Numeric Content */}
                    <div>
                        <h4 className="text-orange-400 font-bold mb-2 text-sm">Integer Bases</h4>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                                <div className="text-xs text-neutral-500 uppercase">Decimal</div>
                                <div className="font-mono text-emerald-400">20</div>
                            </div>
                            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                                <div className="text-xs text-neutral-500 uppercase">Binary (0b)</div>
                                <div className="font-mono text-blue-400">0b101</div>
                            </div>
                            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                                <div className="text-xs text-neutral-500 uppercase">Octal (0o)</div>
                                <div className="font-mono text-blue-400">0o12</div>
                            </div>
                            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                                <div className="text-xs text-neutral-500 uppercase">Hex (0x)</div>
                                <div className="font-mono text-blue-400">0x1A</div>
                            </div>
                        </div>
                        <h4 className="text-orange-400 font-bold mb-2 text-sm">Floating Point</h4>
                        <CodeBlock className="text-sm">{`pi = 3.14\nsci = 1.5e3  # 1500.0`}</CodeBlock>
                    </div>

                    {/* Other Content */}
                    <div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between bg-neutral-950 p-4 rounded-lg border border-neutral-800">
                                <span className="text-white font-bold">True / False</span>
                                <span className="text-xs text-orange-500 bg-orange-900/20 px-2 py-1 rounded">Boolean</span>
                            </div>
                            <div className="flex items-center justify-between bg-neutral-950 p-4 rounded-lg border border-neutral-800">
                                <span className="text-white font-bold">None</span>
                                <span className="text-xs text-purple-500 bg-purple-900/20 px-2 py-1 rounded">Special Literal</span>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </Card>
        </div>
    );
};
