import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NotFoundRecipe from './NotFoundRecipe';
import listRecipe from './ListRecipe';
import ItemRecipe from './ItemRecipe';


const DetailRecipe = ({listRecipe, findElement}) => {
    const params = useParams();
    const itemRecipe = params.id;
    console.log(itemRecipe);
const foundElement=findElement(itemRecipe);
 console.log(foundElement);   
    if (itemRecipe !== undefined) {
        return  (
          <>
            <NavLink className="return" to="/">
              Volver página principal
            </NavLink>
            <article className="article">
              <div className="card_details">
                <img
                  className="img_details"
                  src={foundElement.photoUrl}
                  alt={foundElement.name}
                />
    
                <ul className="ul_details">
                  <li className="list_details">
                    <h2 className="name_details">{foundElement.name}</h2>
                  </li>
                <li className="list_details">
                    <span className="span_details_title">Cuisine:</span>
                    <span className="span_details">
                      {foundElement.cuisine}
                    </span>
                  </li>
                  <li className="list_details">
                    <span className="span_details_title">Tags:</span>
                    <span className="span_details">{foundElement.tags}</span>
                  </li>
    
                  <li className="list_details">
                    <span className="span_details_title">
                      Calories: {foundElement.calories}
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </>
        ) 
      }
      else (
        <main>
          <NotFoundRecipe/>
        </main>
      );
    };
    
    export default DetailRecipe;