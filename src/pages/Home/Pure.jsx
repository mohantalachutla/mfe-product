import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/base/Container';
import { Product } from '../../components/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStoreWrapper } from 'components/common/StoreWrapper';
import { fetchProductsAction } from '../../actions';
import { Button } from '../../stories/example/Button';
const ProductPage = ({ products = [] } = props) => {
  const productList = useSelector(
    (state) => state?.product?.products || products
  );
  const [loadMore, setLoadMore] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productList.length === 0 || loadMore) {
      dispatch(fetchProductsAction({}));
    }
  }, [dispatch, loadMore, productList.length]);
  return (
    <Container size="md">
      {productList.length === 0 && (
        <div className="alert alert-info" role="alert">
          No products found
        </div>
      )}
      {productList.map((product) => (
        <Product key={product._id} {...product} dispatch={dispatch} />
      ))}
      {productList.length > 0 && (
        <Button
          className="btn btn-primary"
          onClick={() => setLoadMore(true)}
          label={'Load more'}
          type="button"
          primary
          size="large"
        />
      )}
    </Container>
  );
};
export default withStoreWrapper(ProductPage);

ProductPage.propTypes = {
  products: PropTypes.array,
};
