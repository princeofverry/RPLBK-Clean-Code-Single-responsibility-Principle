import { useState, useEffect } from 'react'
import AddUser from './components/add-user/add-user';
import UserList from './components/user-list/user-list';
import './index.css'

const App = () => {
  const [users, setUsers] = useState([]);

  // Load data dari localStorage saat komponen pertama kali di-mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Fungsi untuk menambahkan pengguna baru
  const handleAddUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Simpan ke localStorage
  };

  // Fungsi untuk menghapus pengguna
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update localStorage
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        User Management
      </h1>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;