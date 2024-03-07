'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
// import {login} from '../../lib/features/user/userSlice'
import { loginSuccess, loginFailure } from '@/lib/features/user/userSlice';

export default function LoginPage() {
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();
    const loginError = useSelector((state) => state.user.loginError);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({...loginDetails, [name]: value});
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        if (registeredUser && registeredUser.username === loginDetails.username && registeredUser.password === loginDetails.password) {
            dispatch(loginSuccess({ username: registeredUser.username }));
            setFeedbackMessage('Connexion réussie. Redirection...')
            setTimeout(() => {
                router.push('/'); // Redirige vers la page d'accueil
            }, 1000);
        } else {
            dispatch(loginFailure({ error: 'Login failed: User not found or password does not match.' }));
        }
    };

    return (
        <div className="bg-[#FFEDDB] flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Utilisateur</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Utilisateur"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mot de passe</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-[#EDCDBB] hover:bg-[#BF9270] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Log in
                    </button>
                </div>
                {loginError && <div className="text-red-500">{loginError}</div>}
                {loginSuccess && <div className="text-green-500">{feedbackMessage}</div>}
            </form>
        </div>
    );
}

