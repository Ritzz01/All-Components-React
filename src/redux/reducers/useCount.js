let initial = 0;

function useCount(state = initial, action) {
  switch (action.type) {
    case "inc":
      return state + 1;

    case "dec":
      return state - 1;

    default:
      return state;
  }
}

export default useCount;