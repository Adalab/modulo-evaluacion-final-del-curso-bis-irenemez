import ItemRecipe from './ItemRecipe';
const ListRecipe = ({filterRecipes}) => {
    const renderList = filterRecipes.map((eachRecipe) => {
        return (        
            <ItemRecipe key={eachRecipe.id} eachRecipe = {eachRecipe}/>
        );
    }); 
    return (
        <section className="seccionUl">
            <ul>
                {renderList}
            </ul>
        </section>
    )
}
export default ListRecipe;