import { useEffect, useState } from "react";

const RandomColor = () => {
    //create two states one to save the type, second to store current color

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A','B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        //  hex.forEach((i) => {
        //      hexColor += hex[randomColorUtility(hex.length)]
        //  })
          for(let i = 0; i < 6; i++) {
              hexColor += hex[randomColorUtility(hex.length)]
          }
        console.log(`hey this is a ${hexColor}`);
        setColor(hexColor);

    }

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb${r},${g},${b}`) ;
    }
    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor() 
         else handleCreateRandomHexColor()
        
    }, [typeOfColor]);


    return(
        <div style={{width: '100vw', height: '100vh', background: color}}>
            <button onClick={() =>setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() =>setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                Generate Random Color
            </button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'

            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>

            </div>

        </div>
    )
}

export default RandomColor;