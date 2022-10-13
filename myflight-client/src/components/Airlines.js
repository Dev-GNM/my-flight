import { useState, useEffect } from "react";

function Airlines() {


    const [airlines, setAirlines] = useState ([]);
 
    useEffect(() => {
    fetch("/airlines")
      .then((r) => r.json())
      .then((airlines) => console.log(airlines));
  }, []);

  return (
    <div className="airline-container">


    </div>
  )
}

export default Airlines;