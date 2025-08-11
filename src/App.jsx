import { useState, useEffect } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Meme from "./components/Meme"

export default function App() {

    const [allMemes, setAllMemes] = useState([])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imageUrl: 'https://i.imgflip.com/2reqtg.png'
    })

    useEffect(() => {
        getAllMemes()
    }, [])

    function handleInputChange(e) { 
        const { value, name } = e.currentTarget
        setMeme(prev => ({...prev, [name]: value}))
    }

    function getAllMemes() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }

    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomMeme = allMemes[randomIndex]
        setMeme(prev => ({...prev, imageUrl: randomMeme.url}))
    }

    return (
        <div className="container">

            <Header />

            <Input 
                handleInputChange={handleInputChange} 
                meme={meme} 
                getRandomMeme={getRandomMeme} 
            />
            
            <Meme meme={meme} />

        </div>
    )

}