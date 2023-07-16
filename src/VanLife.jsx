
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import "./VanLife.css";
import "./server";
import { useSearchParams } from "react-router-dom";
import { getVans } from "./api";
import { Suspense } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function loader(){

  return defer({vans:getVans()}) 

}


export default function Vans() {

  const vansdefer = useLoaderData()

 
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const typeFilter = searchParams.get("type");


  // console.log(typeFilter);

    
    
  function renderVanElements(vans){
    const FilteredList = typeFilter
      ? vans.filter((val) => val.type === typeFilter)
      : vans;

      const vansElement = FilteredList.map((val) => (
        <div key={val.id} className="van-tile">
          <Link
            to={`${val.id}`}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
          >
            <img src={val.imageUrl} alt="imgvan" className="img2" />
            <div className="van-info">
              <h3>{val.name}</h3>
              <p>
                ${val.price}
                <span>/day</span>
              </p>
            </div>
            <i className={`van-type ${val.type} selected`}>{val.type}</i>
          </Link>
        </div>
      ));
      return(

       <>
       
        <div className="van-list-filter-buttons">
          <button
            onClick={() => handelFilterChange("type", "simple")}
            className={`van-type simple 
              ${typeFilter === "simple" ? "selected" : ""}`}
          >
            simple
          </button>
  
          <button
            onClick={() => handelFilterChange("type", "luxury")}
            className={`van-type luxury 
              ${typeFilter === "luxury" ? "selected" : ""}`}
          >
            luxury
          </button>
  
          <button
            onClick={() => handelFilterChange("type", "rugged")}
            className={`van-type rugged
              ${typeFilter === "rugged" ? "selected" : ""}`}
          >
            rugged
          </button>
  
          {typeFilter ? (
            <button
              onClick={() => handelFilterChange("type", null)}
              className="van-type clear-filters"
            >
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="vanlist">{vansElement}</div>
      </>

      )
  }

  


  // eslint-disable-next-line no-unused-vars




  function handelFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <Suspense fallback={<h2>Loading...</h2>}>

       <h1>Explore our van options</h1>
       <Await resolve={vansdefer.vans}>
      {renderVanElements}
       </Await>
      </Suspense>
      </div>
  );
}
