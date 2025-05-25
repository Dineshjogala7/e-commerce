import { Navigate, useNavigate } from "react-router-dom";
import virat from "../assets/GreyNicANother.jpg";// correct this path
import { useAuth } from "../authorization/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
 import { User, Mail, Phone, MapPin, Calendar, ShoppingBag, Heart, Settings, Edit3, Award, CreditCard } from "lucide-react";
import { useEffect } from "react";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    const handleLogOut = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    // Fake user data for demonstration
    const profileData = {
        joinDate: "January 2023",
        totalOrders: 24,
        totalSpent: "$2,847.50",
        wishlistItems: 12,
        loyaltyPoints: 1250,
        membershipLevel: "Gold Member",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, New York, NY 10001",
        birthDate: "March 15, 1990"
    };

    const recentOrders = [
        { id: "#ORD-001", date: "Dec 15, 2024", status: "Delivered", amount: "$149.99" },
        { id: "#ORD-002", date: "Dec 10, 2024", status: "Shipped", amount: "$89.50" },
        { id: "#ORD-003", date: "Dec 5, 2024", status: "Processing", amount: "$234.75" }
    ];

    const achievements = [
        { icon: "🏆", title: "Loyal Customer", desc: "Member for over 1 year" },
        { icon: "⭐", title: "Top Reviewer", desc: "50+ product reviews" },
        { icon: "🎯", title: "Deal Hunter", desc: "Used 10+ discount codes" }
    ];
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user]);
    return(
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                                <img 
                                    src={virat} 
                                    alt="User Avatar" 
                                    className="w-full h-full object-cover object-center" 
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {user ? `${user.fstname} ${user.lstname}` : "Guest User"}
                            </h1>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                                <Award className="w-5 h-5 text-yellow-500" />
                                <span className="text-yellow-600 font-semibold">{profileData.membershipLevel}</span>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Joined {profileData.joinDate}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>{profileData.totalOrders} Orders</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CreditCard className="w-4 h-4" />
                                    <span>{profileData.totalSpent} Spent</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                <Edit3 className="w-4 h-4" />
                                Edit Profile
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                                <Settings className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm">Total Orders</p>
                                <p className="text-2xl font-bold">{profileData.totalOrders}</p>
                            </div>
                            <ShoppingBag className="w-8 h-8 text-blue-200" />
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100 text-sm">Total Spent</p>
                                <p className="text-2xl font-bold">{profileData.totalSpent}</p>
                            </div>
                            <CreditCard className="w-8 h-8 text-green-200" />
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-100 text-sm">Wishlist</p>
                                <p className="text-2xl font-bold">{profileData.wishlistItems}</p>
                            </div>
                            <Heart className="w-8 h-8 text-purple-200" />
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-yellow-100 text-sm">Loyalty Points</p>
                                <p className="text-2xl font-bold">{profileData.loyaltyPoints}</p>
                            </div>
                            <Award className="w-8 h-8 text-yellow-200" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Personal Information */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <User className="w-5 h-5" />
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                                        <p className="text-gray-800 font-medium">
                                            {user ? `${user.fstname} ${user.lstname}` : "John Doe"}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Email</label>
                                        <p className="text-gray-800">{user?.email || "john.doe@example.com"}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Phone</label>
                                        <p className="text-gray-800">{profileData.phone}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Birth Date</label>
                                        <p className="text-gray-800">{profileData.birthDate}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Address</label>
                                        <p className="text-gray-800">{profileData.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Orders</h2>
                            <div className="space-y-4">
                                {recentOrders.map((order, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-semibold text-gray-800">{order.id}</p>
                                            <p className="text-sm text-gray-600">{order.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-800">{order.amount}</p>
                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Achievements */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Achievements</h2>
                            <div className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="text-2xl">{achievement.icon}</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                                            <p className="text-sm text-gray-600">{achievement.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                            <div className="space-y-3">
                                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <ShoppingBag className="w-5 h-5 text-gray-600" />
                                    <span>View All Orders</span>
                                </button>
                                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <Heart className="w-5 h-5 text-gray-600" />
                                    <span>My Wishlist</span>
                                </button>
                                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-gray-600" />
                                    <span>Manage Addresses</span>
                                </button>
                                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-gray-600" />
                                    <span>Account Settings</span>
                                </button>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button 
                            onClick={handleLogOut}
                            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium"
                        >
                            LOG OUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;