import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);
  const [month,setMonths]=useState(0);
  const [day,setDays]=useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();

    let day=today.getDate()-birthdateDate.getDate();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getMonth())
    ) {
      age--;
    }
    let month=monthDiff;
    if(day<0)
      {
        day=30+day;
        month--;
      }
    
    

    setAge(age);
    setMonths(month);
    setDays(day);
  };

  const resetCalculator = () => {
    setBirthdate("");
    setAge(0);
    setMonths(0);
    setDays(0);
  };

  return (
    <div className="Container">
      <h2 className="heading container_title">Age Calculator</h2>
      <p className=" para container_title">
        The Age Calculator can determine the age or interval
      </p>
      <div className="Container_middle">
        <div className="right">
          <h4>Date of Birth</h4>
          <input
            className="date"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div className="button_div">
            <button className="button-65" onClick={calculateAge}>
              Calculate Age
            </button>
            <button className="button-65" onClick={resetCalculator}>
              Reset
            </button>
          </div>
        </div>
        <div className="left">
          <div className="Container_middle_para">
            <h1>Your age is</h1>
          </div >
          <h1 className="age_heading">{age > 0 ? age : 0} Years</h1>
          <h1 className="age_heading">{month > 0 ? month : 0} Months</h1>
          <h1 className="age_heading">{day} Days</h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
