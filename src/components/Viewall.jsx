import React, { useState } from 'react'

const Viewall = () => {
    const[data,changeData]=useState(
        
        [
            {
              "_id": "66651683741a512717d92b87",
              "firstname": "Manu",
              "lastname": "R",
              "college": "FISAT",
              "dob": "02/04/1999",
              "course": "B-Tech Comp Science",
              "mobile": "+91 95266 7443",
              "email": "aa@gmail.com",
              "address": "Kochi",
              "__v": 0
            },
            {
              "_id": "666516bc741a512717d92b88",
              "firstname": "Rahul",
              "lastname": "D",
              "college": "FISAT",
              "dob": "02/01/1992",
              "course": "MCA",
              "mobile": "+91 95266 74440",
              "email": "aa@gmail.com",
              "address": "Test Address",
              "__v": 0
            }
          ]
    
)
    return (
        <div>
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
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
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