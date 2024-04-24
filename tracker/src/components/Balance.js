// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Balance() {
//   const [balance, setBalance] = useState('');
//   const userEmail = localStorage.getItem('userEmail');

//   useEffect(() => {
//     if (userEmail) {
//       fetchBalance();
//     }
//   }, [userEmail]);

//   useEffect(() => {
//     console.log('Balance:', balance);
//   }, [balance]);
  

//   const fetchBalance = async () => {
//     try {
//       const response = await axios.get('http://localhost:8086/api/user/getBalance', {
//         params: {
//           email: userEmail
//         }
//       });
//       console.log('Balance response:', response.data);
//     //   setBalance(response.data);
//     } catch (error) {
//       console.error('Error fetching balance:', error);
//     }
//   };

//   return (
//     <div>
//       Total amount available: {balance}
//     </div>
//   );
// }

// export default Balance;
