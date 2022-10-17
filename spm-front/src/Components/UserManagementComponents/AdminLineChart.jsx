import React from 'react'
import { useEffect, useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip, Legend
} from "recharts";
import UserManagement from '../../Axios/UserManagement';

export default function AdminLineChart() {

    const [data, setData] = useState([
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
        },

    ]);

    useEffect(() => {
        UserManagement.getUserByDate().then(res => {
            console.log(res.data, "DATE--")
            let data = [];

            const today = new Date().getMonth()
            const oneMonthAgo = new Date().getMonth() - 1
            let temp = []
            let a = 0, b = 0, c = 0;
            let a1 = 0, b1 = 0, c1 = 0;

            res.data.forEach(element => {
                console.log((today + 1).toString(), "TODAY----------")

                if (element._id.date == (today + 1).toString()) {
                    if (element._id.specialization == "Dermatology")
                        a += element.value
                    else if (element._id.specialization == "Family Medicine")
                        b += element.value
                    else if (element._id.specialization == "Anesthesiology")
                        c += element.value

                } else {
                    if (element._id.specialization == "Dermatology")
                        a1 += element.value
                    else if (element._id.specialization == "Family Medicine")
                        b1 += element.value
                    else if (element._id.specialization == "Anesthesiology")
                        c1 += element.value

                }


            })

            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            temp.push(
                {
                    name: monthNames[oneMonthAgo],
                    Anesthesiology: c1,
                    Dermatology: a1,
                    Family_medicine: b1
                },
                {
                    name: monthNames[today],
                    Anesthesiology: c,
                    Dermatology: a,
                    Family_medicine: b
                },


            )
            setData(temp)
            console.log(temp, "FINAL---------------")
        })
    }, [])

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
                    <YAxis type="number" />
                    <ZAxis type="number" range={[100]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend wrapperStyle={{ bottom: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
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
