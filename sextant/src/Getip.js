import React, { useEffect, useState } from 'react'

function Getip(props) {

 const [data, setdata] = useState(null) 
 let result;

  useEffect( () => {
    let url;
    let ip = props.ip;

    async function fetchData () {
      
      ip === "v4" 
      ? url = "https://api.ipify.org"
      : url = "https://api64.ipify.org"
      
      const response = await fetch(url);
      setdata(await response.text());
      return data;
    }
    fetchData();
    
  }, [data, props.ip])

  
  data === null
  ? result = "fetching..."
  : result = data
  
   console.log(result);

  return (
    result
  )
}

export default Getip