import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/action/item";

const Textinput = () => {
  const [items, setItems] = useState("");
  const dispatch = useDispatch();

  const additems = () => {
    console.log("Dispatching items");
    dispatch(add(items));
    setItems("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add New Item"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <span>
          <button onClick={additems}>Add Items</button>
        </span>
      </div>
    </div>
  );
};

export default Textinput;
