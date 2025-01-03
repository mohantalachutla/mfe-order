import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/base/Container';
import Row from '../../components/base/Row';
import Col from '../../components/base/Col';
import { Order } from '../../components/Order';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStoreWrapper } from 'components/common/StoreWrapper';
import { fetchOrdersAction } from '../../actions';
const OrderPage = ({ orders = [] } = props) => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state?.order?.orders || orders);
  useEffect(() => {
    if (orderList.length === 0) {
      dispatch(fetchOrdersAction({}));
    }
  }, [dispatch, orderList.length]);
  return (
    <Container size="md">
      {orderList.length === 0 && (
        <div className="alert alert-info" role="alert">
          You have not ordered anything yet!
        </div>
      )}
      {orderList.map((order) => (
        <Order key={order._id} {...order} dispatch={dispatch} />
      ))}
    </Container>
  );
};
export default withStoreWrapper(OrderPage);

OrderPage.propTypes = {
  products: PropTypes.array,
};
