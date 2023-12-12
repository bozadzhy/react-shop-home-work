import { useContext } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProductItem from "../../components/ProductItem/ProductItem";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import { NewThemeContext } from "../../context/context";

import "./ProductList.scss";
// const imgArr = [
//   {
//     img: "https://images.pexels.com/photos/19328647/pexels-photo-19328647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     img: "https://images.pexels.com/photos/19328647/pexels-photo-19328647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     img: "https://images.pexels.com/photos/19328647/pexels-photo-19328647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     img: "https://images.pexels.com/photos/19328647/pexels-photo-19328647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     img: "https://images.pexels.com/photos/19328647/pexels-photo-19328647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];
function ProductList() {
  const products = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const { isTheme } = useContext(NewThemeContext);

  return (
    <>
      {/* <div
        style={{
         width:"200px",
          border: "1px solid black",
          padding: "20px",
          margin: "100px auto",
        }}
      >
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Thumbs, Pagination, Scrollbar, A11y]}
        >
          {imgArr.map((obj, i) => (
            <SwiperSlide key={i}>
              <div>
                <img style={{ width: "200px" }} src={obj.img} alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {!isTheme ? (
        <div className="container-list">
          {products.map((obj) => (
            <div className="wrapper" key={obj.id}>
              <ProductItem
                isFavorite={favorites.some(({ id }) => obj.id === id)}
                isCart={cart.some(({ id }) => obj.id === id)}
                name={obj.name}
                price={obj.price}
                imgUrl={obj.imgUrl}
                id={obj.id}
                color={obj.color}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <table>
            <tbody>
              <tr style={{ backgroundColor: "grey", color: "white" }}>
                <td>PHOTO</td>
                <td>PRODUCT NAME</td>
                <td>PRICE</td>
                <td>COLOR</td>
                <td>CART</td>
                <td>FAVORITES</td>
              </tr>
              {products.map((obj) => (
                <ProductsTable
                  key={obj.id}
                  isFavorite={favorites.some(({ id }) => obj.id === id)}
                  isCart={cart.some(({ id }) => obj.id === id)}
                  name={obj.name}
                  price={obj.price}
                  imgUrl={obj.imgUrl}
                  id={obj.id}
                  color={obj.color}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
