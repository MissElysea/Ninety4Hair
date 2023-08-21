import React, { useState } from 'react';
import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  const [promoCode, setPromoCode] = useState('');
  const discountPercent = 0.5; // 50% discount

  if (!order) return null;

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  const applyPromoCode = () => {
    if (promoCode === 'MISSELYSEA') {
      // Calculate the discounted total
      const discountedTotal = order.orderTotal * (1 - discountPercent);
      return discountedTotal.toFixed(2);
    }
    return order.orderTotal.toFixed(2);
  };

  return (
    <div className={styles.OrderDetail}>
      <div className={styles.sectionHeading}>
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>CART</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
        {lineItems.length ?
          <>
            {lineItems}
            <section className={styles.total}>
              {order.isPaid ? (
                <>
                  <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                  <span>{order.totalQty}</span>
                  <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                  />
                  <span>{order.totalQty}</span>
                  <span className={styles.right}>${applyPromoCode()}</span>
                  <button
                    className="btn-sm"
                    onClick={handleCheckout}
                    disabled={!lineItems.length}
                  >CHECKOUT</button>
                </>
              )}
            </section>
          </>
          :
          <div className={styles.hungry}>Your Cart Is Empty!</div>
        }
      </div>
    </div>
  );
}
