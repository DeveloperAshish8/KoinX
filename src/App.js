import "./App.css";
import Chart from "./components/Chart";
import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RightComponent from "./components/RightComponent";
import Sentiment from "./components/Sentiment";

function App() {
  return (
    <div className="App ">
      <Header />
      <div className="flex md:flex-row flex-col justify-between mt-4 mx-2">
        <div className="md:flex-1 flex-2 ml-2 ">
          <Hero />
          <Sentiment />
          <Description />
        </div>
        <div className="flex-1 md:mt-0 mt-3">
          <RightComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
