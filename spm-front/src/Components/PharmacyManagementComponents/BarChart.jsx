import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function BarChart() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    );

    /**
     * Bar chart
     */

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Medicines that will shortly run out of stock',
            },
        },
    };
    const labels = ['Amoxicillin', 'Meloxicam', 'Gabapentin', 'Entyvio', 'Metoprolol', 'Clindamycin', 'Pantoprazole'];

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
        ],
    };

    return (
        <div className='card shadow'>
            <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>STOCK REPORT</div>
            <div className='card-body'>

                <Bar options={options} data={data} />

            </div>
        </div>
    )
}
