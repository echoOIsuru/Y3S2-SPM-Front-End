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
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {

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
   * Doughnut chart
   */

    const data1 = {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
            {
                label: '# of Votes',
                data: [14515, 13780, 18820, 9870, 20250, 17550],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='card shadow'>
            <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>MONTHLY INCOME</div>
            <div className='card-body'>
                <br />

                <Doughnut data={data1} />

            </div>
        </div>
    )
}
