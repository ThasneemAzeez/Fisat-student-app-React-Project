import React, { useState } from 'react'

const Search = () => {
    const[data,changeData]=useState({
        "name":""
    })
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1><center>Search</center></h1>
                    <label htmlFor="" className="form-label">Search</label>
                    <input type="text" className="form-control" name='name' value={data.name} onClick={inputHandler} />
                    <button className="btn btn-success" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search