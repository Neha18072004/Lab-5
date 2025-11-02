import React from "react";
import data from "./data";
import Card from "./components/Card";
import globeIcon from "./globe-icon.png";

export default function App() {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <div>
      <nav className="navbar">
        <img src={globeIcon} className="nav--icon" alt="globe icon" /> 
        <h1 className="nav--title">my travel journal.</h1>
      </nav>
      <section className="cards-list">{cards}</section>
    </div>
  );
}
