import React, { useState } from 'react';
import './App.css';

function DogGen() {

    const initialUrl = "https://images.dog.ceo/breeds/dingo/n02115641_6772.jpg"

    const [url, setUrl] = useState(initialUrl);

    function generate() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setUrl(data.message)
            })
    }

    return (
        <div className="generator">
            <button onClick={generate}>NEW DOGGO</button>
            <img src={url} alt='random doggo of the day' />
        </div>
    );
}

export default DogGen;
