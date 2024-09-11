import { useEffect } from "react";

const GifGrid = ({category}) =>{

    useEffect(() => {
        console.log({category})
    }, [])

    return (
        <>
            <p>{category}</p>
        </>
    )
}

export default GifGrid;