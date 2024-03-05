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
        setMessage(`Thank you for registering, ${userDetails.username}! Please Sign In for confirmation.`)
        // router.push('/login')
        
    };

    return (
        <div className={styles.formContainer}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                         <input type="text" id="username" name="username" required onChange={handleChange} className={styles.inputField} />
                     </div>
                     <div className={styles.inputGroup}>
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" name="password" required onChange={handleChange} className={styles.inputField} />
                     </div>
                     <div className={styles.register}>
                         <button type="submit">Register</button>
                         <div className='flex justify-center gap-1'>

                            <h1 >Already have an account?</h1>
                          
                            <Link href="/login">
     <span className="text-blue-500 hover:underline cursor-pointer">Sign In</span>
 </Link>

                        </div>

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
library-project/src
library-project/src/app
library-project/src/app/favorites
library-project/src/app/login
library-project/src/app/login/page.js
library-project/src/app/register
library-project/src/app/register/page.js
library-project/src/app/store
library-project/src/app/store/StoreProvider.js
library-project/src/app/favicon.ico
library-project/src/app/globals.css
library-project/src/app/layout.js
library-project/src/app/page.js
library-project/src/components
library-project/src/components/ui
library-project/src/components/ui/sheet.jsx
library-project/src/components/NavBar.js
library-project/src/lib
library-project/src/lib/utils.js
library-project/src/lib/store.js
library-project/src/lib/features

