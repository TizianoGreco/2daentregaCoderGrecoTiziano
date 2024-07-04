export const productos = [
  {
    id: 1,
    nombre: "Remera 23",
    precio: 50000,
    categoria: "Remeras",
    stock: 5,
    descripcion: "Camiseta básica de alta calidad.",
    img: "https://i.pinimg.com/564x/d1/9d/9d/d19d9d6a835f2903347f20cbc7c0299b.jpg",
  },
  {
    id: 2,
    nombre: "Remera Angel",
    precio: 60000,
    categoria: "Remeras",
    stock: 8,
    descripcion: "Camiseta casual para uso diario.",
    img: "https://i.pinimg.com/564x/89/76/36/89763690f5da65dd8138fe8d8b940be4.jpg",
  },
  {
    id: 3,
    nombre: "Mochila Zhunian",
    precio: 21000,
    categoria: "Mochilas",
    stock: 3,
    descripcion: "Mochila deportiva resistente y ligera.",
    img: "https://i.pinimg.com/564x/55/d4/2a/55d42ae57d81497540de92f4e6b12da3.jpg",
  },
  {
    id: 4,
    nombre: "Gorra Urbana",
    precio: 10000,
    categoria: "Gorras",
    stock: 6,
    descripcion: "Gorra urbana cómoda y estilizada.",
    img: "https://i.pinimg.com/564x/79/db/dc/79dbdca8d1a97b39b5befeac222f310b.jpg",
  },
  {
    id: 5,
    nombre: "Gorra Clásica LA",
    precio: 8000,
    categoria: "Gorras",
    stock: 10,
    descripcion: "Gorra clásica LA .",
    img: "https://i.pinimg.com/564x/66/ce/26/66ce26e55bf905f9f17e4dfff1188412.jpg",
  },
  {
    id: 6,
    nombre: "Gorra NY",
    precio: 3700,
    categoria: "Gorras",
    stock: 10,
    descripcion: "Gorra semi plana de diseño moderno.",
    img: "https://i.pinimg.com/564x/8a/06/37/8a06379600507ba16214cf8b4d47342c.jpg",
  },
  {
    id: 7,
    nombre: "Gorra Director",
    precio: 3350,
    categoria: "Gorras",
    stock: 7,
    descripcion: "Gorra Director para un estilo único.",
    img: "https://i.pinimg.com/564x/22/ec/07/22ec0701c84ed41457862c6f32dfcc87.jpg",
  },
  {
    id: 8,
    nombre: "Mochila Casual",
    precio: 3350,
    categoria: "Mochilas",
    stock: 7,
    descripcion: "Mochila casual para uso diario.",
    img: "https://i.pinimg.com/736x/ec/84/24/ec842471c98e41e8790e1fcf55e782db.jpg",
  },
  {
    id: 9,
    nombre: "Remera espiral",
    precio: 15950,
    categoria: "Remeras",
    stock: 4,
    descripcion: "Remera espiral.",
    img: "https://i.pinimg.com/736x/8e/b7/63/8eb763f31411d0db61476a4daa2c02bf.jpg",
  },
  {
    id: 10,
    nombre: "Mochila Trap",
    precio: 55000,
    categoria: "Mochilas",
    stock: 4,
    descripcion: "Mochila trap versátil y espaciosa.",
    img: "https://i.pinimg.com/564x/46/41/2c/46412cdf4b98250778572e4577adf5ff.jpg",
  },
  {
    id: 11,
    nombre: "Camiseta Natural",
    precio: 30300,
    categoria: "Remeras",
    stock: 4,
    descripcion: "Camiseta clásica de algodón natural fears.",
    img: "https://i.pinimg.com/564x/a3/32/0f/a3320fe22fb94b45c9959b6fa360a1d1.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.categoria === categoria
    );
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(productoFiltrado);
    }, 2000);
  });
}