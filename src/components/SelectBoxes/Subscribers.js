import React from 'react';

const Subscribers = ({handleChange}) => {
    return (
        <select
          onChange={handleChange}
          className="block shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="" className="hidden">Select one</option>
          <option value="USER_SUBSCRIBES">USER SUBSCRIBERS</option>
          <option value="USER_ORDERS">USER ORDERS</option>
        </select>
    );
};

export default Subscribers;