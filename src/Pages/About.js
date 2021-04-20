import React from "react";

const About = () => {
  return (
    <>
      <h1 className="bg-warning p-3" id="about">
        <b>ABOUT</b>
      </h1>
      <div className="container mx-auto">
        <div className="card" id="cardef">
          <div className="card-body" id="about-card">
            <div className="row">
              <h2 className="card-title  p-3 bg-primary">About Courses</h2>

              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXJzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  width="700px"
                  height="500px"
                />
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto debitis cupiditate, blanditiis iure quia atque
                  impedit illum, hic repellat sapiente et, officiis veniam ab.
                  Quia?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" id="cardef">
          <div className="card-body" id="about-card">
            <div className="row">
              <h2 className="card-title  p-3 bg-primary">About Our WebSite</h2>

              <div className="col-md-6">
                <img
                  className="img-thumbnail"
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwd2l0aCUyMGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  width="700px"
                  height="500px"
                />
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto debitis cupiditate, blanditiis iure quia atque
                  impedit illum, hic repellat sapiente et, officiis veniam ab.
                  Quia?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
