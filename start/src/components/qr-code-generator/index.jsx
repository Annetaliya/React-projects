import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('')

    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput('')

    }
  return (
    <div>
        <h1>
            QRCodeGenerator
        </h1>
        <div>
            <input
                type='text'
                name='qr-code'
                value='input'
                placeholder='Enter your value here'
                onChange={(e) => setInput(e.target.value)}
             />
            <button disable={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>

        </div>
        <div>
            <QRCode
            id='qr-code-value'
            value={qrCode}
            size={400}
            bgColor='#fff'

             />
        </div>
        

    </div>
  )
}

export default QRCodeGenerator