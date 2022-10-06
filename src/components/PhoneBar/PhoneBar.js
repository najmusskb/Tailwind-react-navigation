import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';

import axios from 'axios';

const PhoneBar = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=samsung')
            .then(data => {
                const phonesLoded = data.data.data;
                // console.log(phonesLoded);
                const PhonesData = phonesLoded.map(phone => {

                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {

                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;



                })


                console.log(PhonesData)
                setPhones(PhonesData)
            });




    }, [])
    return (
        <div>
            <BarChart width={500} height={200} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />


                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;