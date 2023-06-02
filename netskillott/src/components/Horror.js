import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';


const Horror = () => {
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


    const [horrorMovies, setHorrorMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e6c2085daccec2eb8012b84387460472&with_genres=27`)
            .then(response => response.json())
            .then(data => {
                const movies = data.results;
                setHorrorMovies(movies);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1 style={{ color: "white", paddingBottom: "1vw", paddingLeft: "5vw", fontWeight: "600", fontFamily: "Poppins", fontSize: "1.2vw" }}>Horror</h1>

            <Slider {...settings} style={{ padding: "0 4vw" }}>
                {horrorMovies.map((movie) => (
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

export default Horror;
