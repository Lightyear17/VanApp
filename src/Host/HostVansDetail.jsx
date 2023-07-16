import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./HostVansDetail.css";
import { requireAuth } from '../util'
import { getVan } from "../api";

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "black",
};
export async function loader({params,request}){
  await requireAuth(request)

  return   getVan(params.id)

}

export default function HostVansDetail() {

  const currentVan = useLoaderData()

  function renderVanElements(){

  }

  
  return (
    <section className="host-van-detail-section">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-container">
        <div className="host-van-detail-info">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h2>{currentVan.name}</h2>
            <p>
              ${currentVan.price}
              <span>/day</span>
            </p>
          </div>
        </div>
      <nav className="navbar">
        <NavLink
          to="."
          end
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Detail
        </NavLink>

        <NavLink
          to="pricing"
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pricing
        </NavLink>

        <NavLink
          to="photos"
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{currentVan}} />
      </div>
    </section>
  );
}
