
import React from 'react';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PriceOption = ({ option }) => {



    return (

        <div className='bg-yellow-200 p-10 mt-3'>

            <h3><span className='text-6xl font-extrabold text-green'>{option.price}</span><span className='text-black-100 text-2xl '>/PerMonth</span></h3>
            <div>
                <p className='text-3xl'>{option.name}</p>
                <div className='flex items-center'>
                    <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                    <p className='ml-2'>{option.features}</p>
                </div>
            </div>
        </div>
    );
};

export default PriceOption;