
import {AiOutlineClose} from "react-icons/ai"

const PopupTwo=({openPopUpTwo,setOpenopUpTwo,children})=>{



  return((openPopUpTwo)?(<div className="popup">
    <div className="popupinner">
      <button className="closebutton" onClick={()=>setOpenopUpTwo(!openPopUpTwo)}><AiOutlineClose /></button>
      {children}
    </div>
  </div>): "");
    
  
}
export default PopupTwo;