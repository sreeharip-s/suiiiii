
import React from 'react';
import { Card } from '../common/Card';
import { CodeBlock } from '../common/CodeBlock';
import { KEYWORDS } from '../../constants';

export const KeywordsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Keywords</h1>
            <p className="text-neutral-400 mb-8">Reserved words. Cannot be used as variable names.</p>

            <Card className="p-6 mb-6">
                <div className="flex flex-wrap gap-2">
                    {KEYWORDS.map(keyword => (
                        <span key={keyword} className="px-3 py-1.5 rounded bg-neutral-800 text-orange-300 font-mono text-sm border border-neutral-700">
                            {keyword}
                        </span>
                    ))}
                </div>
            </Card>

            <Card className="p-6 border border-red-900/50 bg-red-900/10">
                <h3 className="text-red-400 font-bold mb-2 text-sm uppercase">Case Sensitivity Warning</h3>
                <p className="text-neutral-300 text-sm mb-3">`if` is a keyword. `If` is not. `IF` is not.</p>
                <CodeBlock className="text-sm">
                    {`If(True):      # Syntax Error!\n    print("Hi")`}
                </CodeBlock>
            </Card>
        </div>
    );
};
