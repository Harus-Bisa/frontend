import React from "react";
import { Button } from "@material-ui/core";
import {connect} from "react-redux";
import { studentAddCourse } from "../../redux/actions";

export function StudentCourseForm(props){
    var [joinCode, setJoinCode] = React.useState("")
    const submit = async (event) =>{
        event.preventDefault();
        await props.studentAddCourse(joinCode)
        props.closePopup()   
    }
    return(
        <div className="container-fluid student-course-form">
            <div className="row">
                <div className="content col-md-6" style={{background:"linear-gradient(41.38deg, #9C27D5 5.56%, #6311AB 112.78%)", display:'flex'}}>
                    <h1 style={{color:"white", margin:'auto'}}>Tambah Kelas</h1>
                </div>
                <div className="content col-md-6">
                    <p style={{marginBottom:'2rem'}}>Temukan kelas Anda untuk semester ini melalui kode bergabung yang dibagikan oleh dosen Anda.</p>
                    <form onSubmit={submit} style={{display:'flex', flexDirection:'column'}}>
                        <label>Kode bergabung</label>
                        <input type='text' id="joinCode" value={joinCode} onChange={(event) => {setJoinCode(joinCode = event.target.value)}}/>
                        <Button className="student-button" style={{marginTop:'1rem'}}type="submit">Bergabung</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default connect(null, {studentAddCourse})(StudentCourseForm);