import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      <div className="counterContainer">
        <Counter />
        <div className="empty"></div>
        <Counter2 />
      </div>
    </div>
  );
}

export default App;
