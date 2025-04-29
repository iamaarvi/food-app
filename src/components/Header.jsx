import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const list = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "About Us", path: "/about" },
        { id: 3, title: "Contact Us", path: "/contact" },
        { id: 4, title: "Cart", path: "/cart" }
    ]

    const [btnName, setBtnName] = useState("Login");

    return (

        <nav className="bg-gray-100 py-4 shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between">

                <Link to="#" className="text-xl font-bold text-gray-800">Food App</Link>


                <ul className='flex space-x-4 justify-between p-2 m-5 text-2xl'>
                    {
                        list.map((items, index) => (
                            <li key={index}> <Link to={items.path}>{items.title}</Link></li>
                        ))
                    }
                </ul>
                <button onClick={() => {
                    btnName === "Login" ?
                        setBtnName("Logout") : setBtnName("Login")
                }} className="bg-yellow-500 text-2xl justify-between py-2 px-8 m-3 text-white cursor-pointer rounded-full">
                    {btnName}
                </button>
            </div>
        </nav>

    )
}

export default Header;


