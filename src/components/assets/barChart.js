import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm','5 pm','6 pm','7 pm'];

export const data = {
  labels,
  datasets: [
    {
      label: 'No of Vehicles',
      data: [1,2,5,6,8,6,7,3,9,2],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    // },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
};

 const BarChart=()=> {
  return (
    <Bar options={options} data={data} />
  )
 
}

export default BarChart
