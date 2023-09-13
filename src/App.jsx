import "./App.css";
import Hero from "./component/Hero/Hero.jsx";
import Programs from "./component/Programs/Programs.jsx";
import Reasons from "./component/Reasons/Reasons.jsx";
import Plans from "./component/Plans/Plans.jsx";
import Testimonials from "./component/Testimonials/Testimonials.jsx";
import Join from "./component/Join/Join.jsx";
import Footer from "./component/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
