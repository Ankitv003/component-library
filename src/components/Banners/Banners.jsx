import "./Banners.css";
const Banners = ({ variant, children }) => {
  return (
    <div className={`banner ${variant}`}>
      <span className="banner-text">{children}</span>
    </div>
  );
};

export default Banners;
