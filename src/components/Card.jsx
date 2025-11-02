import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card--image" />
      <div className="card--info">
        <div className="card--location">
          <img src="/location-icon.png" alt="location icon" className="card--icon" />
          <span className="card--country">{props.location}</span>
          <a href={props.googleMapsUrl} className="card--map" target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <p className="card--dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--desc">{props.description}</p>
      </div>
    </div>
  );
}
