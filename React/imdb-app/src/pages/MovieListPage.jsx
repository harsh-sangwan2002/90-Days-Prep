import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setMovies, setPages } from '../redux/MovieSlice';

const MovieListPage = () => {

    const movies = useSelector((state) => state.movie.movies);
    const pages = useSelector((state) => state.movie.pages);
    const currPage = useSelector((state) => state.movie.currPage);

    const dispatch = useDispatch();

    const updatePagesArray = (currentPage) => {
        const totalPages = 500;
        const pagesToShow = 8;

        let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

        const newPages = [];
        for (let i = startPage; i <= endPage; i++) {
            newPages.push(i);
        }

        dispatch(setPages(newPages));
    };

    const handlePrev = (page) => {
        if (page == 1)
            return;

        const newPage = currPage - 1;
        dispatch(setCurrentPage(newPage));
        updatePagesArray(newPage);
    }

    const handleClick = (page) => {
        dispatch(setCurrentPage(page));
        updatePagesArray(page);
    }

    const handleNext = () => {
        const newPage = currPage + 1;
        dispatch(setCurrentPage(newPage));
        updatePagesArray(newPage);
    }

    const fetchMovies = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
        const data = await res.json();
        dispatch(setMovies(data.results));
    }

    useEffect(() => {
        fetchMovies(currPage);
    }, [currPage])

    return (
        <div className='movie-list'>
            {
                movies.map((movie, idx) => (
                    <MovieCard movie={movie} key={idx} />
                ))
            }
            <Pagination pages={pages} currPage={currPage} handleClick={handleClick} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}

export default MovieListPage
