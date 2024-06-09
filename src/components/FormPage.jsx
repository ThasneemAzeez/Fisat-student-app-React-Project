import React, { useState } from 'react'

const FormPage = () => {
    const[data,changeData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""

        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.name})
    }
    const readValue=()=>{
        console.log(data)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                       <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={data.college}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Dob</label>
                            <input type="date" name="" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email id</label>
                            <input type="text" className="form-control" name='emai' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage