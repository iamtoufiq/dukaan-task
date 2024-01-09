import { useEffect, useState } from "react";
import { tableData } from "../constant/data";
import TableFilters from "./TableFilters";
import TableCardItem from "./TableCardItem";
import clsx from "clsx";
const Table = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const productsPerPage = 19;
  const totalPages = Math.ceil(data.length / productsPerPage);
  console.log("totalPages", totalPages);
  useEffect(() => {
    setData([...tableData]);
  }, []);

  const handlePaginationClick = (newPage) => {
    setPage(newPage);
  };
  console.log("page number", page);
  return (
    <div className="overflow-x-auto">
      <div
        className="bg-white border border-white rounded-lg p-3 space-y-3"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        <TableFilters />
        <div className="max-w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f2f2f2]">
                <th className="text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm">
                  Order ID
                </th>
                <th className="text-text py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm">
                  Order date
                </th>
                <th className="text-text py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm">
                  Order amount
                </th>
                <th className="text-text flex justify-center items-center gap-1 py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm">
                  Transaction fees{" "}
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_0_5817)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                        fill="#4D4D4D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                        fill="#4D4D4D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                        fill="#4D4D4D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_5817">
                        <rect width={14} height={14} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice((page - 1) * productsPerPage, page * productsPerPage)
                ?.map(
                  (
                    { orderId, OrderDate, OrderAmount, TransactionFees },
                    index
                  ) => (
                    <TableCardItem
                      key={orderId}
                      orderId={orderId}
                      OrderDate={OrderDate}
                      OrderAmount={OrderAmount}
                      TransactionFees={TransactionFees}
                      index={index}
                    />
                  )
                )}
            </tbody>
          </table>
          <footer className="pt-6 flex justify-center items-center">
            <div className="flex items-center gap-6">
              <div
                onClick={() => {
                  if (page > 1) {
                    handlePaginationClick(page - 1);
                  }
                }}
                className={clsx(
                  "flex",
                  "justify-center",
                  "items-center",
                  "gap-1.5",
                  "py-1",
                  "pl-1",
                  "pr-3",
                  "rounded",
                  "border",
                  "cursor-pointer",
                  "border-[#d9d9d9]",
                  "bg-white",
                  page == 1 && "opacity-50 cursor-not-allowed "
                )}
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
                    fill="#4D4D4D"
                  />
                </svg>
                <div className="flex items-start gap-2 text-[#4d4d4d] text-center font-['Inter'] text-sm font-medium leading-5">
                  Previous
                </div>
              </div>

              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={clsx(
                    "frame_39928 flex items-start",
                    "cursor-pointer",
                    i + 1 === page &&
                      " flex text-[#4d4d4d] text-center text-sm font-medium  border border-solid rounded-sm justify-center items-center  cursor-pointer border-[#d9d9d9] bg-white"
                  )}
                  onClick={() => handlePaginationClick(i + 1)}
                >
                  <div className="flex flex-col justify-center items-center gap-2 p-0 w-7 h-7 rounded self-stretch text-[#4d4d4d] text-center font-['Inter'] text-sm leading-5">
                    {i + 1}
                  </div>
                </div>
              ))}

              <div
                onClick={() => {
                  if (page < totalPages) {
                    handlePaginationClick(page + 1);
                  }
                }}
                className={clsx(
                  "flex",
                  "justify-center",
                  "items-center",
                  "gap-1.5",
                  "py-1",
                  "pl-3",
                  "pr-1",
                  "rounded",
                  "border",
                  "cursor-pointer",
                  "border-[#d9d9d9]",
                  "bg-white",
                  page == totalPages ? "opacity-50 " : ""
                )}
              >
                <div className="flex items-start gap-2 text-[#4d4d4d] text-center font-['Inter'] text-sm font-medium leading-5">
                  Next
                </div>
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Table;
