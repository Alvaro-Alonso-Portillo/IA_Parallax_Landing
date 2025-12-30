import React from 'react';

const PriceColumn: React.FC<{ title: string; price: string; features: string[]; isPopular?: boolean; color: string }> = ({ title, price, features, isPopular, color }) => (
    <div className={`relative flex-1 bg-white border-2 border-black rounded-sketch p-6 flex flex-col gap-6 shadow-sketch hover:-translate-y-2 transition-transform duration-300 ${isPopular ? 'scale-105 z-10' : ''}`}>
        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow border-2 border-black px-4 py-1 rounded-full font-bold uppercase text-xs tracking-wider shadow-sm">
                Best Choice
            </div>
        )}

        <div className="text-center border-b-2 border-black pb-4 border-dashed">
            <h3 className="font-display uppercase text-2xl mb-2">{title}</h3>
            <div className="text-4xl font-black">{price}</div>
        </div>

        <ul className="space-y-3 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                    <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0 ${color}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {feature}
                </li>
            ))}
        </ul>

        <button className={`w-full py-3 rounded-full font-bold uppercase border-2 border-black transition-all hover:shadow-sketch ${isPopular ? 'bg-black text-white hover:bg-brand-blue' : 'bg-transparent hover:bg-black hover:text-white'}`}>
            Choose Plan
        </button>
    </div>
);

export const PricingTable: React.FC = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-6xl mx-auto">
                    <PriceColumn
                        title="Basic"
                        price="$3,200"
                        color="bg-gray-200"
                        features={[
                            "Deadline 10 days",
                            "Design up to 6-10 blocks",
                            "2 mascot design options",
                            "Mobile adaptation"
                        ]}
                    />
                    <PriceColumn
                        title="Standard"
                        price="$6,000"
                        color="bg-brand-blue/50"
                        isPopular={true}
                        features={[
                            "Deadline 2-3 weeks",
                            "Design up to 6-10 blocks",
                            "4 mascot design options",
                            "Unique illustrations (10 pieces)",
                            "Mobile adaptation",
                            "10 hours revisions"
                        ]}
                    />
                    <PriceColumn
                        title="Agency"
                        price="$8,000"
                        color="bg-brand-yellow"
                        features={[
                            "Deadline 4 weeks",
                            "Design up to 10-15 blocks",
                            "6 mascot design options",
                            "Unique illustrations (20 pieces)",
                            "Mobile + Tablet adaptation",
                            "20 hours revisions"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};
