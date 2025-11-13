import { useEffect, useState } from "react";

const Pagination = ({ currPage, setCurrPage, totalPages }) => {
    const [pages, setPages] = useState([]);
    const THRESHOLD = 8;

    // Update pagination whenever currPage or totalPages changes
    useEffect(() => {
        updatePagesArray(currPage);
    }, [currPage, totalPages]);

    const updatePagesArray = (page) => {
        const half = Math.floor(THRESHOLD / 2);

        let start = page - half;
        let end = page + half;

        // Adjust if near start
        if (start < 1) {
            start = 1;
        }

        // Adjust if near end
        if (end > totalPages) {
            start -= end - totalPages;
        }

        const list = Array.from(
            { length: Math.min(THRESHOLD, totalPages - start + 1) },
            (_, i) => start + i
        );
        setPages(list);
    };

    const handlePrevClick = () => {
        if (currPage > 1) setCurrPage(currPage - 1);
    };

    const handlePageClick = (page) => {
        setCurrPage(page);
    };

    const handleNextClick = () => {
        if (currPage < totalPages) setCurrPage(currPage + 1);
    };

    return (
        <ul className="pagination" style={{ display: "flex", gap: "6px", listStyle: "none" }}>
            <button onClick={handlePrevClick} disabled={currPage === 1}>
                &lt;
            </button>
            {pages.map((page) => (
                <button key={page} onClick={() => handlePageClick(page)}>{page}</button>
            ))}
            <button onClick={handleNextClick} disabled={currPage === totalPages}>
                &gt;
            </button>
        </ul>
    );
};

export default Pagination;
