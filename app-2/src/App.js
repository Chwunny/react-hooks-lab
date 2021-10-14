import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import Display from "./Display";

function App() {
  const [valOne, setValOne] = useState("");
  const [valTwo, setValTwo] = useState("");
  const [list, setList] = useState([]);

  const upperCase = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  const updateList = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${valOne}&limit=${valTwo}`
      )
      .then((res) => {
        setList(res.data.results);
        document.title = `${upperCase(res.data.results[0].name)} - ${upperCase(res.data.results[res.data.results.length - 1].name)}`;
      });
  };

  return (
    <div className="App">
      <Search
        valOne={valOne}
        valTwo={valTwo}
        setValOne={setValOne}
        setValTwo={setValTwo}
        updateList={updateList}
      />
      {list.map((el, index) => {
        return <Display key={index} item={el.name} upperCase={upperCase} />;
      })}
    </div>
  );
}

export default App;
