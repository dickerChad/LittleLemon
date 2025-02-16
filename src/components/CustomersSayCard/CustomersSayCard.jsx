import React from "react";
import "./customersSayCard.css";

const CustomersSayCard = ({
  rating,
  customerImg,
  customerName,
  testimonial,
  ...props
}) => {
  const stars = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };

  return (
    <div className="container" {...props}>
      <div className="rating">{stars[rating]}</div>
      <div className="customer">
        <img src={customerImg} alt={customerName} />
        <span className="highlight">{customerName}</span>
      </div>
      <p className="testimonial highlight">{testimonial}</p>
    </div>
  );
};

export default CustomersSayCard;
