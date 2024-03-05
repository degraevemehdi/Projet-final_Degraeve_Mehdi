'use client'
// src/app/login/page.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../lib/features/user/userSlice'

export default function LoginPage() {
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginDetails));
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Form Inputs and Labels */}
            </form>
        </div>
    );
}

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Login(){
//     const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
//     const router = useRouter();
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginDetails({ ...loginDetails, [name]: value });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
//         if (registeredUser && registeredUser.username === loginDetails.username && registeredUser.password === loginDetails.password) {
//             alert('Login successful!');
//             router.push('/'); 
//         } else {
//             alert('Login failed: User not found or password does not match.');
//         }
//     };
//     return(
//         <div className="bg-[#FFEDDB] flex justify-center items-center h-screen">
//             <div className="w-full max-w-xs">
//                 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Utilisateur</label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="username"
//                             type="text"
//                             name="username"
//                             placeholder="Utilisateur"
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mot de passe</label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                             id="password"
//                             type="password"
//                             name="password"
//                             placeholder="******************"
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button className="bg-[#EDCDBB] hover:bg-[#BF9270] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//                             Log in
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }