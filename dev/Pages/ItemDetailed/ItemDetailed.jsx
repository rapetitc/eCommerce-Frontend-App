import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailed.scss";

import db from "../../src/db";
import ItemCounter from "../../Components/ItemCounter/ItemCounter";

const ItemDetailed = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    db.getItemByIdFrom(parseInt(id), "products", (data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className='ItemDetailed container'>
      {Object.keys(product).length > 0 ? (
        <div className='productContainer'>
          <div className='productPreview'>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className='productDetails'>
            <p>Categoria: {product.category}</p>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Disponibilidad: {product.stock}</p>
            <p>Marca: {product.brand}</p>
            <p>${product.price}</p>
            <div className='productDetails-Buttons'>
              <ItemCounter id={product.id} />
            </div>
          </div>
        </div>
      ) : (
        <div>No se encontro un producto</div>
      )}
    </div>
  );
};

export default ItemDetailed;
