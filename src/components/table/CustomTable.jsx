// import React from "react";
// import deleteIcon from "../../images/fluent_delete-20-regular.png";

// const CustomTable = ({
//   data = null,
//   columns = null,
//   hover = true,
//   striped = true,
// }) => {
//   const getCaps = (head, field) => {
//     if (head) return head.toUpperCase();
//     return field.toUpperCase();
//   };

//   return (
//     <div className="overflow-x-auto border rounded-lg">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr className="bg-gray-50">
//             <th className="px-6 py-3 text-left text-xs font-sansation uppercase tracking-wider">
//               SL.NO
//             </th>
//             {columns &&
//               columns.map((head) => (
//                 <th
//                   key={head.field}
//                   className="px-6 py-3 text-left text-xs font-sansation uppercase tracking-wider"
//                 >
//                   {getCaps(head.header, head.field)}
//                 </th>
//               ))}
//             <th className="px-6 py-3 text-left text-xs font-sansation uppercase tracking-wider"></th>
//           </tr>
//         </thead>
//         <tbody >
//           <tr>
//             <td
//               colSpan={columns.length + 1}
//               className="border-b border-gray-300"
//             >
//               <hr className=" border-t-2 border-gray-300 w-full" />
//             </td>
//           </tr>
//         </tbody>

//         <tbody className="bg-white divide-y divide-gray-200">
//           {data && data.length > 0 ? (
//             data.map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className={`${hover ? "hover:bg-blue-100" : ""} ${
//                   striped && rowIndex % 2 === 0 ? "bg-gray-50" : ""
//                 }`}
//               >
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-sansation font-regular">
//                   {rowIndex + 1}
//                 </td>
//                 {columns.map((col) => (
//                   <td
//                     key={col.field}
//                     className="px-6 py-4 whitespace-nowrap text-sm font-sansation font-regular"
//                   >
//                     {row[col.field]}
//                   </td>
//                 ))}

//                 <td className="px-6 py-4 whitespace-nowrap  font-sansation font-regular">
//                   <img src={deleteIcon} alt="delete icon" className="w-5 h-5"/>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={columns.length + 1}
//                 className="px-6 py-4 text-center text-sm font-medium text-gray-500"
//               >
//                 No Row to show :)
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomTable;


import React from "react";
import deleteIcon from "../../images/fluent_delete-20-regular.png";

const CustomTable = ({
  data = null,
  columns = null,
  hover = true,
  striped = true,
}) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-sansation uppercase tracking-wider">
              SL.NO
            </th>
            {columns &&
              columns.map((head) => (
                <th
                  key={head.field}
                  className="px-6 py-3 text-left text-xs font-sansation uppercase tracking-wider"
                >
                  {getCaps(head.header, head.field)}
                </th>
              ))}
            <th className="px-10 py-3 text-left text-xs font-sansation uppercase tracking-wider">Action</th>
          </tr>
        </thead>
      </table>
      {/* Full-width hr line */}
      <div className="relative">
        <hr className="border-t-2 border-gray-300 w-full absolute bottom-0 left-0" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {data && data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${hover ? "hover:bg-blue-100" : ""} ${
                    striped && rowIndex % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-sansation font-regular">
                    {rowIndex + 1}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.field}
                      className="px-6 py-4 whitespace-nowrap text-sm font-sansation font-regular"
                    >
                      {row[col.field]}
                    </td>
                  ))}

                  <td className="px-4 whitespace-nowrap font-sansation font-regular cursor-pointer">
                    <img src={deleteIcon} alt="delete icon" className="w-5 h-5"/>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-4 text-center text-sm font-medium text-gray-500"
                >
                  No Row to show :)
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
