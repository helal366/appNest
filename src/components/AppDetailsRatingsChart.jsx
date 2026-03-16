import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetailsRatingsChart = ({ clickedApp }) => {
    const { ratings  } = clickedApp;
    const sortedRatings = [...ratings].reverse();
    console.log(ratings)
    console.log(sortedRatings);
    return (
        <section className='shadow-2xl' style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width='100%' height={'400'}>
                <BarChart data={sortedRatings} layout="vertical" >
                    <XAxis type='number'/>
                    <YAxis dataKey="name" type='category'/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="count" fill="#F77F00"/>
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default AppDetailsRatingsChart;