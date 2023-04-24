import {Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/App.css';
import ItemRecipe from './ItemRecipe';
import ListRecipe from './ListRecipe';
import Filter from './Filter';
import DetailRecipe from './DetailRecipe';
import ls from '../services/localStorage';
// falta leer los datos del local storage y pasárselos a la función useState para que el estado tenga estos valores al arrancar la página
// falta guardar los datos en el local storage en un useEffect para que después de cambiar el local storage esté actualizado

function App() {
const [searchRecipe, setSearchRecipe] = useState('');
const [listRecipe, setListRecipe] = useState([]);

  useEffect(()=>{
    api.getRecipe().then((cleanData) => {
      console.log(cleanData);
      setListRecipe(cleanData);
      });
  },[])

  const handleInputFilter = (value) => {
    setSearchRecipe(value);
  }
  const filterRecipes = listRecipe.filter ((recipe) => {
      return recipe.title.toLowerCase().includes(searchRecipe.toLowerCase())
  });



const findElement = (elementId)=> {
  const foundElement = listRecipe.find((eachElement)=> eachElement.id === parseInt(elementId))
  console.log(foundElement);
  return foundElement;
}


  return (
    <div>
      <>
        <h1 className="title--big">Directorio de recetas</h1>
        <Filter searchRecipe={searchRecipe} handleInputFilter={handleInputFilter}></Filter>
        <Routes>
          <Route path='/' element = {<ListRecipe filterRecipes={filterRecipes}></ListRecipe>}>
          </Route>
          <Route path='/RecipeArray/:id'element={<DetailRecipe findElement={findElement} listRecipe = {listRecipe}></DetailRecipe>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;