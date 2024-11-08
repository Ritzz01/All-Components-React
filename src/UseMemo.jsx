import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const[color,setColor]=useState()

  const data = useMemo(() => {
    console.log("clicked");
    return count * 10;
  }, [count]);


  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 style={{color}}>UseMemo() Hook</h1>

      <h2>Count:{count}</h2>

      <h2>Memo Data:{data}</h2>

      <button onClick={counter}>Count</button>

      <button onClick={()=>setColor((col)=>col==='red'?'green':'red')}>Color</button>

    </div>
  );
}

export default UseMemo;
