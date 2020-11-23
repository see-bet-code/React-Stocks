import React, {useState} from 'react';

const SearchBar = (props) => {
  const [checked, setChecked] = useState(null)

  const handleSort = (e) => {
    const val = e.target.value
    setChecked(val)
    props.sortStocks(val)
  }

  const filterByType = (e) => {
    props.filterByType(e.target.value)
    setChecked(null)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" checked={checked === "Alphabetically"} onChange={handleSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" checked={checked === "Price"} onChange={handleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterByType}>
          <option value=""></option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
