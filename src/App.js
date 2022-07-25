import "./App.css";

function App() {
  const age = 19;

  return (
    <div className="App">{age <= 18 ? <h1> we are</h1> : <h1> foloow</h1>}</div>
  );
}

export default App;
