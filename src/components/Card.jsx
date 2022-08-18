import React from "react";

function Card({ projects }) {
  // const link = `https://${props.index + 1}-${props.name}.netlify.app`;
  return projects.map((item, index) => {
    const { id, img, name } = item;
    const link = `https://${index + 1}-${name}.netlify.app`;

    return (
      <article key={id} className="col-lg-6 col-md-12 col-sm-12 col-xl-4">
        <div className="card mb-5 mx-2 box-shadow ">
          <img src={img} alt={name} />
          <div className="card-body">
            <h5 className="card-title mb-3">
              {index + 1}. {name}
            </h5>
            <div className="links-container">
              <a href={link} className="links" target="_blank" rel="noreferrer">
                <i className="fa fa-link "></i>
              </a>
              <a href={link} className="links" target="_blank" rel="noreferrer">
                <i className="fab fa-github "></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  });
}

export default Card;
