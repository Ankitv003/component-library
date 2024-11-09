/* eslint-disable react/prop-types */
import "./badge.css";
const Badges = ({ children = "Badge", shape, variant }) => {
  return (
    <div className={`badge ${variant} ${shape}`}>
      <span className="badge-text">{children}</span>
    </div>
  );
};

export default Badges;
