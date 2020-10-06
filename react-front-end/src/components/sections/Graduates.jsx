import React, { useState, useEffect } from "react";
import "./index.css";
import Separator from "../Separator";
import Gr from "../../MockData/Graduates.json";
// import frontend from "../../images/role-frontend.gif";
//this component displays registered graduates from code your future
const Graduates = () => {
  const [graduates, setGraduates] = useState(Gr);
  useEffect(() => {
    async function fetchGrads() {
      try {
        const res = await fetch(
          "https://sf-hackathon-2020.herokuapp.com/api/users"
        );
        const json = await res.json();
        setGraduates(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchGrads();
  }, []);
  return (
    <section className="companiesSection">
      <Separator category="Graduates" />
      <div className="under">
        <div>UNDER CONSTRUCTION</div>
      </div>
    </section>
  );
};

export default Graduates;
