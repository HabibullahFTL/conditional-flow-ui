import React from 'react';

const WhenOrders = ({handleChange}) => {
    return (
        <select
        onChange={handleChange}
        className="block shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="" className="hidden">When Orders</option>
        <option value="USER_ORDERS">USER ORDERS</option>
        <option value="USER_ABANDONS_CX">USER ABANDONS CX</option>
        <option value="ORDER_COMPLETED">ORDER COMPLETED</option>
      </select>
    );
};

export default WhenOrders;