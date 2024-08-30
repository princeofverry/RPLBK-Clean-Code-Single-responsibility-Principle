import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onAddUser(name);
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter user name"
                className="p-2 border rounded-lg flex-1"
            />
            <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
                Add User
            </button>
        </form>
    );
};

export default AddUser;
