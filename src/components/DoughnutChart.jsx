import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(255, 205, 86, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(153, 102, 255, 0.9)'
                ],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }

    return <Doughnut data={data} options={options} />
}

export default DoughnutChart
