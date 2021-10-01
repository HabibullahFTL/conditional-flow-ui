import React from 'react';

const TagUser = ({handleChange}) => {
    return (
        <select
        onChange={handleChange}
        className="block shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-green-500">
        <option value="" className="hidden">Tag User</option>
        <option value="send_message">Send Message</option>
      </select>
    );
};

export default TagUser;