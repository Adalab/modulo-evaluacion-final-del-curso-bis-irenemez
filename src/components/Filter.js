import FilterTitle from "./FilterTitle";


const Filter = ({searchRecipe, handleInputFilter}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="search_section">
      <form action="./" className="form_section" onSubmit={handleSubmit}>
        <FilterTitle
          handleInputFilter={handleInputFilter}
          searchRecipe={searchRecipe}
        ></FilterTitle>
      </form>
    </section>
  );
};

export default Filter;