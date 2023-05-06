//import { act } from "react-dom/test-utils";

export const initialState = {
  items: [],
};

const itemreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
      };
    case "DELETE_ITEM": {
      console.log("Moving to itemreducer function");
      const temp = state.items.filter((item, index) => {
        return index != action.id;
      });
      console.log(temp);
      return {
        items: [...temp],
      };
    }
    default:
      return state;
  }
};

export default itemreducer;
