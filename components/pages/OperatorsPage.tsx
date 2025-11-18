
import React from 'react';
import { Card } from '../common/Card';
import { Tabs } from '../common/Tabs';

const OperatorTable = ({ headers, data }: { headers: string[], data: { symbol: string, name: string, example?: string }[] }) => (
    <table className="w-full text-left text-sm">
        <thead>
            <tr>
                {headers.map(h => <th key={h} className="p-4 bg-neutral-900 text-orange-400 uppercase text-xs tracking-wider">{h}</th>)}
            </tr>
        </thead>
        <tbody className="text-neutral-300">
            {data.map(({ symbol, name, example }, index) => (
                <tr key={symbol} className={index > 0 ? "border-t border-neutral-800" : ""}>
                    <td className="p-4 font-mono text-orange-400">{symbol}</td>
                    <td className="p-4">{name}</td>
                    {example && <td className="p-4 font-mono">{example}</td>}
                </tr>
            ))}
        </tbody>
    </table>
);

export const OperatorsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Operators</h1>
            <p className="text-neutral-400 mb-8">Symbols used for computation.</p>
            <Card className="overflow-hidden p-6">
                <Tabs tabs={['Math', 'Compare', 'Assign', 'Logic']} variant="secondary">
                    <div>
                        <OperatorTable headers={['Symbol', 'Name', 'Example']} data={[
                            { symbol: '+', name: 'Add', example: '10+2 = 12' },
                            { symbol: '-', name: 'Subtract', example: '10-2 = 8' },
                            { symbol: '*', name: 'Multiply', example: '10*2 = 20' },
                            { symbol: '/', name: 'Division', example: '5/2 = 2.5' },
                            { symbol: '//', name: 'Floor Div', example: '5//2 = 2' },
                            { symbol: '%', name: 'Modulus', example: '5%2 = 1' },
                            { symbol: '**', name: 'Power', example: '2**3 = 8' },
                        ]} />
                    </div>
                    <div>
                         <div className="p-4 bg-neutral-900/50 border-b border-neutral-800 text-sm text-neutral-400">
                            Returns <span className="text-orange-400">True</span> or <span className="text-orange-400">False</span>.
                        </div>
                        <OperatorTable headers={['Symbol', 'Meaning']} data={[
                            { symbol: '==', name: 'Equal to' },
                            { symbol: '!=', name: 'Not Equal' },
                            { symbol: '>', name: 'Greater than' },
                            { symbol: '<', name: 'Less than' },
                        ]} />
                    </div>
                    <div>
                        <OperatorTable headers={['Symbol', 'Short for']} data={[
                            { symbol: '=', name: 'Assign' },
                            { symbol: '+=', name: 'x = x + 1' },
                            { symbol: '-=', name: 'x = x - 1' },
                        ]} />
                    </div>
                     <div>
                        <div className="p-6 flex flex-col md:flex-row justify-center gap-4">
                            <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg text-center flex-1">
                                <div className="text-orange-500 font-bold mb-1">and</div>
                                <div className="text-xs text-neutral-500">Both must be True</div>
                            </div>
                            <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg text-center flex-1">
                                <div className="text-orange-500 font-bold mb-1">or</div>
                                <div className="text-xs text-neutral-500">One must be True</div>
                            </div>
                            <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg text-center flex-1">
                                <div className="text-orange-500 font-bold mb-1">not</div>
                                <div className="text-xs text-neutral-500">Inverses value</div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </Card>
        </div>
    );
};
