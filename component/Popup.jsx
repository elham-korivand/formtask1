
import {AiOutlineClose} from "react-icons/ai"

const PopUp=({open,setOpen,children})=>{



  return((open)?(<div className="popup">
    <div className="popupinner">
      <button className="closebtn" onClick={()=>setOpen(!open)}><AiOutlineClose /></button>
      {children}
    </div>
  </div>): "");
    
  
}
export default PopUp