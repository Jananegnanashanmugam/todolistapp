import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteitem } from "../store/action/item";

const Listitem = () => {
  //const items = ["item1", "item2", "item3", "item4", "item5"];
  const items = useSelector((state) => {
    return state?.items;
  });
  const dispatchdeletefromstore = useDispatch();
  const deleteitemonclick = (index) => {
    console.log(`Dispatching items of id ${index}`);
    dispatchdeletefromstore(deleteitem(index));
  };
  return (
    <div>
      <div>
        {items?.map((item, index) => {
          return (
            <p key={index} onClick={() => deleteitemonclick(index)}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Listitem;
