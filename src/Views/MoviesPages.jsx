


export default function MoviesPages() {
   return (
      <form 
      className="SearchForm" 
      // onSubmit={handleSubmit}
      >
      <input 
        className="SearchForm-input"
        name="query"
        type="text"
        placeholder="Search by movie name"
      //   value={query}
      //   onChange={handleChange}
      />
       <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
      </form>
   )
}