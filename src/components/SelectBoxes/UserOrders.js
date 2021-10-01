import React from 'react';

const UserOrders = ({handleChange}) => {
    return (
        <select
        onChange={handleChange}
        className="block shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="" className="hidden">User Orders</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    );
};

export default UserOrders;