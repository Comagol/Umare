import React from "react"
import './ItemListContainer.css'

function ItemListContainer (props) {
    return (
        <div>
         <h1 className="nombre">{props.greeting}</h1>
            <div className="container">
                <div className="info-container">
                    <div className="img-container">
                     <img src={props.img}></img>
                    </div>
                 <h3 className="title">{props.title}</h3>
                 <p className="description">{props.description}</p>
                 <h4 className="price">{props.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer