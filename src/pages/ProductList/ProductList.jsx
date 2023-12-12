import { useContext } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import ProductItem from "../../components/ProductItem/ProductItem";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import { NewThemeContext } from "../../context/context";

import "./ProductList.scss";

function ProductList() {
  const products = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const { isTheme } = useContext(NewThemeContext);

  return (
    <>
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
          <tr style={{backgroundColor: "grey", color: "white"}}>
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
