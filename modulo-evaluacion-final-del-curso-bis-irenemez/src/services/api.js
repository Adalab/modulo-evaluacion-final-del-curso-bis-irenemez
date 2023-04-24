const Api = (eachRecipe) =>{

    return{

        title: eachRecipe.title,
        cuisine: eachRecipe.cuisine,
        tags: eachRecipe.tags,
        calories: eachRecipe.calories,
        photoUrl: eachRecipe.photoUrl,
        id: eachRecipe.id,
    };
};


const getRecipe = (id) =>{

    return fetch (`https://api.sampleapis.com/recipes/recipes`)
    .then((response) => response.json())
    .then((data) => {
        return data.map(Api);
    });
}
const api = {
    getRecipe,
}

export default api;












/*const getDataApi = (eachRecipe) => {
    return fetch('https://api.sampleapis.com/recipes/recipes')
    .then((response)=> response.json())
    .then((data) =>{
        console.log(data)
        data.results.map(eachRecipe => {
            return{
                title: eachRecipe.title,
                cuisine: eachRecipe.cuisine,
                tags: eachRecipe.tags,
                calories: eachRecipe.calories,
                photoURL: eachRecipe.photoURL
            } 
        });
        //return data;
    });
};
export default getDataApi;
*/