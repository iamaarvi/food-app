import { Link } from "react-router-dom";
import Card from "./Card";

import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";


const Body = () => {
    const [resList, setResList] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.300919667460015&lng=70.8318262743919&str=Pizza&trackingId=undefined&submitAction=ENTER&queryUniqueId=46423d8a-06c5-5650-cec7-216dc01a8ce0&selectedPLTab=RESTAURANT");

        const json = await data.json();
        const resdata = json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
        setResList(resdata);
        setOriginalList(resdata);
    }
    const handleSearch = () => {
        const filteredListData = originalList.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setResList(filteredListData);

    }
    const handleTopRated = () => {
        const filtredList = originalList.filter((resItems) => (
            resItems.card.card.info.avgRating > 4.5
        ))
        setResList(filtredList);
    }

    return resList.length === 0 ? <Shimmer /> : (
        <div className="min-h-screen ">
            <div className="search-container">
                <div className="flex flex-wrap m-5">
                    <div className="w-full max-w-sm min-w-[200px]  py-4">
                        <div className="relative">
                            <input
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                value={searchText} onChange={(e) => { setSearchText(e.target.value) }}
                            />
                            <button
                                className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className='top-resList'>
                        <button className="bg-blue-500 m-4 p-7 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleTopRated}
                        >
                            Top Reated Resturent
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        resList.map((resItems, index) => (
                            <Card key={index} resdata={resItems.card.card.info} />
                        ))
                    }
                </div>
            </div>
        </div >

    )

}

export default Body;







