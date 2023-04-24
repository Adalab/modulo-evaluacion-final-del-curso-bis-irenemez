const FilterTitle = ({ handleInputFilter, searchRecipe }) => {
    const handleInput = (ev) => {
      handleInputFilter(ev.target.value);
    };
    return (
      <>
        <label htmlFor="searchRecipe">
          Buscar por título:
        </label>
        <input
          className="input_search"
          type="text"
          autoComplete="off"
          name="name"
          id="name"
          placeholder="ejemplo: Pasta"
          onInput={handleInput}
          value={searchRecipe}
        />
      </>
    );
  };
  
  export default FilterTitle;