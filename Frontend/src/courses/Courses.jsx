import React from "react";
import NavBar from "../Components/NavBar";
import Course from "../Components/Course";
import Footer from "../Components/Footer";

function Courses() {
  return (
    <>
    <NavBar />
    <div className="min-h-screen">
      <Course />
    </div>
    <Footer />
    </>
  );
}

export default Courses;