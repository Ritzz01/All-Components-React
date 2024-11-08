import React from "react";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import Usestate from "./Usestate";
import ContextApis, { Wrapper } from "./ContextApis";
import ContextChild from "./ContextChild";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import Child from "./Child";
import Child2 from "./Child2";

function App() {
  return (
    <div>
      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <Usestate/> */}
      {/* <ContextApis />
      <Wrapper>
        <ContextChild />
      </Wrapper> */}
      {/* <UseMemo/> */}
{/* 
      <UseCallback/> */}

      <Child/>
      <Child2/>
    </div>
  );
}

export default App;
