import React, { useState } from 'react' 
import { AddCategory } from './Components/AddCategory'
import { GrifGrid } from './Components/GrifGrid'
export function GifExpertApp() {  
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = () =>{ 
    //     // setCategories([...categories,'HunterXHunter']);
    //     setCategories(cats => [...cats,'HunterXHunter']);
    // }
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>   
            <hr/> 
            <ol>
                {
                    categories.map( category  => 
                        <GrifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
} 