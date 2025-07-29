import { useState } from "react";

const Carousel = () => {

    const images = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
            alt: 'Image 1'
        },
        {
            id: 2,
            src: 'https://images.pexels.com/photos/24245649/pexels-photo-24245649.jpeg',
            alt: 'Image 2'
        },
        {
            id: 3,
            src: 'https://images.pexels.com/photos/33124609/pexels-photo-33124609.jpeg',
            alt: 'Image 3'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    return (
        <div className="carousel">
            <button onClick={handlePrev}>Prev</button>
            {
                <img src={`${images[currentIndex].src}`} alt={images[currentIndex].alt} />
            }
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel
