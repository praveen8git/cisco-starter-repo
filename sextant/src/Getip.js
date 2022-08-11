import React, { useEffect, useState } from 'react'

function Getip(props) {


//  const data = useRef(null);
 const [data, setdata] = useState(null) 
  useEffect( () => {
    let url;
    let ip = props.ip;

    async function fetchData () {
      
      if (ip === "v4") {
        url = "https://api.ipify.org";
      }
      else {
        url = "https://api64.ipify.org";
      }
      const response = await fetch(url);
      // data.current = await response.text();
      setdata(await response.text());
      // return data.current;
      return data;
    }
    fetchData();
    
  }, [])

  // console.log(data2);
  let result = data;
  // let result = data.current;
  if (data === null){
    result = "loading...";
  }
  
   console.log(result);

  return (
    result
  )
}

export default Getip