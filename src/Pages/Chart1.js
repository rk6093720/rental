import React from 'react'
import {Chart }from 'react-google-charts';

const Chart1 = () => {
  return (
      <div className='piechart'>
          <Chart  
             chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}  />
    </div>
  )
}

export default Chart1;
export const data = [
    ["Billing", "Billing (in millions)"],
    ["pending", 500],
    ["paid", 300],
    ["Bill", 200],
];
export const options = {
    legend: "none",
    pieSliceText: "label",
    // title: "Billing",
    pieStartAngle: 100,
};