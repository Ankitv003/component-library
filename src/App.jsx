import Badges from "./components/Badges/Badges";
import Banners from "./components/Banners/Banners";
import Cards from "./components/Cards/Cards";
import Testimonials from "./components/Testimonials/Testimonials";
import { uid } from "uid";

function App() {
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
      {colorArray.map((colorItem) => {
        return (
          <div key={uid()} className="banners">
            <Banners variant={colorItem} />
            <br />
          </div>
        );
      })}
      {/* <Banners /> */}
      <Cards />
      <Testimonials />
    </>
  );
}

export default App;
