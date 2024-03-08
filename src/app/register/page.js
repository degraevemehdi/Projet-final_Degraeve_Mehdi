'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { register } from '../../lib/features/user/userSlice';
import styles from '../../../style/Register.module.css'
import Link from 'next/link';

export default function RegisterPage() {

    const [userDetails, setUserDetails] = useState({ username: '', password: '' });
    const [message, setMessage]= useState()
    const dispatch = useDispatch();
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(userDetails));
        setMessage(`Thank you for registering, ${userDetails.username}! Please check out you email for confirmation.`)
        // router.push('/login')
        setTimeout(() => {
            router.push('/login');
        }, 2000);
        
    };

    return (
        <div className="bg-[#FFE5E5] flex justify-center items-center h-screen">
    <form onSubmit={handleSubmit} className="bg-[#FFBFBF] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px] h-[400px]">
        <div className="mb-4">
            <label className="block text-[#0C356A] text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                required 
                onChange={handleChange} 
                placeholder="Username" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
        </div>
        <div className="mb-6">
            <label className="block text-[#0C356A] text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                onChange={handleChange} 
                placeholder="Password" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            />
        </div>
        <div className="flex items-center justify-between">
            <button 
                type="submit" 
                className="bg-[#0C356A] hover:bg-[#104d9d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Register
            </button>
        </div>
        <div className='flex justify-center gap-1 mt-4'>
            <h1>Already have an account?</h1>
            <Link href="/login">
                <span className="text-blue-500 hover:underline cursor-pointer">Sign In</span>
            </Link>
        </div>
        {message && <div className={styles.message}>{message}</div>}
    </form>
</div>
    );
}


// import { useState } from 'react';
// import styles from '../../../style/register.module.css';
// import Link from 'next/link';



// export default function Register() {
//     const [user, setUser] = useState({
//         username: '',
//         password: '',
//     });
//     const [message, setMessage]= useState()
//     const router = useRouter();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (user.username && user.password) {
//             // Simulate user registration by storing user in localStorage
//             localStorage.setItem('registeredUser', JSON.stringify(user));
//             setMessage(`Thank you for registering, ${user.username}! Please check your email for confirmation.`)
//             // router.push('/login');
//         }else{
//             console.log('Login failed: User not found or password does not match.')
//         }
//     };

//     return (
//         <div className={styles.formContainer}>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//             <div className={styles.inputGroup}>
//                         <label htmlFor="username">Username</label>
//                         <input type="text" id="username" name="username" required onChange={handleChange} className={styles.inputField} />
//                     </div>
//                     <div className={styles.inputGroup}>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" id="password" name="password" required onChange={handleChange} className={styles.inputField} />
//                     </div>
//                     <div className={styles.register}>
//                         <button type="submit">Register</button>
//                         <div className='flex justify-center gap-1'>

//                             <h1 >Already have an account?</h1>
//                             {/* <Link className='text-blue-500	hover:underline' href={'/login'}> Sign In</Link> */}
//                             <Link href="/login">
//     <span className="text-blue-500 hover:underline cursor-pointer">Sign In</span>
// </Link>

//                         </div>

//                     </div>
//             </form>
//             {message && <div className={styles.message}>{message}</div>}
//         </div>
//     );
// }


