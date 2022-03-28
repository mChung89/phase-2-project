import {useState} from 'react'
import RecipeList from './RecipeList';

function CookBookList({cookBooks}) {

    const cookBookData = cookBooks
        .map((cookBook) => {
        return <>
            <img src={cookBook.image}/> 
        </>
    })

  return (
    <div className="App">
        {cookBookData}
        <RecipeList cookBooks={cookBooks}/>
    </div>
  );
}

export default CookBookList;