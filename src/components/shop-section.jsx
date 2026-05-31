<<<<<<< HEAD
import "../styles/shop-section.css";
=======
import "./style.css";
>>>>>>> ae41a18d1cbf10515b49674a2a496843bc5cc4a1
import { useNavigate } from "react-router-dom";
// import game1 from '../assets/game1.jpg'
const Shop = () => {
  const navigate = useNavigate();
  const data = [
    {
      boxTitle: "Get your game on",
      subText: "Shop Gaming",
      img_path: "/assets/Image1.jpg",
      route_path: "/product-view",
      productInfo: [
        {
          title: "Graphic Card",
          image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/top-MMT-154303-Save50_GPU_Component_DER-86832.jpg;maxHeight=455;maxWidth=815",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$100",
          discount: "$80",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Controller",
          image: "https://m.media-amazon.com/images/I/61gZGeavWGL._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$50",
          discount: "$40",
          desc: "This is gaming controller",
        },
        {
          title: "Gaming Monitor",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsF8OItjPa8Si8qA1k0aU3-uEF-6Nx6LwPQ&s",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$150",
          discount: "$120",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Gaming Headset",
          image: "https://www.sony.co.in/image/ae6f02a9e1a5abdb2f723eca247209c4?fmt=png-alpha&wid=1578&hei=1050&bgcolor=F6F9FF",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$60",
          discount: "$55",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
      ],
    },
    {
      boxTitle: "Home Essentials",
      subText: "See more",
      img_path: "/assets/Image2.jpg",
      route_path: "/product-view",
      productInfo: [
        {
          title: "Key Holder",
          image: "https://m.media-amazon.com/images/I/61sHXVsbXAL._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$15",
          discount: "$13",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Bread Toaster",
          image: "https://m.media-amazon.com/images/I/71E8oF06f+L._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$35",
          discount: "$28",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Towel Holder",
          image: "https://m.media-amazon.com/images/I/71SdoAGoQFL._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$10",
          discount: "$8",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Alkaline Batteries",
          image: "https://m.media-amazon.com/images/I/71E-3tmsR6L._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$30",
          discount: "$20",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        }
      ],
    },
    {
      boxTitle: "Electronics",
      subText: "See more",
      img_path: "/assets/Image3.jpg",
      route_path: "/product-view",
      productInfo: [
        {
          title: "Canon Camera",
          image: "https://m.media-amazon.com/images/I/714hINuPoBL._AC_UY327_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$1000",
          discount: "$750",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "3 in 1 Charging Cable",
          image: "https://m.media-amazon.com/images/I/71fVVIVWXKL._AC_SX644_CB1169409_QL70_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$10",
          discount: "$8",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Lenovo Idea Tab",
          image: "https://m.media-amazon.com/images/I/714VRmqcVmL._AC_UY327_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$220",
          discount: "$170",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Samsung Tab",
          image: "https://m.media-amazon.com/images/I/61d46oYQgdL._AC_UY327_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$200",
          discount: "$160",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
      ],
    },
    {
      boxTitle: "Mobiles",
      subText: "See more",
      img_path: "/assets/Image4.jpg",
      route_path: "/product-view",
      productInfo: [
        {
          title: "Samsung S26 Ultra",
          image: "https://m.media-amazon.com/images/I/61UnzIc+97L._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$1200",
          discount: "$999",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Oneplus 15",
          image: "https://m.media-amazon.com/images/I/61MZPmFWEYL._AC_UL480_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$900",
          discount: "$800",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Apple IPhone 17 pro max",
          image: "https://m.media-amazon.com/images/I/61TiU+-lnBL._AC_UY327_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$2000",
          discount: "$1599",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        },
        {
          title: "Google pixel 10",
          image: "https://m.media-amazon.com/images/I/61SR9daEx9L._AC_UY327_FMwebp_QL65_.jpg",
          thumbNail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          price: "$700",
          discount: "$530",
          desc: "This is Graphic Series Game where you will get more energy and intersting.",
        }
      ],
    }
    // {
    //   boxTitle: "Furniture",
    //   subText: "See more",
    //   img_path: "/assets/Image5.jpg",
    //   route_path: "/product-view",
    // },
    // {
    //   boxTitle: "Personal Care",
    //   subText: "See more",
    //   img_path: "/assets/Image6.jpg",
    //   route_path: "/product-view",
    // },
    // {
    //   boxTitle: "Beauty Picks",
    //   subText: "See more",
    //   img_path: "/assets/Image7.jpg",
    //   route_path: "/product-view",
    // },
    // {
    //   boxTitle: "Pet Care",
    //   subText: "See more",
    //   img_path: "/assets/Image8.jpg",
    //   route_path: "/product-view",
    // },
  ];
  return (
    <>
      <div>
        <div class="hero-section">
          <div class="hero-msg">
            <p>
              You are on amazon.com. You can also shop on Amazon India for
              millions of products with fast local delivery.
              <a
                href="https://amazon.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to go to amazon.in
              </a>
            </p>
          </div>
        </div>

        <div class="shop-section">
          {data.map((item, index) => {
            return (
              <div
                class="box pointer"
                key={index}
                onClick={() =>
                  navigate("/product-view", {
                    state: { productInfo: item.productInfo },
                  })
                }
              >
                <div class="box-content">
                  <h2>{item.boxTitle} </h2>
                  <div class="box-img">
                    <img src={item.img_path} alt="Images" />
                  </div>
                  <p>{item.subText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
