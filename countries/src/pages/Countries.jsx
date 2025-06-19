import React,{useEffect, useState}from "react";
 function CountryCard({name,flag}){
  return(
 <div className="countryCard" style={{border:"1px solid gray",justifyContent:"center",borderRadius:"4px",height:"200px",width:"200px",display:"flex",gap:"10px",flexDirection:"column",alignItems:"center"}}>
     <img style={{width:"100px",height:"100px",objectFit:"contain"}} src={flag} alt={name}/>
     <div>{name}</div>
     </div>
  )
  }
const Countries=()=>{
  
  const API_ENDPOINT="https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
  const[countryData,setCountryData] = useState([])
  const[searchData,setSearchData] = useState([]);
  useEffect(()=>{
  fetch(API_ENDPOINT)
  .then((res)=>res.json())
  .then((data)=>setCountryData(data))
  .catch((error)=> console.error("Error fetching data:",error));
  },[])
  // const data = dummyData();
//   console.log(countryData)
  // const items=[1,2,3,4,5,6];
  const handlerOnChange = (e)=>{
    setSearchData(e.target.value.toLowerCase());
    // console.log(searchData);
  }
  const filterCountries=countryData.filter((item)=>
   item.common.toLowerCase().includes(searchData)
  )
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <input type="text" style={{width:"50%",margin:"10px",padding:"10px",color:"grey"}} placeholder="Search for countries..." onChange={handlerOnChange}/>
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",justifyContent:"center"}}>

         {filterCountries.map((item)=>(
     <CountryCard name={item.common} flag={item.png} key={item.common}/>
    ))}
    </div>
    </div>
  );
}

export default Countries;