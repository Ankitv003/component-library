import "./Banners.css";
const Banners = ({
  variant,
  children = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, vitae?",
}) => {
  return (
    <div className={`banner ${variant}`}>
      <span className="banner-text">{children}</span>
    </div>
  );
};

export default Banners;
