import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const size = 10;
  const apiUrl = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`;

  useEffect(() => {
    fetchPassengers();
  }, []);

  const fetchPassengers = () => {
    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPassengers((prevPassengers) => [...prevPassengers, ...data.data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleScroll = () => {
    const scrollOffset = 100; 
    const isBottomOfPage =
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - scrollOffset;

    if (isBottomOfPage && !loading) {
      fetchPassengers();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const dataProfile = {
    width: '200px',
    height: '200px',
    border: '2px solid red',
    borderRadius: '5px ',
    margin: 'auto',
    marginTop: '2rem'
    
  
  }

  const displayItem = {
    display: 'grid',
    gridTemplateColumns:'repeat(4, auto)',
    gap: '.7rem',
    border: '2px solid black'
  }

  return (
      <div>
        <Navbar/>
      {passengers.map((passenger) => (
          <div key={passenger._id} >
          <div style={dataProfile}>
            <h3>{passenger.name} - {passenger.airline[0].name}</h3>
            <p>Visit our Website- <a href="">{passenger.airline[0].website}</a></p>

          </div>
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};
export default Home;
