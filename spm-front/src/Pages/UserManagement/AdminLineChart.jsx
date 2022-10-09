import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, Legend
} from "recharts";

export default function AdminLineChart() {

    const data = [
        {
            name: "February",
            Anesthesiology: 4,
            Dermatology: 2,
            Family_medicine: 2
        },
        {
            name: "March",
            Anesthesiology: 3,
            Dermatology: 9,
            Family_medicine: 2
        },
        {
            name: "April",
            Anesthesiology: 2,
            Dermatology: 9,
            Family_medicine: 2
        },
        {
            name: "May",
            Anesthesiology: 2,
            Dermatology: 3,
            Family_medicine: 2
        },
        {
            name: "June",
            Anesthesiology: 1,
            Dermatology: 4,
            Family_medicine: 2
        },
        {
            name: "July",
            Anesthesiology: 2,
            Dermatology: 3,
            Family_medicine: 2
        },
        {
            name: "August",
            Anesthesiology: 3,
            Dermatology: 4,
            Family_medicine: 2
        }
    ];


    return (
        <>
            <div class="chart-area">

                <AreaChart
                    width={800}
                    height={320}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Anesthesiology"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="Dermatology"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="Family_medicine"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </AreaChart>


            </div>
        </>
    )
}
