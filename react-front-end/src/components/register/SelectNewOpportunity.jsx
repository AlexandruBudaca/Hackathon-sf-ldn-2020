import React, { useEffect } from "react";
import "./index.css";
const SelectNewOpportunity = ({ handleChange, label, data }) => {
  //   useEffect(() => {
  //     fetch("https://sf-hackaton2020.herokuapp.com/api/users")
  //       .then((req) => req.json())
  //       .then((data) => console.log(data));
  //   });
  return (
    <div className="selects">
      <label>
        <p> {label}</p>
        <select
          className="select"
          name="title"
          onChange={handleChange}
          required
        >
          <option defaultValue="">Select your option</option>
          {data.map((role) => (
            <option value={role.role} key={role.id}>
              {role.role}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectNewOpportunity;
