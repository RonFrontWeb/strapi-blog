import "./App.scss";
import HeroImage from "./HeroImage";
import { useEffect , useState } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
 
function App() {

    var [content, setContent] = useState([]);

    useEffect(function () {

        fetch("http://localhost:1337/photo-blogs")
            .then(response => response.json())
            .then(data => setContent(data));

    },[])



    return(
        <>
        <Navbar/>
        <HeroImage src={content[0]?.image.url}/>
        <div className="photoGrid" >
            {content[0]?.images.map( item => <Gallery src={item.image.url} title={item.title} description={item.description}/>)}

            {/*/ looper igennem content */}
            {/* <Gallery src={content[0]?.images[0].image.url} title=" Lion" description="Here youion .... ... ... "/>
            <Gallery src={content[0]?.images[1].image.url} title="Aw" description="Here ye gazelle.... ... ..."/>
            <Gallery src={content[0]?.images[2].image.url} title={content[0]?.images[2].title} description="Here you see the squirrel .... ... ..."/> */}
        </div>
        </>
    )
}

export default App;