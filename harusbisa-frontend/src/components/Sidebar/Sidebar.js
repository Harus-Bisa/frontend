import React from "react";
import {connect} from "react-redux";
import { Button, Collapse } from "@material-ui/core";
import { changeSelectedLecture, changeContentType } from "../../redux/actions";
import Popup from "../Popup/Popup";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LectureForm from "../Form/LectureForm";

function mapStateToProps(state){
    return{
        lectures: state.course.lectures,
        role: state.role,
        live: state.live
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeSelectedLecture: (lecture, lectureId, role) => dispatch(changeSelectedLecture(lecture, lectureId, role)),
        changeContentType: contentType => dispatch(changeContentType(contentType))
    };
}
export function convertDate(time){
    let date = new Date(time)
    var day = date.getDate()
    var month = date.getMonth()+ 1
    var year = date.getFullYear()

    return day + "/" + month + "/" + year
}
function Sidebar(props){
    var [open, setOpen] = React.useState(false)
    const openLecture = (lecture) =>{
        props.changeSelectedLecture(lecture, lecture.lectureId, props.role);
        props.changeContentType("LECTURE")
    }
    const makeButtons = () =>{
        var buttons = []
        for (var i=0; i<props.lectures.length; i++){
            var lecture = props.lectures[i]
            buttons.push(
                <Button fullWidth key={i} props={lecture} onClick={openLecture.bind(this,lecture)} disabled={props.live}>Sesi {convertDate(lecture.date)}</Button>
            )
        }
        if(buttons.length === 0){
            buttons.push(<p key={0}>Buatlah sesi pertama anda!</p>)
        }
        return buttons;
    }
    return(
        <div style={{borderRight:"2px solid #f4f4f4", height:'100vh'}}>
            <Button fullWidth onClick={()=>setOpen(open => open = !open)}>Sesi <ExpandMoreIcon/></Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div style={{height:'50vh', overflowY:'auto', display:'flex', flexDirection:'column',justifyContent:'space-between', padding:'1rem 0rem'}}>
                    <div>
                        {makeButtons()}
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Popup 
                            purpose={"+ Tambah Sesi"} 
                            trigger={{component:Button, className:"prof-button"}} 
                            content={LectureForm}
                        />
                    </div>
                </div>
            </Collapse>
            <div style={{borderTop:"2px solid #f4f4f4"}}>
                <Button fullWidth onClick={() => props.changeContentType("GRADEBOOK")}>Daftar Nilai</Button>
                <Button fullWidth onClick={() => props.changeContentType("SETTINGS")}>Setting Kelas</Button>
            </div>
            
        </div>
        
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)