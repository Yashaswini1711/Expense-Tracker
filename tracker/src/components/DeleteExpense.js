import React from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const DeleteExpense = ({ transactionId, userEmail, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8086/api/user/expenses/delete/${transactionId}`, {
        params: { email: userEmail }
      });
      onDelete(transactionId); // Notify parent component that expense has been deleted
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <button onClick={handleDelete}>
        <FaTrash />
    </button>
  );
};

export default DeleteExpense;
