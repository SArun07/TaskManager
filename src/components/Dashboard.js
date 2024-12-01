import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <>

      <section id="main-slider" class="no-margin">
        <div class="carousel slide">      
            <div class="carousel-inner">
              <div className="item active" style={{ backgroundImage: "url(img/bg1.jpg)", height: "100vh", backgroundSize: "cover", backgroundPosition: "center", }}>
                    <div class="container">
                        <div class="row">
                            <div class="d-flex justify-content-center mt-5">
                                <div class="carousel-content ">
                                    <h2 class="text-light font-weight-bold">Welcome TO<span className="text-dark"> TASKMANAGER</span></h2>
                                    <p class="">Hii, This is Arun Singh</p>
                                    <Link className="btn btn-success mx-1" to="/" role="button">Read More</Link>
                                </div>
                            </div>

                            {/* <div class="col-sm-6 hidden-xs animation animated-item-4">
                                <div class="slider-img">
                                  <img src="3.jpg" alt="" class="myimg1"/>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
};

export default Dashboard;
