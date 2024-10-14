/* eslint-disable react/prop-types */
import "./badge.css";
const Badges = ({
  children = "badge",
  color = "green",
  variant = "square",
  style,
}) => {
  return (
    <div className="badge" style={style}>
      <span className="badge-text">{children}</span>
    </div>
  );
};

export default Badges;
