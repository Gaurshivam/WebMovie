import React from 'react';

const Movie = ({movies}) => {
  const imgPath = "https://image.tmdb.org/t/p/w1280"
  const movieCard = movies.map((mv,i)=>{
    const textColor = (mv.vote_average < 6 ) ? "red" : (mv.vote_average >=6 && mv.vote_average < 8 ) ? "orange" : "green";  
    return(
      <div key={i} className="card my-3" style={{ width: "18rem" }}>
        <img src={imgPath + mv.poster_path} 
        className="card-img-top" alt="movieimg" />
        <div className="card-body d-flex justify-content-between">
          <h6 className="card-title w-50">{mv.title}</h6>
          <p className="card-text" style={{color:textColor}}>☆★ {mv.vote_average}</p>
        </div>
        <button className='btn btn-success my-2 mx-2'>Watch</button>
      </div>
    )
  })
  
  return (
    <>
      <div className='d-flex justify-content-evenly flex-wrap'>
      {movieCard}
    </div>
    </>
  );
}
export default Movie;
