import React from 'react'
import { useContext } from 'react';
import { Store } from './Context';

function BottomButtons() {
    const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

    return (
        <div className='buttonsContainer'>
            <div className='buttonContainer'>
                <button
                    className={Button1 ? "buttonON" : "buttonOFF"}
                    onClick={() => setButton1(!Button1)}
                >
                    <button
                        className='slider'
                        onClick={() => setButton1(!Button1)}
                        style={Button1 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
                    ></button>
                </button>
                <div className='description'> 0 doses missed during follow-up visits (n=142)</div>
            </div>
        </div>
    )
}

export default BottomButtons