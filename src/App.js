import ReactDOM from "react-dom/client";
// import DarkDay from "./days/DarkDay";
import "./App.css";
// import KafkaForm from "./days/KafkaForm";
import BlackRainbow from "./days/BlackRainbow/BlackRainbow";

const App = () => {
  return (
    <div className="p-0 m-0 grid grid-cols-mainsm md:grid-cols-main min-h-screen bg-slate-100">
      {/* left column */}
      <div className="border-r-2 border-200 grid grid-rows-main">
        <div className="border-b-2 border-200"></div>
        <div></div>
        <div className="border-t-2 border-200"></div>
      </div>

      {/* center column */}
      <div className="grid-rows-main grid">
        <div className="border-b-2 border-200 text-center">
          <h1 className="font-bold p-4">unrefined</h1>
        </div>
        <div className="p-6">
          {/* <DarkDay /> */}
          {/* <KafkaForm /> */}
          <BlackRainbow />
          {/* <SillySketch /> */}
        </div>
        <div className="border-t-2 border-200 text-center">
          <h1 className="font-bold p-4"> By Andreas Berglund</h1>
        </div>
      </div>

      {/* right column */}
      <div className="border-l-2 border-200 grid grid-rows-main">
        <div className="border-b-2 border-200"></div>
        <div></div>
        <div className="border-t-2 border-200"></div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
