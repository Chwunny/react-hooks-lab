import React from "react";

const Search = (props) => {
  const { valOne, valTwo, setValOne, setValTwo, updateList } = props;
  return (
    <div>
      <form action="Submit" onSubmit={(e) => updateList(e)}>
        <input
          type="number"
          value={valOne}
          onChange={(e) => setValOne(e.target.value)}
          min={0}
        />
        <input
          type="number"
          value={valTwo}
          onChange={(e) => setValTwo(e.target.value)}
          max={898}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
