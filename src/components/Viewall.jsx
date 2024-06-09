import React, { useEffect, useState } from 'react'
import Navigatin from './Navigatin'
import axios from 'axios'

const Viewall = () => {
    const[data,changeData]=useState([])
    const fechData=()=>{
        axios.get(
            "https://anishpdm.github.io/dummy-api-new/student.json" 
        ).then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
       useEffect(()=>{fechData()},[]) 
      
    

    return (
        <div>
            <Navigatin/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">no</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name </th>
                                            <th scope="col">Dob</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Email.id</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value,index)=>{
                                                return    <tr>
                                            <th scope="row">1</th>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                        </tr>

                                                }
                                            )
                                        }
                                       
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall