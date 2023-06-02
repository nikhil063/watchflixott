import './index.css';
import Horror from './Horror';
import Scifi from './Scifi';
import Trending from './Trending';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function Home() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/335984?api_key=e6c2085daccec2eb8012b84387460472'
        );
        console.log('Response:', response);
        if (response.ok) {

          const data = await response.json();
          setMovie(data);
          console.log('Data:', data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, []);

  const renderStarRating = () => {

    const rating = Math.round(movie.vote_average / 2);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} color="#ffd700" size="1.5vw"/>);
      } else {
        stars.push(<FaStar key={i} color="#c4c4c4" size="1.5vw" />);
      }
    }

    return stars;
  };

  return (
    <>
      {movie && (
        <div style={{ marginRight: "5vw", marginLeft: "5vw", marginBottom: "4vw" }}>

          <div style={{ backgroundImage: `linear-gradient(91.99deg, #000000 -1.19%, rgba(0, 0, 0, 0) 73.82%), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, width: "89vw", height: "50vw", borderRadius: "1vw", backgroundSize: "cover", marginLeft: "0vw" }}>


            <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "7vw", color: "#FFFFFF", padding: "3vw 4vw 1vw" }}>{movie.title}</p>

            <p style={{ width: "70vw", fontFamily: "Overpass", fontSize: "1.5vw", fontWeight: "500", color: "#FFFFFF", paddingLeft: "4vw" }}>{movie.overview} </p>

            <div style={{ display: "flex", color: "#FFFFFF", padding: "1.5vw 4vw 3.5vw" }}>
              {renderStarRating()}
            </div>

            <div style={{ display: "flex", width: "33vw", justifyContent: "space-between", paddingLeft: "4vw" }}>
              <button style={{ backgroundColor: "#DA3714", width: "15vw", height: "4vw", fontFamily: "Overpass", borderRadius: "6vw", color: "#FFFFFF" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "0.1vw" }}>
                  <img src='/Images/playvector.svg' alt='play' style={{ height: "1.75vw", width: "1.75vw" }} /><p style={{ fontSize: "1.3vw", fontWeight: "700", }}>Watch Now</p>
                </div>
              </button>


              <div style={{ width: "5vw", height: "6.5vw" }}>
                <button style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src='/Images/addvector.svg' alt='add' style={{ height: "2.5vw", width: "2.5vw", color: "#FFFFFF" }} />
                  <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>WATCHLIST</p>
                </button>
              </div>
              <div style={{ width: "5vw", height: "6.5vw" }}>
                <button style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src='/Images/sharevector.svg' alt='share' style={{ height: "2.5vw", width: "2.5vw", color: "#FFFFFF" }} />
                  <p style={{ color: "#FFFFFF", fontFamily: "Overpass", fontSize: "1vw" }}>SHARE</p>
                </button>
              </div>
            </div>
          </div>
        </div >
      )}


      <Trending />
      <Horror />
      <Scifi />

    </>

  )
}

export default Home;



