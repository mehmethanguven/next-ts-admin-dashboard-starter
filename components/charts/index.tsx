import { ChartData, ChartOptions } from 'chart.js'
import React from 'react'
import RevenueChart from './Chart'

function RevenueCharts() {
  const data: ChartData<'bar'> = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales $',
        data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235, 0.4',
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Revenue',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  }
  return <RevenueChart data={data} options={options} />
}

export default RevenueCharts
