import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, Legend
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";
import UserManagement from '../../Axios/UserManagement';

export default function AdminPieChart() {
    const [pieData, setPieData] = useState([]);

    useEffect(() => {
        UserManagement.getUserByCount().then(res => {

            let temp = []
            let total = 0;
            let flag = false;
            res.data.forEach(element => {
                if (flag == false) {
                    res.data.forEach(element => {
                        total += element.value
                    });
                    flag = true
                }

                if (element._id == "patient") {
                    temp.push({ name: "Patients", value: parseFloat((element.value / total * 100).toFixed(2)) })
                } else if (element._id == "admin")
                    temp.push({ name: "Admins", value: parseFloat((element.value / total * 100).toFixed(2)) })
                else if (element._id == "doctor")
                    temp.push({ name: "Doctors", value: parseFloat((element.value / total * 100).toFixed(2)) })
                else if (element._id == "pharmacist")
                    temp.push({ name: "Pharmacists", value: parseFloat((element.value / total * 100).toFixed(2)) })
            });
            setPieData(temp)
        })
    }, [])





    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            )

        }
        return null
    }

    return (
        <>
            {
                pieData.length !== 0 && <PieChart width={400} height={322}>
                    <Pie
                        data={pieData}
                        color="#000000"
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                    >
                        {pieData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                </PieChart>
            }

        </>
    )
}
