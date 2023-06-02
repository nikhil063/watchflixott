import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';





const Trending = () => {
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
                    slidesToShow: 4,
                },
            },
        ],
    };

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e6c2085daccec2eb8012b84387460472").then(res => res.json()).then(data => setMovies(data.results))
    }, [])

    return (
        <>
<h1 style={{ color: "white", paddingBottom:"1vw", paddingLeft:"5vw", fontWeight:"600", fontFamily:"Poppins", fontSize:"1.2vw"}}>Trending</h1>

<Slider {...settings} style={{padding:"0 4vw"}}>
        {movies.map((movie) => (
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
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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

export default Trending;



// <Slider {...settings}>
// <Flex px="4vw" m="0" >
//     <h1 style={{ color: "white", paddingBottom:"1vw"}}>Trending</h1>
//     <div style={{display:"flex", flexWrap:"nowrap"}}>
//         {movies.map(movie => (
//             <div key={movie.id} style={{
//                 marginBottom: "2vw",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 minWidth: "15vw",
//                 marginRight: "1vw",
//             }}>
//                 <Link to={`/movies/${movie.id}`}>
//                     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} style={{ paddingRight: "0.1vw" }} />
//                     </Link>
//             </div>
//         ))}
//     </div>
// </Flex>
// </Slider>





// import { Allmovies } from "./Allmovies.js";
// import { Link } from 'react-router-dom';

// const Carousel = () => {

// useEffect(() => {
//     // Fetch data from the TMDB API
//     const fetchMovies = async () => {
//         try {
//             const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
//             const data = await response.json();
//             setTrendingMovies(data.results);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     };

//     fetchMovies();
// }, []);

// const genreOrder = ["Trending", "Horror", "Sci-Fi"];

// const itemsByGenre = Allmovies.reduce((acc, item) => {
//     if (!acc[item.genre]) {
//         acc[item.genre] = [];
//     }
//     acc[item.genre].push(item);
//     return acc;
// }, {});

// const settings = {
//     dots: false,
//     arrows: false,
//     // infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     swipeToSlide: true, // Enable swiping to slide
//     draggable: true, // Enable dragging with mouse or touch gestures
//     variableWidth: false, // Allow variable width of slides
//     // centerMode: true, // Center the active slide
//     // centerPadding: "60px", // Padding for the centered slide
//     responsive: [
//         {
//           breakpoint: 768,
//           breakpoint: 1021,
//           settings: {
//             slidesToShow: 4,
//           },
//         },
//       ],
//   };







/* <div style={{ padding: "0 5vw" }}>
                {genreOrder.map((genre) => {
                    const movies = itemsByGenre[genre];

                    return (
                        <section key={genre}>
                            <h2 style={{ padding: "1vw 0", fontFamily: "Poppins", fontWeight: "600", color: "#FFFFFF" }}>{genre}</h2>
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                <Slider {...settings}>
                                    {movies.map((item) => (
                                        <div
                                            style={{
                                                marginBottom: "2vw",
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                            key={item.id}
                                        >
                                            <div>
                                                <Link to={`/movies/${item.id}`} style={{ textDecoration: 'none' }}>
                                                    <img src={item.image} alt={item.name} style={{ height: "23vw", paddingRight: "0.1vw" }} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                        </section>
                    );


                })}
            </div> */
        //     )
        // }


