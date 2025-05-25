import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { auth } from "../author/firebase"
import ClipLoader from "react-spinners/ClipLoader";

const Register = () => {
    console.log('register added');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [fstname, setFstName] = useState("");
    const [lstname, setLstName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, passwd);
            const user = auth.currentUser;
            
            console.log(user);
            console.log('user Register Successfully !');
            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            console.log(error.message); 
        } finally {
            setLoading(false);
        }
        
        // Reset form fields
        setEmail("");
        setFstName("");
        setLstName("");
        setPasswd("");
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {loading ? (
                // Show loading spinner when loading is true
                <div className="flex flex-col items-center gap-4">
                    <ClipLoader color="black" loading={loading} size={50} />
                    <p className="text-gray-600">Creating your account...</p>
                </div>
            ) : (
                // Show form when not loading
                <form onSubmit={handleRegister} className="flex flex-col max-w-md w-full p-6 gap-2 rounded-lg bg-white shadow-md mx-auto text-black-600">
                    <h3 className="text-center text-black text-lg font-bold">REGISTER</h3>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm">First Name</label>
                        <input 
                            type="text" 
                            placeholder="e.g Alex" 
                            value={fstname}
                            required 
                            onChange={(e) => setFstName(e.target.value)} 
                            className="py-2 px-4 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="e.g Carey" 
                            value={lstname}
                            required 
                            onChange={(e) => setLstName(e.target.value)} 
                            className="py-2 px-4 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm">Email Id</label>
                        <input 
                            type="email" 
                            placeholder="abc@gmail.com" 
                            value={email}
                            required 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="py-2 px-4 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm">Password</label>
                        <input 
                            type="password" 
                            placeholder="at least 6 chars" 
                            value={passwd}
                            required 
                            onChange={(e) => setPasswd(e.target.value)} 
                            className="py-2 px-4 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black rounded-lg"
                        />
                    </div>
                
                    <button 
                        type="submit" 
                        className="py-2 px-6 text-center bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Register
                    </button>
                    
                    <div>
                        <p className="text-black text-sm text-center">
                            Already have an account? 
                            <Link to="/login" className="text-black underline font-bold ml-1">
                                LOGIN
                            </Link>
                        </p>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Register