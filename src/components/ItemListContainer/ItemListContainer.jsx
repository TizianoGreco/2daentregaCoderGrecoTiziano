import { Center, Flex, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Box, Image } from "@chakra-ui/react";
import { db } from "../../config/firebase";
import { getDocs, collection, query, where, addDoc, doc, getDoc } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { productos } from "../../data/asyncMock"; 

const ItemListContainer = ({ title }) => {
  const [productosList, setProductosList] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [productosAgregados, setProductosAgregados] = useState(false); 

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const coleccion = collection(db, 'productos');
        const queryRef = !categoryId
          ? coleccion
          : query(coleccion, where('categoria', '==', categoryId));
        const response = await getDocs(queryRef);
        const products = response.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id
          };
        });
        setProductosList(products);
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [categoryId]);

  useEffect(() => {
    if (!productosAgregados) {
      const addProducts = async () => {
        try {
          for (const prod of productos) {
            // Verificar si el producto ya existe usando un campo único (e.g., nombre o id)
            const querySnapshot = await getDocs(query(collection(db, "productos"), where("nombre", "==", prod.nombre)));
            if (querySnapshot.empty) {
              await addDoc(collection(db, "productos"), prod);
              console.log(`Producto ${prod.nombre} agregado correctamente`);
            } else {
              console.log(`Producto ${prod.nombre} ya existe en la base de datos`);
            }
          }
          setProductosAgregados(true); // Marcar que los productos han sido agregados
        } catch (error) {
          console.error("Error al agregar productos: ", error);
        }
      };

      addProducts();
    }
  }, [productosAgregados]); 

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      backgroundColor={"#ffffff"}
    >
      <Box width="100%">
        <Image 
          src="https://es.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/collections/women_montsouris/Women_Montsouris_WW_HP_Push_20240726_DI3.jpg?wid=2400" 
          alt="LV" 
          objectFit="cover" 
          width="100%" 
          height="auto" 
        />
      </Box>
      {loading ? 
        <CircularProgress isIndeterminate color='Black' /> :
        <ItemList productos={productosList} />
      }
    </Flex>
  );
};

export default ItemListContainer;
