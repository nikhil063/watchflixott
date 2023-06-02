import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Flex } from '@chakra-ui/react';


const Similarmovies = ({setIsPlaying}) => {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);

  const handleMovieClick = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e6c2085daccec2eb8012b84387460472`);
        if (response.ok) {
          const data = await response.json();
          setSimilarMovies(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSimilarMovies();
  }, [id]);

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <h1 style={{ color: "white", paddingBottom: "1vw", paddingLeft: "5vw", fontWeight: "600", fontFamily: "Poppins", fontSize: "1.2vw" }}>Similar Movies</h1>

      <Slider {...settings} style={{ padding: "0 4vw" }}>
        {similarMovies.map((movie) => (
          <div key={movie.id} style={{ padding: '0 4vw' }}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="100%"
              px="1vw"
              py="2vw"
              minWidth='12vw'
              w='12vw'
            >
              <Link to={`/movies/${movie.id}`} onClick={handleMovieClick}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '100%', borderRadius: '0.2vw' }}
                />
              </Link>
            </Flex>
          </div>
        ))}
      </Slider>
    </>
  );
};


export default Similarmovies;