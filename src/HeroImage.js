import "./HeroImage.scss";


function HeroImage({src}) {
    return(
        <div className="heroImage">
            <h1 className="heroImage__title">Here is a title for the hero image</h1>
            <img className="heroImage__image"src={"http://localhost:1337" + src} alt="" />
        </div>
    )
}

export default HeroImage;