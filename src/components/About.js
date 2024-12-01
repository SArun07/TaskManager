import React from 'react'

const About = () => {
  return (
    <>
      <h1>This is About Page</h1>
      <div className="jumbotron container">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/" role="button">
            Learn more
          </a>
        </p>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide container" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="3.jpg" class="d-block w-100" alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ut.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="4.jpg" class="d-block w-100" alt="Second slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, velit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="3.jpg" class="d-block w-100" alt="Third slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eum.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
export default About



// This below code for understanding context


// export default About
// import React, { useContext, useEffect } from 'react'
// import NoteContext from '../context/notes/noteContext'

// const About = () => {
//   const a = useContext(NoteContext);
//   useEffect(()=>{
//     a.update();
//     // eslint-disable-next-line
//   },[])
//   return (
//     <div>
//       This is About {a.state.name} he is in class {a.state.class}
//     </div>
//   )
// }

