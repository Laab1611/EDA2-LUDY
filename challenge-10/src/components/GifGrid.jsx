import { useEffect } from "react";

// Función para obtener los GIFs desde la API de Giphy
const getGifs = async (category) => {
    const url = 
    `https://api.giphy.com/v1/gifs/search?api_key=MFPhgLHq6Zzb7RSLbVrSl6oLLYG1cXl3&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}

const GifGrid = ({ category }) => {

    useEffect(() => {
        console.log({ category });
        // Llamar a la función getGifs y manejar los datos
        getGifs(category).then(gifs => {
            console.log(gifs);
        });
    }, [category]); // Añadir category como dependencia

    return (
        <>
            <p>{category}</p>
        </>
    );
}

export default GifGrid;