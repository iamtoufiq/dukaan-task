import PropTypes from "prop-types";
const TableCardItem = ({
  orderId,
  OrderDate,
  OrderAmount,
  TransactionFees,
}) => {
  return (
    <tr className="border-b border-background-light">
      <td className="text-[#146EB4] px-0 text-sm leading-5 font-medium ">
        <p className={" py-3.5 ml-3"}>#{orderId}</p>
      </td>
      <td className="p-0 text-sm leading-5 ">
        <section className={`  px-3 py-3.5   flex items-center space-x-1.5`}>
          <p className=" text-[#1a181e] font-['Inter'] text-sm leading-5">
            {OrderDate}
          </p>
        </section>
      </td>
      {/* text-align: center;
    width: 60%; */}
      <td className="text-[#1a181e] p-0 text-sm leading-5">
        <p className={` py-3.5 px-3 text-center w-3/5`}>{OrderAmount}</p>
      </td>

      <td className="text-[#1a181e] p-0 text-sm leading-5 text-center">
        <p className={`  py-3.5 px-3 text-end   max-w-[90%] lg:max-w-[70%]`}>
          {TransactionFees}
        </p>
      </td>
    </tr>
  );
};

TableCardItem.propTypes = {
  orderId: PropTypes.number.isRequired,

  OrderDate: PropTypes.string.isRequired,
  OrderAmount: PropTypes.string.isRequired,
  TransactionFees: PropTypes.string.isRequired,
};
export default TableCardItem;
