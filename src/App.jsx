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
  return (
    <>
      <h2>Badges</h2>
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

      <Banners />
      <Cards />
      <Testimonials />
    </>
  );
}

export default App;
