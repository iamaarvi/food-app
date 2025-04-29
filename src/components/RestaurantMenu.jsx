import React, { useEffect, useState } from 'react'
import Header from './Header';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams(); 
    console.log(resId);
    useEffect(() => {
        fetchList();
    }, [])      

    const fetchList = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3038945&lng=70.80215989999999&restaurantId=804260');
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />;
    const { name, avgRating, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const menuCard = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    console.log(menuCard)
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="about-content mt-8 px-5 py-5">
                <h1 className='text-3xl font-bold'>{name}</h1>
                <h3 className='text-3xl'>⭐{avgRating}</h3>
                <p className='text-2xl'>{cuisines.join(",")} - {costForTwoMessage}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 pb-10">
                {
                    menuCard.map((items, index) => {
                        const info = items.card.info;
                        const itemName = info.name;
                        const itemPrice = info.price / 100 || info.defaultPrice / 100;
                        const itemRating = info.ratings.aggregatedRating.rating;
                        const imageId = info.imageId;
                        const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`;
                        return (
                            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="rounded-t-lg" src={imgUrl} alt="" />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{itemName}</h5>
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-black">⭐ {itemRating}</h3>
                                    <p className="mb-3 font-normal  text-gray-800">Rs.{itemPrice}</p>
                                    <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default RestaurantMenu;



    



