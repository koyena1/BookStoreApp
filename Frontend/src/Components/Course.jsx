import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import {Link} from "react-router-dom";
import axios from "axios";
function Course() {
  const [book,setBook]=useState([])
  useEffect(() => {
    const getBook=async()=>{
      try{
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setBook(res.data)
      }catch (error) {
          console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you <span className="text-pink-700">Here!</span>:
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Natus, nulla autem incidunt fugiat deserunt excepturi 
            facilis reiciendis,in fugit deleniti quaerat repellendus, 
            praesentium et illum consequatur similique.
            Ipsum molestiae cupiditate voluptatem error magni reiciendis 
            officia dolore, quisquam maxime? Alias, quae!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-500">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;