import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, World!!!</h1>
    </div>
  );
}

//React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React V17
// ReactDOM .render(<App/>,getElementById("root") )
