import React from "react";
import ReactDOM from "react-dom/client";

//Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      {/* Nesting Components (Reusable components) */}
      <Menu />
      <Footer />
    </div>
  );
}
//Header Component
function Header() {
  return <h1>Lapinoz Pizza🍕</h1>;
}

//Menu Component
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

//Footer Component
function Footer() {
  //Logic Part
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry We're currently close!");

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
  );

  //It is create component with out using JSX
  // return React.createElement("footer", null, "We're currently open!");
}

//Pizza Components
function Pizza() {
  return (
    <div>
      <img src="./pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

//React V18 - connecting to the HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //In React 18, <React.StrictMode> renders components twice in development mode to detect side effects (like alert()). This happens only in development mode, not in production.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React V17
// ReactDOM .render(<App/>,getElementById("root") )
