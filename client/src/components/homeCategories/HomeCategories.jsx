import React from "react";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  return (
      <div className="w-full flex justify-between items-center">
        <Link to={"/recipe"}></Link>
      </div>
  );
};

export default HomeCategories;
