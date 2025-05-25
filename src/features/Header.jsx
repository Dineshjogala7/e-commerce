import {ShoppingCart,User} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../authorization/AuthContext'
const Header=()=>{
    const {user}=useAuth()
    return(
        <nav className="flex items-center justify-evenly w-full flex-shrink z-20 bg-white text-black py-4 shadow-lg  top-0 sticky">
            <div className="flex w-full justify-evenly">

                    <h2 className="text-black text-lg font-bold ">CRIC.CO</h2>
                <div className="flex">
                        <ul className="flex items-center justify-between gap-6 font-bold">
                            <Link to="/products">Products</Link>
                            <Link to="/">Home</Link>
                            <Link to="/arrivals">New Arrivals</Link>
                        </ul>
                </div>
            </div>
            <div className="flex w-full mx-4 gap-6 justify-start items-center ">
                
                <input type="text"placeholder=" e.g MRF Arrivals" className="py-2 px-4 flex-1 bg-gray-200 rounded-full focus:outline-none text-sm hidden sm:block"/>
                
                <div className="flex  gap-8">
                    <Link to="/cart"><ShoppingCart/></Link>
                    <Link to={user ?"/profile":"/login"}><User/></Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Header