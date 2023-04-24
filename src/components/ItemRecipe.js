import {NavLink} from 'react-router-dom';

const ItemRecipe = ({eachRecipe}) => {  
    return (
        <NavLink to = {`/RecipeArray/${eachRecipe.id}`}>
           <li><img src={eachRecipe.photoUrl} alt={eachRecipe.title}></img>
            <h3>{eachRecipe.title}</h3>
            <p>Cuisine: {eachRecipe.cuisine}</p>
            <p>Tags: {eachRecipe.tags}</p>
            <p>Calories: {eachRecipe.calories}</p></li>
       </NavLink>
)
}
export default ItemRecipe;
