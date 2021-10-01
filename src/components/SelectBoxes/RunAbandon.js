import React from 'react';

const RunAbandon = ({handleChange}) => {
    return (
        <select
        onChange={handleChange}
        className="block shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-green-500">
        <option value="" className="hidden">Run Abandon Checkol</option>
        <option value="yes">Yes, Abandon</option>
      </select>
    );
};

export default RunAbandon;