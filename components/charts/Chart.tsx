import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface LineProps {
  options: ChartOptions<'bar'>
  data: ChartData<'bar'>
}

function Chart({ data, options }: LineProps) {
  return (
    <>
      <div className="relative m-auto h-[50vh] w-full rounded-lg border bg-white p-4 md:col-span-2 lg:h-[70vh]">
        <Bar data={data} options={options} />
      </div>
    </>
  )
}

export default Chart
