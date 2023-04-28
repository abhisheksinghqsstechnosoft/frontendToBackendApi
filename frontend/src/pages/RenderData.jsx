import React, { useEffect } from "react";
import axios from "axios";
import { useState} from "react";

const RenderData = () => {
  const [data, setData] = useState();
const getData= async()=>{
 const gdata =await axios.get('http://localhost:4000/formData');
 setData(gdata?.data.data);
 console.log(gdata);
     
}

useEffect(()=>{
    getData();
},[])
//  

//     axios
//       .get("http://localhost:4000/formData")
      
//        .then(data => setData(data))
//        .catch((e) => console.log(e));
//     console.log(JSON.stringify(data));
//   
// useEffect(() => {
//     axios.get('http://localhost:4000/formData')
//       .then(response => setData(response.data))
//       .then(console.log(data))
//       .catch(error => console.error(error));
//   }, [data]);
// useEffect(() => {
    
//     fetch('http://localhost:4000/formData')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);
  return (
    <>
    
      <div>
        <h1>Data:</h1>
        <ul>
          {data?.map((item) => (
            <li key={item.password}>
              {item.fullname}, {item.password}, {item.email}
            </li>
          ))}
        </ul>
      </div>
     
      {/* 
      {data.map((d) => {
        <ul>
          <li>d.fullname</li>
          <li>d.email</li>
        </ul>;
      })} */}
    </>
  );
};

export default RenderData;
