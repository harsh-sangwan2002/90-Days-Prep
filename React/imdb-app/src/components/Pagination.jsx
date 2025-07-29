import { memo } from 'react'

const Pagination = memo(({ pages, handleClick, currPage, handlePrev, handleNext }) => {

    return (
        <div className='pagination'>
            <button onClick={() => handlePrev(currPage)}>&lt;</button>
            {
                pages.map(page => (
                    <button onClick={() => handleClick(page)} key={page}>{page}</button>
                ))
            }
            <button onClick={() => handleNext()}>&gt;</button>
        </div>
    )
})

export default Pagination
