export default function Meme({ meme }) {
    return (
        <div className="meme">
            <img src={meme.imageUrl} />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    )
}