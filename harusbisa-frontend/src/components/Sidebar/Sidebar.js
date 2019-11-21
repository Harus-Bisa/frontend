import React from "react";
import {connect} from "react-redux";
import { Button, Collapse } from "@material-ui/core";
import { changeSelectedLecture, changeContentType } from "../../redux/actions";
import Popup from "../Popup/Popup";

function mapStateToProps(state){
    return{
        lectures: state.course.lectures
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeSelectedLecture: lecture => dispatch(changeSelectedLecture(lecture)),
        changeContentType: contentType => dispatch(changeContentType(contentType))
    };
}
function Sidebar(props){
    var [open, setOpen] = React.useState(false)
    const openLecture = (lecture) =>{
        props.changeSelectedLecture(lecture);
        props.changeContentType("LECTURE")
    }
    const makeButtons = () =>{
        var buttons = []
        for (var i=0; i<props.lectures.length; i++){
            var lecture = props.lectures[i]
            buttons.push(
                <Button fullWidth key={i} props={lecture} onClick={openLecture.bind(this,lecture)}>Sesi {lecture.date}</Button>
            )
        }
        return buttons;
    }
    return(
        <div>
            <Button fullWidth onClick={()=>setOpen(open => open = !open)}>Sesi</Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div style={{height:'50vh', overflowY:'auto', display:'flex', flexDirection:'column',justifyContent:'space-between'}}>
                    <div>
                        {makeButtons()}
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Popup 
                            purpose={"+ Tambah Sesi"} 
                            trigger={{component:Button, className:"prof-button"}} 
                            // content={props.role === "student" ? StudentCourseForm : CourseForm}
                        />
                    </div>
                </div>
            </Collapse>
            <Button fullWidth onClick={() => props.changeContentType("GRADEBOOK")}>Daftar Nilai</Button>
            <Button fullWidth onClick={() => props.changeContentType("SETTINGS")}>Setting Kelas</Button>
        </div>
        
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)