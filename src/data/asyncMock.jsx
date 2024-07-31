export const productos = [
  {
    id: 1,
    nombre: "Remera LV",
    precio: 30000,
    categoria: "Camisetas",
    stock: 5,
    descripcion:
      "Remera LV sport",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-camiseta-de-manga-corta-en-algod%C3%B3n-pr%C3%AAt-%C3%A0-porter--HQN21WDFV410_PM1_Worn%20view.png?wid=1090&hei=1090",
  },
  {
    id: 2,
    nombre: "Pantalón LV",
    precio: 12000,
    categoria: "Joggins",
    stock: 8,
    descripcion:
      "Pantalón LV algodon",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pantal%C3%B3n-de-ch%C3%A1ndal-t%C3%A9cnico-monogram-pr%C3%AAt-%C3%A0-porter--HRP83WMJW4M1_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 3,
    nombre: "Campera Moncler",
    precio: 18000,
    categoria: "Camperas",
    stock: 3,
    descripcion:
      "Moncler aprueba de balas",
    img: "https://moncler-cdn.thron.com/delivery/public/image/moncler/J20911A51X0068950999_R/dpx6uv/std/768x1152/image.jpg?scalemode=centered&adjustcrop=reduce&quality=80&format=WEBP",
  },
  {
    id: 4,
    nombre: "LV Runner 2",
    precio: 22500,
    categoria: "Calzado",
    stock: 6,
    descripcion:
      "Rich Runner 2",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zapatilla-deportiva-lv-trainer-zapatos--BM9U5PMI02_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 5,
    nombre: "LV 5",
    precio: 3500,
    categoria: "Gorras",
    stock: 10,
    descripcion: "LV 5",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gorra-damier-denim-3d-s00-sombreros--M7534M_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 6,
    nombre: "Gucci Cup",
    precio: 3700,
    categoria: "Gorras",
    stock: 10,
    descripcion: "Gucci Cup 1",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gorra-washed-3d-s00-sombreros--M7690M_PM2_Front%20view.png?wid=2400&hei=2400",
  },
  {
    id: 7,
    nombre: "Gucci Cup 2",
    precio: 3350,
    categoria: "Gorras",
    stock: 7,
    descripcion: "Gucci Cup 2",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-gorra-damier-louis-vuitton-s00-sombreros--M7722M_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 8,
    nombre: "LV runner 28",
    precio: 3350,
    categoria: "Calzado",
    stock: 7,
    descripcion: "LV Runner 28",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zapatilla-deportiva-lv-trainer-zapatos--BR9U1PDN20_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 9,
    nombre: "LV JG",
    precio: 15950,
    categoria: "Joggins",
    stock: 4,
    descripcion: "LV no more",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pantal%C3%B3n-de-ch%C3%A1ndal-t%C3%A9cnico-monogram-pr%C3%AAt-%C3%A0-porter--HRP83WMJW609_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 10,
    nombre: "LV Remera Degradado",
    precio: 25950,
    categoria: "Camisetas",
    stock: 4,
    descripcion: "LV Remera Degradado",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-camiseta-de-algod%C3%B3n-con-efecto-degradado-pr%C3%AAt-%C3%A0-porter--HQY42WFSB70A_PM2_Front%20view.png?wid=1090&hei=1090",
  },
  {
    id: 11,
    nombre: "LV Short",
    precio: 15600,
    categoria: "Shorts",
    stock: 4,
    descripcion: "LV Short",
    img: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-ba%C3%B1ador-estampado-de-nailon-pr%C3%AAt-%C3%A0-porter--HRW01WMDG610_PM2_Front%20view.png?wid=2400&hei=2400",
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