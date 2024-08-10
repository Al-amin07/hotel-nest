import { useSearchParams } from "react-router-dom";

import PropTypes from 'prop-types'

const Searching = ({handleSearch, setSearch, search, setSearchText, searchText}) => {
  const [params, setParams] = useSearchParams();
  
  const handleReset = () => {
    const newParams = new URLSearchParams(params)
    newParams.delete('category')
    setParams(newParams);
    setSearch('')
  }

  return (
    <div className="flex mt-4 flex-col md:flex-row justify-center items-center gap-5 ">
    

      <form onSubmit={handleSearch}>
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            placeholder="Enter Location"
            aria-label="Enter Job Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
          type="submit"
          className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </form>
      <div>
        <select name="category" id="category" className="border p-4 rounded-md">
          <option value="">Sort By Deadline</option>
          <option value="dsc">Descending Order</option>
          <option value="asc">Ascending Order</option>
        </select>
      </div>
      <button onClick={handleReset} className="btn">Reset</button>
      {/* <Link to={'/'}  className="btn">Reset</Link> */}
    </div>
  );
};

Searching.propTypes = {
  handleSearch: PropTypes.func,
  setSearch: PropTypes.func,
  search: PropTypes.string,
}

export default Searching;
