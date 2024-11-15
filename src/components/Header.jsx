import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import "./Header.css"
function Header(){
    return(
        <>
        <div className="header">
            <div className="header_lef">
            <MenuIcon/>
            <img  className="header__logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
            </div>
            <div className="header_input">
            <input type="text" placeholder='Search' />
            <SearchIcon className='header_inputButton'/>
            </div>
            <div className="header_icons">
            <VideoCallIcon className='header_icon'/>
            <AppsIcon className='header_icon'/>
            <NotificationsIcon className='header_icon'/>
            <Avatar 
            src='https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/662b9d36e383c902d2fc7874_thumbnail_%252880%2529.webp'
            />
            </div>
            
            
        </div>
        </>
    )
}
export default Header