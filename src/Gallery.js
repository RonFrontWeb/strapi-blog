import "./Gallery.scss";




function Gallery({src,title,description}) {


    return(
        <>
            <div className="gallery">
                <h1 className="gallery__title">{title}</h1>
                <img className="gallery__image"src={"http://localhost:1337" + src} alt="" />
                <p className="gallery__description">{description}</p>
            </div>
        </>
    )
}

export default Gallery;