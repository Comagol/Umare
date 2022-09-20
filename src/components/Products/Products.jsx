import React from "react";
import ItemCount from "../ItemCount/ItenCount"
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Products () {
    return (
        <div>
            <ItemListContainer img="https://i.pinimg.com/564x/eb/0a/46/eb0a46e089b83b21947c2a5bccd1e693.jpg" 
                stock={5} 
                initial={1}
                title="Barra Industril" 
                price={25000} 
                description="Barra industrial, con excelentes terminaciones de pintura, madera dura a eleccion."/>
                <ItemCount initial={1} stock={5}/>
            <ItemListContainer img="https://i.pinimg.com/564x/b7/d7/a6/b7d7a6706676274df167e67c6e46e15c.jpg" 
                stock={20} 
                initial={1}
                title="Set Estantes Hexagonales" 
                price={3000} 
                description="Set de tres estantes hexagonales, terminacion laca al agua"/>
                <ItemCount initial={1} stock={20}/>
            <ItemListContainer img="https://i.pinimg.com/564x/e3/ad/58/e3ad585f98bc7d0cec8ad16ba08899d8.jpg" 
                stock={15} 
                initial={1}
                title="Set Estantes Cuadrados" 
                price={4500} 
                description="Set de estantes cuadrados, terminacion laca al agua, los estantes se encuentran unidos como en la foto"/>
                <ItemCount initial={1} stock={15}/>
        </div>
    )
}

export default Products