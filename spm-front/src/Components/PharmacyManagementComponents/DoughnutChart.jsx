import React, { useEffect, useState } from 'react';
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
import PharmacyManagement from '../../Axios/PharmacyManagement';

export default function DoughnutChart() {

    const [months, setMonths] = useState([]);
    const [income, setIncome] = useState([]);

    useEffect(() => {

        PharmacyManagement.getMonthlyIncome()
            .then((data) => {

                let m = [];
                let inc = [];
                let x = 1;
                data.data.forEach(i => {
                    if(i._id.month == "1"){
                        m.push("Jan");
                    }else if(i._id.month == "2"){
                        m.push("Feb");
                    }else if(i._id.month == "3"){
                        m.push("Mar");
                    }else if(i._id.month == "4"){
                        m.push("Apr");
                    }else if(i._id.month == "5"){
                        m.push("May");
                    }else if(i._id.month == "6"){
                        m.push("Jun");
                    }else if(i._id.month == "7"){
                        m.push("Jul");
                    }else if(i._id.month == "8"){
                        m.push("Aug");
                    }else if(i._id.month == "9"){
                        m.push("Sep");
                    }else if(i._id.month == "10"){
                        m.push("Oct");
                    }else if(i._id.month == "11"){
                        m.push("Nov");
                    }else if(i._id.month == "12"){
                        m.push("Dec");
                    }

                    inc.push(i.income);

                })

                setMonths(m);
                setIncome(inc);
            })
            .catch((err) => {
                console.log("error");
            })

    },[])

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
        labels: months,
        datasets: [
            {
                label: '# of Votes',
                data: income,
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
            <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>MONTHLY INCOME (Rs.)</div>
            <div className='card-body'>
                <br />

                <Doughnut data={data1} />

            </div>
        </div>
    )
}
