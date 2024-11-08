let details = {
  name: "Alu",
  age: 19,
};

export default function userDetail(state = details, action) {
  switch (action.type) {
    case "click":
      return { ...state, name: "Ritika" };

      case "input":
      return { ...state, name:action.payload };

    default:
      return state;
  }
}

//action.payload: When you dispatch an action with a payload, that payload is the data you want to pass along with the action. For example, if you want to update a user’s name dynamically, you might dispatch an action like this:
