import React from "react";
import Listitem from "./Component/listitem";
import Textinput from "./Component/textinput";

const App = () => {
  return (
    <div>
      <h1>To do List App</h1>
      <Textinput />
      <Listitem />
    </div>
  );
};

export default App;
