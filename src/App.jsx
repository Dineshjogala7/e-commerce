import './App.css';
import Register from './authorization/Register';
import Login from './authorization/Login';
import { Routes, Route } from 'react-router-dom'; 
import 'react-toastify/dist/ReactToastify.css';
import ProductData from './items/ProductData';
import Home from './features/Home';
import Products from './features/Products';
import { Update } from './Update';
import Header from './features/Header';
import Footer from './features/Footer';
import { AuthContext } from './authorization/AuthContext';
import Profile from './author/Profile'; // ✅ Ensure this path is correct
import ErrorBoundary from './ErrorBoundary';
import Cart from './items/Cart';
import ProtectedRoute from './authorization/ProtectedRoute'
function App() {
  console.log("added app jsx");

  return (
    
    <AuthContext>
      <div className="min-h-screen bg-gray-300 w-full flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProtectedRoute><ProductData /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/cart' element={<ProtectedRoute> <Cart/></ProtectedRoute>}/>
            
            <Route path="*" element={<Update />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext>
   
  );
}

export default App;
