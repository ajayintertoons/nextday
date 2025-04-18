
import React from 'react';

const CostSummary = ({ items, total }) => {
  return (
    <div>
      <h5 className="bold-sansation text-lg">Cost Summary</h5>
      {items?.map((item, index) => (
        <div key={index} className="flex justify-between py-1 text-sm">
          <div>{item.label}</div>
          <div>{item.value}</div>
        </div>
      ))}
      <div className="bg-custom-gray flex justify-between p-2 px-4 bold-sansation m-4 border rounded-md  ">
        <div>Total</div>
        <div>{total}</div>
      </div>
    </div>
  );
};

export default CostSummary;
