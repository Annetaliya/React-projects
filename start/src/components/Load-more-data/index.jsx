import React, { useEffect, useState } from 'react'
import './styles.css';

const LoadMoreData = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    const fetchProduts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20  }`)
            const result =  await response.json()
            if (!response.ok) {
                console.log('Error loading your data')
            }
            console.log(result)
            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }

        }catch(e) {
            console.log(e)
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchProduts()

    }, [count])

    useEffect(() => {
        if (products && products.length === 100 ) {
            setDisableButton(true)
        }
    })
    if (loading) {
        return <div>Loading data ! Please wait</div>
    }
  return (
    <div className='load-more-container'>
        <div className='product-container'>
            {
                products && products.length ? 
                products.map((item) => (
                    <div key={item.id} className='product'>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.title}</p>

                    </div>
                ))
                : null
            }
        </div>
        <div className='button-container'>
            <button 
            disabled={disableButton} 
            onClick={() => setCount(count + 1)}>
                Load more products
            </button>
            {
                disableButton ? <p>You have reached 100 products</p> : null
            }
        </div>
        
    </div>
  )
}

export default LoadMoreData;