import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const images = [
    {
      id: 1,
      url: `https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg`,
      title: "Image 1",
      description: "Description of image 1"
    },
    {
      id: 2,
      url: `https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg`,
      title: "Image 2",
      description: "Description of image 2"
    },
    {
      id: 3,
      url: `https://images.pexels.com/photos/34950/pexels-photo.jpg`,
      title: "Image 3",
      description: "Description of image 3"
    },
    {
      id: 4,
      url: `https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg`,
      title: "Image 4",
      description: "Description of image 4"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  }, [])

  return (
    <div className='carousel'>
      <img src={images[currentIndex].url} alt={images[currentIndex].title} />
      <h2>{images[currentIndex].title}</h2>
    </div>
  )
}

export default App
