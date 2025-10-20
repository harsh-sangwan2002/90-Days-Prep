import { useState, useMemo, useCallback } from "react";
import React from "react";

const THRESHOLD = 10;

const Pagination = ({ handleClick, totalPages }) => {
    const [currPage, setCurrPage] = useState(1);

    console.log("Pagination rendered");

    const pages = useMemo(() => {
        const itemsLength = Math.min(totalPages, THRESHOLD);
        let itemsOnLeft = Math.ceil(THRESHOLD / 2) - 1;
        let startingPage = Math.max(1, currPage - itemsOnLeft);

        if (startingPage + itemsLength - 1 > totalPages) {
            startingPage = Math.max(1, totalPages - itemsLength + 1);
        }

        return Array.from({ length: itemsLength }, (_, i) => i + startingPage);
    }, [currPage, totalPages]);

    const handlePrevClick = useCallback(() => {
        if (currPage > 1) {
            setCurrPage(currPage - 1);
            handleClick(currPage - 1);
        }
    }, [currPage, handleClick]);

    const handleNextClick = useCallback(() => {
        if (currPage < totalPages) {
            setCurrPage(currPage + 1);
            handleClick(currPage + 1);
        }
    }, [currPage, handleClick, totalPages]);

    const handlePageClick = useCallback(
        (page) => {
            setCurrPage(page);
            handleClick(page);
        },
        [handleClick]
    );

    return (
        <section className="pagination">
            <button onClick={handlePrevClick} disabled={currPage === 1}>
                &lt;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={page === currPage ? "active" : ""}
                >
                    {page}
                </button>
            ))}
            <button onClick={handleNextClick} disabled={currPage === totalPages}>
                &gt;
            </button>
        </section>
    );
};


export default React.memo(Pagination);
