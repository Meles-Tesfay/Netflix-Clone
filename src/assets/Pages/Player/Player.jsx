import React, { useEffect, useState } from 'react';
import './Player.css';
import backarrow_icon from '../../imges/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
 const {id} = useParams();
 const navigate = useNavigate()
const [apiData, setApiData] = useState({
  name:"",
  key:"",
  published_at:"",
  type:""
});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWExYWIxNmI3NTc1MjdhOGNlNTQyNWE4MDU3NDlmMiIsIm5iZiI6MTc2MDcxMTM2Mi44MDgsInN1YiI6IjY4ZjI1MmMyOGI4NTdlOTVjNWVjNTlkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rSmNm5UrbCNiMFKPfznSPe4PWdKclZ_tp37RjGsaT0k'
  }
};



 useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  }, []);

//   if (!apiData) return <div>Loading...</div>; // show while fetching

  return (
    <div className="player">
      <img src={backarrow_icon} alt="Back" className="back-arrow" onClick={()=>{navigate(-2)}}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="90%"
        height="90%"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
