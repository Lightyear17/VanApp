import { Suspense, useEffect, useState } from "react";
import { Link, defer, useLoaderData,Await } from "react-router-dom";
import "./HostVans.css";
import { getHostVans } from "../api";
import { requireAuth } from "../util";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  const dataPromise = useLoaderData();
  

  function renderVanElements(vans) {
    const Hostvanlist = vans.map((van) => (
      <Link to={`${van.id}`} key={van.id}>
        <div key={van.id} className="host-van-container">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));

    return (
      <div className="host-vans-title">
        <section>{Hostvanlist}</section>
      </div>
    );
  }

  return (
    <section className="host-van-section">
      <Suspense fallback={<h2>Loading..</h2>}>

      <h1 className="host-vans-title">Your listed vans</h1>
      <Await resolve={dataPromise.vans}>
    

        {renderVanElements}
      
      </Await>
      </Suspense>
    </section>
  );
}
