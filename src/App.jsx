import Navbar from "./UI/Navbar";
import Contact from "./layouts/Contact";
import HomePage from "./layouts/HomePage";
import Reviews from "./layouts/Reviews";
import Services from "./layouts/Services";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
}

export default App;
