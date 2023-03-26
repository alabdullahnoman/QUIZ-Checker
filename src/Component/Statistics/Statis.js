import './Statistics.css'
import React from 'react';
import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useLoaderData } from 'react-router-dom';
const Statis = () => {
    const data =useLoaderData().data
    
    return (
       <div>
         <ResponsiveContainer width="60%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
       </div>
    );
};

export default Statis;