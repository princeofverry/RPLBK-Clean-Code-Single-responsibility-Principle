import React from 'react';

const UserList = ({ users, onDeleteUser }) => {
    return (
        <ul className="space-y-2">
            {users.map((user, index) => (
                <li
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                    <span>{user}</span>
                    <button
                        onClick={() => onDeleteUser(index)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
