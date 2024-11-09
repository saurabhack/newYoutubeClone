import "./Sidebar.css"
import SideBarRow from "./SideBarRow"
import { ExpandMoreOutlined, History, Home, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater } from "@mui/icons-material"
import { Whatshot } from "@mui/icons-material"
import { Subscriptions } from "@mui/icons-material"
function SideBar(){
    const rows=[
        {
            title:"Home",
            icons:Home,
        },
        {
            title:"Tranding",
            icons:Whatshot,
        },
        {
            title:"Subscription",
            icons:Subscriptions,
        },
    ]
    return(
        <>
        <div className="sidebar">
            {/* {
                rows.map((items,id)=>{

                    return  id<=2 ? (<SideBarRow key={id} title={items.title} Icon={items.icons} />) :( <><hr/> <SideBarRow key={id} title={items.title} Icon={items.icons} /></> )

                })
            } */}
            <SideBarRow selected title={"Home"} Icon={Home} />
            <SideBarRow  title={"Tranding"} Icon={Whatshot} />
            <SideBarRow  title={"Subscription"} Icon={Subscriptions} />
            <hr />
            <SideBarRow  title={"Library"} Icon={VideoLibrary} />
            <SideBarRow  title={"History"} Icon={History} />
            <SideBarRow  title={"Your Videos"} Icon={OndemandVideo} />
            <SideBarRow  title={"Watch Later"} Icon={WatchLater} />
            <SideBarRow  title={"Liked Videos"} Icon={ThumbUpAltOutlined} />
            <SideBarRow  title={"Show More"} Icon={ExpandMoreOutlined} />
            <hr></hr>
        </div>
        </>
    )
}
export default SideBar