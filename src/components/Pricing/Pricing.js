import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const PricingOption = [
        {
            id: 1, name: 'free', price: 0,
            features: [
                'Awsome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'we never use fetture',
                'joos features'
            ]
        },
        {
            id: 2, name: 'pre', price: 9.99,
            Features: [
                'Awsome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'we never use fetture',
                'joos features'

            ]
        },
        {
            id: 3, name: 'medum', price: 6.1,
            features:
                [
                    'Awsome Feature',
                    'Extra Feature',
                    'Unnecessary Feature',
                    'we never use fetture',
                    'joos features'

                ]
        }
    ];

    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12'>Best Deal of the Town</h2>

            <div className='grid grid-cols-3 gap-2  sm:col-1 '>
                {
                    PricingOption.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)

                }
            </div>

        </div>
    );
};

export default Pricing;