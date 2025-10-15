import { useEffect, useState } from "react";

const Pagination = ({ handleClick, totalPages }) => {

    const [pages, setPages] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPagesCount, setTotalPagesCount] = useState();
    const THRESHOLD = 10;

    const setNewPagesList = (pageNo) => {
        const itemsLength = Math.min(totalPagesCount, THRESHOLD);
        let itemsOnLeft = Math.ceil(THRESHOLD / 2) - 1;
        let startingPage = Math.max(1, pageNo - itemsOnLeft);

        if (startingPage + itemsLength > totalPagesCount) {
            startingPage = totalPages - itemsLength + 1;
        }

        const list = Array.from({ length: Math.min(totalPages, THRESHOLD) }, (_, i) => i + startingPage);
        setPages(list);
    }

    const handlePrevClick = () => {
        if (currPage > 1) {
            handleClick(currPage - 1);
            setCurrPage(currPage - 1);
        }
    }

    const handlePageClick = (page) => {
        setCurrPage(page);
        handleClick(page);
        setNewPagesList(page);
    };

    const handleNextClick = () => {
        handleClick(currPage + 1);
        setCurrPage(currPage + 1);
    }

    useEffect(() => {
        setTotalPagesCount(totalPages);
        const list = Array.from({ length: Math.min(totalPages, THRESHOLD) }, (_, i) => i + 1);
        setPages(list);
    }, [totalPages])

    return (
        <section className="pagination">
            <button onClick={handlePrevClick}>&lt;</button>
            {
                pages.map(page => (
                    <button key={page} onClick={() => handlePageClick(page)}>{page}</button>
                ))
            }
            <button onClick={handleNextClick}>&gt;</button>
        </section>
    )
}

export default Pagination
