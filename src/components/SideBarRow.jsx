import "./SideBarRow.css"
import { Home } from "@mui/icons-material"
function SideBarRow({title,Icon,selected}){
    return(
        <>
        <div className={`sideBarRow ${selected && 'selected'}`}>
            <Icon className={`sideBarRow_icon`}/>
            <h2 className="sideBarRow_title">{title}</h2>
            
        </div>
        </>
    )
}
export default SideBarRow