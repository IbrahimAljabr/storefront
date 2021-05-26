const initialState = {
  arrOfProducts: [
    {
      name: "Apple",
      category: "FOOD",
      description: "you can eat . ",
      url: "https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg",
      price: "73$",
      inventory: 5,
    },
    {
      name: "Laptops",
      category: "ELECTRONICS",
      description: "to use Laptops. ",
      url: "https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg",
      price: "73$",
      inventory: 4,
    },
    {
      name: "Xbox",
      category: "ELECTRONICS",
      description: "to use Xbox. ",
      url: "https://media.wired.com/photos/5fa5dc3dba670daaf8e97a8d/1:1/w_1471,h_1471,c_limit/games_gear_series-x.jpg",
      price: "73$",
      inventory: 3,
    },
    {
      name: "Carrots",
      category: "FOOD",
      description: "you can eat .",
      url: "https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg",
      price: "67$",
      inventory: 5,
    },
    {
      name: "MB&F ",
      category: "ELECTRONICS",
      description: "To know the time at the currunt time . ",
      url: "https://oracleoftime.com/wp-content/uploads/2019/07/MBF-Legacy-Machine-No.2-Red-Gold-Blue-Watch-3.jpg",
      price: "1175$",
      inventory: 2,
    },
    {
      name: "Iphone12",
      category: "ELECTRONICS",
      description: "Make a phone call . ",
      url: "https://www.kickmobiles.com/images/thumbs/0013868_apple-iphone-12-pro-max_808.jpeg",
      price: "186$",
      inventory: 5,
    },
    {
      name: "Watermelon",
      category: "FOOD",
      description: "you can eat . ",
      url: "https://all-americaselections.org/wp-content/uploads/2019/06/Watermelon-Mambo.jpg",
      price: "73$",
      inventory: 2,
    },
    {
      name: "Flafel",
      category: "FOOD",
      description: "you can eat . ",
      url: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg",
      price: "73$",
      inventory: 3,
    },
    {
      name: "Shawerma",
      category: "FOOD",
      description: "you can eat . ",
      url: "https://images.deliveryhero.io/image/talabat/MenuItems/2019-11-17_Talabat_J_637313960956729027.jpg",
      price: "73$",
      inventory: 4,
    },
    {
      name: "PS5",
      category: "ELECTRONICS",
      description: "to use PS5. ",
      url: "https://blog.playstation.com/tachyon/2021/04/51111308992_bb62e2ccaf_k.jpg?resize=1088,612&crop_strategy=smart",
      price: "73$",
      inventory: 3,
    },
    {
      name: "Switch",
      category: "ELECTRONICS",
      description: "to use Switch. ",
      url: "https://images-na.ssl-images-amazon.com/images/I/81nn7QDJFeL._AC_SX679_.jpg",
      price: "73$",
      inventory: 5,
    },
    {
      name: "TV",
      category: "ELECTRONICS",
      description: "to use tv. ",
      url: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=WS1017c3",
      price: "73$",
      inventory: 3,
    },
  ],
  products: [],
};

const productsList = (state, action) => {
  state = initialState;
  const { type, payload } = action;
  let arrOfList = [];
  switch (type) {
    case "ELECTRONICS":
      state.products = state.arrOfProducts.filter((product) => {
        return product.category === payload;
      });
      return { ...state, arrOfProducts: state.products };

    case "FOOD":
      state.products = state.arrOfProducts.filter((product) => {
        return product.category === payload;
      });
      return { ...state, arrOfProducts: state.products };

    case "ADD":
      arrOfList = state.arrOfProducts.filter((product) => {
        if (product === payload) {
          product.inventory -= 1;
        }

        return product === payload;
      });

      return { arrOfProducts: state.products, arrOfList: arrOfList };

    default:
      return null;
  }
};

export default productsList;
