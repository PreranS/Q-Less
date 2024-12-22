import React from 'react';
import QRCode from 'qrcode.react';

const OrderPage = ({ order }) => {
  return (
    <div>
      <h1>Your Order</h1>
      <p>Total: ${order.total}</p>
      <QRCode value={JSON.stringify(order)} />
    </div>
  );
};

export default OrderPage;