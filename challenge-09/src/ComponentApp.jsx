import "./App.css";

import { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const ComponentApp = () => {
    const [categories, setCategories] = useState(['Zodiac']);

    const onAddCategory = (category) => {
        setCategories( list => [...list, category])
    }

    return (
    <>
        <h1>
            GifExpertApp
        </h1>

        
        <AddCategory onAddCategory={onAddCategory} />
        {
            categories.map( 
                (category, index) => 
                    {
                        return <GifGrid category={category} key={index} />
                    }
            )
        }

    </>
    )
}

export default ComponentApp;


