import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Products () {
    return (
        <div>
            <ItemListContainer img="https://i.pinimg.com/564x/eb/0a/46/eb0a46e089b83b21947c2a5bccd1e693.jpg" title="Barra Industril" price={25000} description="Barra industrial, con excelentes terminaciones de pintura, madera dura a eleccion."/>
            <ItemListContainer img="https://i.pinimg.com/564x/b7/d7/a6/b7d7a6706676274df167e67c6e46e15c.jpg" title="Set Estantes Hexagonales" price={3000} description="Set de tres estantes hexagonales, terminacion laca al agua"/>
            <ItemListContainer img="https://i.pinimg.com/564x/e3/ad/58/e3ad585f98bc7d0cec8ad16ba08899d8.jpg" title="Set Estantes Cuadrados" price={4500} description="Set de estantes cuadrados, terminacion laca al agua, los estantes se encuentran unidos como en la foto"/>
        </div>
    )
}

export default Products