// import React from "react"
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";

import { getVan } from "./api";
import "./VanDetail.css";


export function loader({params}){

    return getVan(params.id)


}
export default function VanDetail() {
  const vans = useLoaderData()
  const location = useLocation();

 


  const search = location.state?.search || ""
  const filter = location.state?.type || 'all'

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="vandetail-back-button">
        &larr; <span>Back to {filter} vans</span>
      </Link>
        <div className="van-detail">
          <img src={vans.imageUrl} alt="van" />
          <br />
          <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
          <h2>{vans.name}</h2>
          <p>
            <span>${vans.price}</span>/day
          </p>
          <p>{vans.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
    </div>
  );
}
