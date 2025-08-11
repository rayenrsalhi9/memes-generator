export default function Input({ handleInputChange, meme, getRandomMeme }) {

    function handleBtnClick(e) {
        e.preventDefault()
        getRandomMeme()
    }

    return (
        <form>
            <div className="top-section">
                <label>
                    Top Text
                    <input 
                        type="text" 
                        name="topText"
                        placeholder="Shut up"
                        onChange={handleInputChange}   
                        value={meme.topText}
                    />
                </label>
                <label>
                    Bottom Text
                    <input 
                        type="text" 
                        name="bottomText"
                        placeholder="And take my money"
                        onChange={handleInputChange}
                        value={meme.bottomText} 
                    />
                </label>
            </div>
            <button onClick={handleBtnClick}>Generate Meme</button>
        </form>
    )
}
