import Badges from "./components/Badges/Badges";
import Banners from "./components/Banners/Banners";
import Cards from "./components/Cards/Cards";
import Testimonials from "./components/Testimonials/Testimonials";
import { uid } from "uid";
import Tooltips from "./components/Tooltips/Tooltips";
import Toasts from "./components/Toasts/Toasts";

function App() {
  let status = ["success", "warning", "error", "neutral"];
  let variantArray = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  let colorArray = ["green", "yellow", "red", "blue"];
  return (
    <>
      <h2 className="component-title main-text">Badges</h2>
      <h2 className="component-title">Squares</h2>
      <div className="badge-square-div">
        {variantArray.map((variantItem) => {
          return (
            <div key={uid()} className="badge-square">
              <Badges shape="square" variant={variantItem} />
              <br />
            </div>
          );
        })}
      </div>
      <h2 className="component-title">Pills</h2>
      <div className="badge-pill-div">
        {variantArray.map((variantItem) => {
          return (
            <div key={uid()} className="badge-pill">
              <Badges shape="pill" variant={variantItem} />
              <br />
            </div>
          );
        })}
      </div>
      <h2 className="component-title main-text">Banners</h2>
      <h2 className="component-title">Multi-Line</h2>
      {colorArray.map((colorItem) => {
        return (
          <div key={uid()} className="banners">
            <Banners variant={colorItem} />
            <br />
          </div>
        );
      })}
      <h2 className="component-title">Single-Line</h2>
      {colorArray.map((colorItem) => {
        return (
          <div key={uid()} className="banners">
            <Banners variant={colorItem} />
            <br />
          </div>
        );
      })}
      {/* <Banners /> */}
      <h2 className="component-title main-text">Cards</h2>
      <div className="cards-container">
        <Cards />
        <Cards />
      </div>
      <h2 className="component-title main-text">Testimonials</h2>
      <Testimonials />
      <Testimonials />
      <h2 className="component-title main-text">Tooltips</h2>
      <Tooltips />
      <h2 className="component-title main-text">Toasts</h2>
      <Toasts />
    </>
  );
}

export default App;
