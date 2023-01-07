import React from 'react'

const Card = (props) => {
    // console.log(props.items.title);
  return (
    <div className="card" style={{ width: "19rem" }}>
      <img src={props.items.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.items.title}</h5>
        <p className="card-text">
          <div className="company">
            <b>COMPANY: </b>
            {props.items.company}
          </div>
          <div className="price">
            <b>PRICE: </b>${props.items.price}
          </div>
        </p>
        <button className="btn btn-primary">
          Add to cart
        </button>
        &nbsp;&nbsp;
        <button className="btn btn-primary">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Card