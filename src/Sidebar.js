import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import EmojiFlagsOutlinedIcon from "@material-ui/icons/EmojiFlagsOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';

function Sidebar() {

  const [{user}, dispatch] = useStateValue();
    return (
      <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow
          Icon={LocalHospitalOutlinedIcon}
          title="COVID 19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsOutlinedIcon} title="Pages" />
        <SidebarRow Icon={PeopleAltOutlinedIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Friends" />
      </div>
    );
}

export default Sidebar
