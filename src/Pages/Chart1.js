// import React, { useEffect } from 'react';
// import { Chart } from 'react-google-charts';
// import { useDispatch, useSelector } from 'react-redux';
// import { getInvoice } from '../Redux/VacateNotice/action';

// const Chart1 = () => {
//   const invoice = useSelector((state) => state.VacateNotice.invoice);
//   const dispatch = useDispatch();
//   useEffect(()=>{
//     dispatch(getInvoice())
//   },[])

//   // Check if there's an invoice and extract data
//   const data = invoice.map((item)=>{
//     return (item.month, item.year)
//   });
//   console.log(data);


//   return (
//     <div className='piechart'>
//       <Chart
//         chartType="BarChart"
//         data={data}
//         options={options}
//         width={"100%"}
//         height={"400px"}
//       />
//     </div>
//   );
// };

// export default Chart1;

// export const options = {
//   legend: { position: 'none' },
//   pieSliceText: 'label',
//   pieStartAngle: 100,
//   hAxis: {
//     title: 'Month',
//   },
//   vAxis: {
//     title: 'Rent',
//   },
// };
import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoice } from '../Redux/VacateNotice/action';

const Chart1 = () => {
  const invoice = useSelector((state) => state.VacateNotice.invoice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoice());
  }, []);

  // Check if there's an invoice and extract data
  const data = invoice.map((item) => [item.month || 'N/A', parseInt(item.rent) || 0]);
  return (
    <div className='piechart'>
      <Chart
        chartType="BarChart"
        data={[["Month", "Rent"], ...data]} // Include column headers
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Chart1;

export const options = {
  legend: { position: 'none' },
  hAxis: {
    title: "Rent",
  },
  vAxis: {
    title: "Month",
  },
};
