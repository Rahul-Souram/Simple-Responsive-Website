import React from "react";
import { Link } from "react-router-dom";

const Card = (item) => {
  const { id, img, title, price } = item;
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card " key={id} id="cardef">
          <img src={img} className="card-img-top" alt={img} />
          <div className="card-body text-primary">
            <h5 className="card-title font-weight-bold text-success">
              {title}
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cum
              similique, maiores quas dolores neque at nisi nemo iure veritatis,
              accusamus qui a, possimus labore.
            </p>
            <h4>${price}</h4>
            <Link to="/contactus" className="btn btn-success">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
