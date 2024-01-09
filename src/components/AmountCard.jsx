import PropTypes from "prop-types";
const AmountCard = ({ amount, title }) => {
  return (
    <li className="flex rounded-lg flex-1 grow  flex-col space-y-4 p-5 bg-white m-auto shadow-md w-full md:w-auto">
      <header className="flex space-x-2 items-center text-[#4d4d4d]">
        <h1>{title}</h1>
      </header>

      <h1 className="text-[#1a181e] text-[32px] leading-[38px] font-medium grow">
        {amount}
      </h1>
    </li>
  );
};
AmountCard.propTypes = {
  processed: PropTypes.bool.isRequired,
  title: PropTypes.bool.isRequired,
  amount: PropTypes.bool.isRequired,
};
export default AmountCard;
