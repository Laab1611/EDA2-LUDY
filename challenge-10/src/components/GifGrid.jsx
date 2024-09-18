import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import {getGifs} from "../helpers/getGifs";

const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    const fetchGifs = async () => {
        const gifs = await getGifs(category);
        console.log(gifs);
        setGifs(gifs);
    };

    useEffect(() => {
        fetchGifs();
    }, [category]);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    gifs.map( (gif, key) => {
                        return <GifItem key={key} {...gif}></GifItem>
                    })
                }
            </div>
        </>
    );
}

export default GifGrid;