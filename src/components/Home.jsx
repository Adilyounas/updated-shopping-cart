import React, { useEffect,useState } from "react";
// import img from "../assets/logo.jpg";
import HomeCart from "./HomeCart";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast"

const productList = [
  {
    name: "Mac Book",
    price: 1200,
    imgSrc:
      "https://hnsfpau.imgix.net/5/images/detailed/164/NX_314h-7f.ABNSA.003.03R.jpg?fit=fill&bg=0FFF&w=1500&h=844&auto=format,compress",
    id: 1,
  },
  {
    name: "Hp",
    price: 900,
    imgSrc:
      "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/i/microsoft_12.4_surface_laptop_go1_-_tejar.jpg",
    id: 2,
  },
  {
    name: "Repel",
    price: 900,
    imgSrc:
      "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?w=2000",
    id: 3,
  },
  {
    name: "Hp",
    price: 900,
    imgSrc:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6pro-5g-oversea/listpage/Phone-List-Page-product-list-Black-427-x-600.png.thumb.webp",
    id: 4,
  },
  {
    name: "Excilent",
    price: 900,
    imgSrc:
      "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
    id: 5,
  },
  {
    name: "Showmi",
    price: 300,
    imgSrc:
      "https://images.priceoye.pk/samsung-galaxy-a33-pakistan-priceoye-ylulk-270x270.webp",
    id: 6,
  },
  {
    name: "Oppo",
    price: 500,
    imgSrc:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/navigation/v2/Navigation-SunsetOrange-427_600-pc.png.thumb.webp",
    id: 7,
  },
];

const Home = () => {
  const [save, setSave] = useState(false)
  const {cart} = useSelector((state)=> state)
  
  useEffect(()=>{
    if (!save) {
      localStorage.setItem("dataArray",JSON.stringify(cart)  )
    }
    setSave(true)

  },[save,cart])
  const dispatch = useDispatch();

  const addToCart = (object) => {
    dispatch({
      type:"addToCarts",
      payload: object,
    });

    dispatch({
      type:"calculates",
    })

    setSave(false)

    toast.success('Add To Cart',{
      iconTheme: {
        primary: 'red',
        secondary: 'white',
      },
    })
  };

  return (
    <div className="home">
      {productList.map((i) => {
        return (
          <HomeCart
            img={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            key={i.id}
            handler={addToCart}
          />
        );
      })}
    </div>
  );
};

export default Home;
