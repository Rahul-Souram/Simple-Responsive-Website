import React from "react";

const content = () => {
  return (
    <>
      <hr />
      <h2
        id="tech"
        className="text-center text-decoration-underline font-weight-bold"
      >
        ALL LATEST TECHNOLOGIES...
      </h2>
      <div className="card-deck conainer row m-5">
        <div className="card col-md-6 " id="cardef">
          <div className="card-header">
            <h2 className="card-title text-primary">Artificial Intelligence</h2>
          </div>
          <div className="card-body text-primary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate at provident esse vitae debitis assumenda totam animi
              deleniti unde tenetur!
            </p>
          </div>
        </div>
        <div className="card col-md-6 " id="cardef">
          <div className="card-header">
            <h2 className="card-title text-warning">Machine Learning</h2>
          </div>
          <div className="card-body text-warning">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis necessitatibus harum totam praesentium modi odit ut
              dolore animi velit maiores.
            </p>
          </div>
        </div>
        <div className="card col-md-6 " id="cardef">
          <div className="card-header">
            <h2 className="card-title text-success">Web Devlopment</h2>
          </div>
          <div className="card-body text-success">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              aliquam quaerat sunt eligendi earum labore, dolorem molestias.
              Doloribus, eos est.
            </p>
          </div>
        </div>
        <div className="card col-md-6 " id="cardef">
          <div className="card-header">
            <h2 className="card-title text-danger">Game Devlopment</h2>
          </div>
          <div className="card-body text-danger">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              cumque quod similique incidunt cum libero quo, dolorum a alias
              officiis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;
