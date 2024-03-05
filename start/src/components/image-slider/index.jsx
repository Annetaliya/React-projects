import React, { useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const ImageSlider = ({limit = 5}) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)

    const url = 'https://picsum.photos/v2/list'

    const fetchImages = async ()  => {
        
        try {
            setLoading(true)
            const response = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e)
            setLoading(false)

        }

    }

    useEffect (() => {
        if (url !== '' ) fetchImages()
    })

    console.log(images);

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error Occured ! {errorMsg}</div>
    }
  return (
    <div>
        <BsArrowLeftCircleFill 
        className='arrow arrow-left'
        />
        {
            images && images.length ? 
            images.map((imageItem) => (
                <img
                key={imageItem.id} 
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className='current-image'
                />
            ))
            : null
        }
        <BsArrowRightCircleFill />
    </div>
  )
}

export default ImageSlider