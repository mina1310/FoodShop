import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classes from "./FoodDetail.module.css";

const FoodDetail: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const { name, description } = location.state || {};

  return (
    <div className={classes["fooddetail"]}>
      <h1>How It’s Made</h1>
      {name && <h2>{name}</h2>}
      <p className={classes["fooddetail__description"]}>
        {description || params.description}
      </p>
      <p className={classes["fooddetail__action"]}>
        <Link to={"/"}>BACK</Link>
      </p>
    </div>
  );
};
export default FoodDetail;
