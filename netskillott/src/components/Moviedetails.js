import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Similarmovies from './Similarmovies';
import ReactPlayer from 'react-player';


const Moviedetails = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6c2085daccec2eb8012b84387460472&append_to_response=videos`);
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [id]);



  if (!movie) {
    return <p>Loading...</p>;
  }


  // const playVideo = () => {
  //   if (movie.videos && movie.videos.results && movie.videos.results.length > 0) {
  //     setIsPlaying(true);
  //   }
  // };

  return (
    <>
      <div style={{ color: "#FFFFFF", paddingBottom: "48px" }}>
        <div style={{ position: "relative" }}>
          <img style={{margin:"4vw",width: "92vw",height:"50vw", borderRadius:"1vw"}} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          <div
            style={{
              marginLeft:"4vw",
              marginRight:"4vw",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "1vw",
              width: "92vw",
              height:"50vw",
              background: "linear-gradient(2.7deg, #1A1A1D -0.65%, rgba(26, 26, 29, 0) 42.05%)",
              zIndex: 1
            }}
          />
          <div style={{ padding: "0 8vw", position: "absolute", bottom: "-4.5vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
            
            
          <div style={{ position: "absolute", bottom: "-2vw", left: 0, width: "80vw", zIndex:1 , display:"flex", justifyContent:"space-between", alignItems:"center", marginLeft:"8vw"}}>
  <h2 style={{ fontFamily: "Oswald", fontWeight: "500", fontSize: "6vw", maxWidth:"80%"}}>{movie.title}</h2>
  <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between", width:"24vw"}}>
    <div style={{  width: "5vw", height: "6.5vw"}}>
      <Link style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <img src='/Images/addvector.svg' alt='add' style={{ height: "4.5vw", width: "4.5vw", color: "#FFFFFF" }} />
        <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>WATCHLIST</p>
      </Link>
    </div>
    <div style={{ width: "5vw", height: "6.5vw"}}>
      <Link style={{ backgroundColor: "transparent",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <img src='/Images/sharevector.svg' alt='share' style={{height: "4.5vw", width: "4.5vw", color: "#FFFFFF" }} />
        <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>SHARE</p>
      </Link>
    </div>
    
      <button style={{ backgroundColor: "#DA3714", width: "9vw", height: "9vw", borderRadius: "100px",display:"flex",justifyContent:"space-evenly", alignItems:"center", opacity:"1" }} onClick={() => setIsPlaying(true)}>
        <img src='/Images/playvector.svg' alt='play' style={{ height: "4.5vw", width: "4.5vw" , paddingLeft:"0.5vw"}} />
      </button>


 

  </div>
</div>

          </div>
        </div>
        </div>

        

        <div style={{ marginTop: "8vw", marginLeft: "4vw", paddingBottom: "3vw" }}>
          <div style={{ display: "flex", width: "30vw", fontFamily: "Poppins", fontWeight: "400", fontSize: "2vw", color: "#727171", paddingBottom: "2vw", marginRight:"0.2vw", justifyContent:"space-between", alignItems:"center" }}>
            <img style={{ width: "4.5vw" }} src='/Images/imdb.svg' alt='imdb' />
            <div style={{marginLeft:"0",display:"flex", justifyContent:"space-between", width:"25.3vw", alignItems:"center"}}>
              <p>{movie.vote_average}</p>
              <p>{movie.runtime} min</p>
              <p>{movie.release_date.substring(0, 4)}</p>
            </div>
          </div>




          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1vw" }}>
              {movie.genres.map((genre) => (
                <p
                  key={genre.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5vw",
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    color: "#DA3714",
                    border: "1px solid #DA3714",
                    borderRadius: "2.2vw",
                    padding: "1vw 2vw",
                    marginRight: "0.5vw",
                    marginBottom: "1vw",
                  }}
                >
                  {genre.name}
                </p>
              ))}
            </div>
 
         
        </div>

        <p style={{ width: "92vw", fontFamily: "Overpass", fontWeight: "400", fontSize: "2vw", marginLeft: "4vw" }}>{movie.overview}</p>
      </div>


      {isPlaying && (
  <div style={{padding:"0 4vw"}}>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
      controls={true}
      width="100%"
      height="40vw"
    />
  </div>
)}

<div style={{paddingTop:"2vw"}}>
  
  <Similarmovies setIsPlaying={setIsPlaying} />
</div>
    </>
  );
};

export default Moviedetails;