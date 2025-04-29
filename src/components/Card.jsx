import React from "react";
import { CDN_URL } from "../utils/Constant";
const Card = (props) => {

    const { resdata } = props;

    const { name, cuisines, costForTwo, avgRating } = resdata;

    const { deliveryTime } = resdata.sla;


    return (
        <div className="relative flex flex-col my-6 p-4 mx-5 bg-white shadow-sm border border-slate-200 rounded-lg w-96 cursor-pointer">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src={CDN_URL + resdata.cloudinaryImageId} alt="card-image" />
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-2xl font-semibold">
                    {name}
                </h6>
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {cuisines.join(" ")}
                </h6>
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {costForTwo / 100}
                </h6>
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {deliveryTime} minutes
                </h6>
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {avgRating} Star
                </h6>
            </div>
        </div>
    )
}

export default Card;