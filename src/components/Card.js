import React from 'react';
import proptype from 'prop-types'
import './cards.css'

function Card({title, imageSource, text, url}) {
      return (
        <div className="card text-center bg-dark">         
            
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top"/> 
            </div>

            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">              
                    {
                      text ? text : 'Los marcos de Javascript son bibliotecas reescritas de funciones de javascript para ayudar a los desarrolladores a resolver soluciones complejas. Proporciona una excelente estructura, por lo tanto, podemos crear código compatible con todos los navegadores.'
                    }          
                </p>         
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Go to this website
                </a>                
            </div>            
        </div>       
    );
}

Card.proptype = {
    title: proptype.string.isRequired,
    url: proptype.string,
    imageSource: proptype.string,
    text: proptype.string
}

export default Card