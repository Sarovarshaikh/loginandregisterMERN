import React from "react"
import "./homepage.css"
import Form from "./form"


const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            <div className="row">
                <div className="col-lg-4">
                    <h1>Create List</h1>
                <Form/>
                </div>
                <div className="col-lg-4">
                <h1>In Progressing</h1>
                <Form/>
                </div>
                <div className="col-lg-4">
                <h1>Done </h1>
                <Form/> 
                </div>
            </div>
            
            {/* <h1>Hello Homepage</h1> */}
         
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
    )
}

export default Homepage