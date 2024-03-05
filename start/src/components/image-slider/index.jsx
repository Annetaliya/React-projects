import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

const ImageSlider = ({ limit = 5 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)

    const url = 'https://picsum.photos/v2/list'

    const fetchImages = async () => {

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
    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)

    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

    }

    useEffect(() => {
        if (url !== '') fetchImages()
    }, [url])

    console.log(images);

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error Occured ! {errorMsg}</div>
    }
    return (
        <div className='container'>
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className='arrow arrow-left'
            />
            {
                images && images.length ?
                    images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? 'current-image'
                             : 'current-image hide-current-image'}
                        />
                    ))
                    : null
            }
            <BsArrowRightCircleFill
                onClick={handleNext}
                className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button
                                key={index}
                                className={currentSlide === index ? 'current-indicator'
                                 : 'current-indicator hide-current-indicator'}
                                 onClick={() => setCurrentSlide(index)}
                            >

                            </button>
                        ))

                        : null
                }

            </span>
        </div>
    )
}

export default ImageSlider