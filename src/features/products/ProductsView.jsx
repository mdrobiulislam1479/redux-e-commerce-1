import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

const ProductsView = () => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && products && products.length > 0 && (
        <section className="products">
          {products.map((products) => {
            return (
              <article key={products.id} className="product">
                <h2>{products.title}</h2>
                <p>{products.description}</p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProductsView;
