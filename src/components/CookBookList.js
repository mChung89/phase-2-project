import {useState} from 'react'
import RecipeList from './RecipeList';

function CookBookList({cookBooks}) {


    function handleClick() {
        console.log("clicked")
    }

    const cookBookData = cookBooks
        .map((cookBook) => {
        return <>
            <img onClick={handleClick} src={cookBook.image} /> 
        </>
    })

  return (
    <div className="App">
        {cookBookData}
        <RecipeList cookBooks ={cookBooks}/>
    </div>
  );
}

export default CookBookList;