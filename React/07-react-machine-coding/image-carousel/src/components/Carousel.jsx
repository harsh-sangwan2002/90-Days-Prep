import { useEffect, useState } from 'react'

const Carousel = () => {

    const images = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Nature Image 1",
            description: 'This is a beautiful view of nature.'
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Nature Image 2",
            description: 'This is another beautiful view of nature.'
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Nature Image 3",
            description: 'This is yet another beautiful view of nature.'
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Nature Image 4",
            description: 'This is a stunning view of nature.'
        }
    ]
    const [currIdx, setCurrIdx] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCurrIdx((prevIdx) => (prevIdx + 1) % images.length);
        }, 3000);
    }, []);

    return (
        <div className='carousel'>
            <img src={`${images[currIdx].imageUrl}`} alt={images[currIdx].title} />
            {images[currIdx].title && <h2>{images[currIdx].title}</h2>}
            {images[currIdx].description && <p>{images[currIdx].description}</p>}
        </div>
    )
}

export default Carousel
