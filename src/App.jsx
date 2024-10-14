import Badges from "./components/Badges/Badges";
import Banners from "./components/Banners/Banners";
import Cards from "./components/Cards/Cards";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Badges
        color="yellow"
        variant="square"
        style={{
          fontSize: "1rem",
          padding: "4px 8px",
          backgroundColor: "green",
        }}
      />
      <Banners />
      <Cards />
      <Testimonials />
    </>
  );
}

export default App;
