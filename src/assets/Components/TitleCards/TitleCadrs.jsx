import React, { useRef, useEffect, useState } from 'react';
import './TitleCadrs.css';
import cards_data from '../../imges/cards/Cards_data';
import { Link } from 'react-router-dom';


const TitleCadrs = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null); 

  // tmdb movie database 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWExYWIxNmI3NTc1MjdhOGNlNTQyNWE4MDU3NDlmMiIsIm5iZiI6MTc2MDcxMTM2Mi44MDgsInN1YiI6IjY4ZjI1MmMyOGI4NTdlOTVjNWVjNTlkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rSmNm5UrbCNiMFKPfznSPe4PWdKclZ_tp37RjGsaT0k',
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results) setApiData(res.results);
      })
      .catch((err) => console.error(err));

    const ref = cardsRef.current;
    if (ref) ref.addEventListener('wheel', handleWheel);

    //  cleanup to avoid memory leaks
    return () => {
      if (ref) ref.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular On Netflix'}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => (
           <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title || 'Movie'}
            />
            <p>{card.original_title}</p>
          </Link>
         
          
        ))}
      </div>
    </div>
  );
};

export default TitleCadrs;
