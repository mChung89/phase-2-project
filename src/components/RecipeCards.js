function RecipeCards ({ recipes }) {
    console.log(recipes)
    const renderedCards = recipes.map(recipe => {
        return (
            <div key={recipe.name}>
                <img src={recipe.image}></img>
                <h1>{recipe.name}</h1>
            </div>
        )
    })

    return (
        <div>
            <h2>Recipe Cards</h2>
            {renderedCards}
        </div>

    )
}

export default RecipeCards