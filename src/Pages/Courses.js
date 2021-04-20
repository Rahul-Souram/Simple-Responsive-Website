import React from "react";
import data from "../data";
import Card from "../comp/card";

const Courses = () => {
  return (
    <>
      <h1 className="text-center bg-warning p-3"> OUR COURSES </h1>
      <hr />
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {data.map(({ id, title, img, price }) => {
                return <Card key={id} title={title} img={img} price={price} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;
