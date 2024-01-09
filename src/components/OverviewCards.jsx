import PropTypes from "prop-types";
// import PayoutCard from "./PayoutCard";
import AmountCard from "./AmountCard";

const OverviewCards = () => {
  return (
    <ul className="flex items-start w-full md:space-x-5 flex-wrap gap-2 flex-col md:flex-row">
      <AmountCard title="Online orders" amount="231" />
      <AmountCard title="Amount received" amount="₹23,92,312.19" />
    </ul>
  );
};
AmountCard.propTypes = {
  processed: PropTypes.bool,
};
export default OverviewCards;
