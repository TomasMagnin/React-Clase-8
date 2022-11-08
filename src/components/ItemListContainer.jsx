import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import "./ItemListContainer";
export default function ItemListContainer({ greeting }) {
 
 
    /* hook useParams de React Router sirve para guardar en una variable*/
 
    const { idcategory } = useParams();      /* Cualquier componente puede ejecutar esta linea de codigo, y ver si la ruta tiene un ID de categoria */

  const [productos, setProductos] = useState([]);
  let productosHC = [
    { id: 100, name: "pelota", category: "deportes", precio: 100 },
    { id: 101, name: "arco", category: "deportes", precio: 100 },
    { id: 102, name: "pantalon", category: "deportes", precio: 100 },
    { id: 103, name: "vestido lola", category: "fiesta", precio: 200 },
    {
      id: 104,
      name: "cartera con diamantes",
      category: "fiesta",
      precio: 1000,
    },
  ];

  useEffect(() => {        /* Usamos el use efect para que monitoree los cambios,  */

    // alert("cambio la categoria por eso salta de nuevo este efecto");
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category == idcategory));    /* HAcemos un IF para filtrar los productos del array que coindice su categoria con la de la ruta donde estoy*/
      } else {
        setProductos(res);  /* Sino tiene categoria le pasamos todos los productos */
      }
    });
  }, [idcategory]); /* Lo que esta entre los corchetes define cuando se ejecuta, si no tiene nada se ejecuta todo el tiempo, si esta vacio es una vez cuando no hay nada en la varibale, en este caso cuando la varible idcategory cambia se ejecuta nuevametne, osea se ejecuta el componente por primera vex y si cambia de categoria cambia la variable idcategory y se ejecuta de nuevo el componente.*/

  return (
    <div>
      {!productos.length && "Loading..."}           {/* Esto es el equivalente a un IF, si la varible productos tiene contenido entonces aparece el string loading */}
      {productos.map((item) => (
        <div key={item.id}>
          {JSON.stringify(item)}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}