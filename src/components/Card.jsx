import React from 'react';

       
function Card(props) {
   const link = `https://${props.index + 1}-${props.name}.netlify.app`;
return (
    
<div className='col-md-4'>
    <div className='card mb-5 mx-3 box-shadow '>
        <img src="https://picsum.photos/100" alt={props.name}  />
        <div className="card-body">
            <h5 className="card-title mb-3">{props.index + 1}.{props.name}</h5>
            <a href={link} className="links" target="_blank">
				<i className="fa fa-lg fa-link"></i>
               
			</a>
        </div>
    </div>
</div>
);

}

export default Card;