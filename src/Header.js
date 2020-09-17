import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';



function Header() {

  const [{user}, dispatch] = useStateValue();
    return (
      <div className="header">
        {/* Left Header */}
        <div className="header_left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
          <div className="header_input">
            <SearchIcon />
            <input placeholder='Search Facebook' type="text" />
          </div>
        </div>
        {/* Middle Header */}
        <div className="header_center">
          <div className="header_option header_option--active">
            <HomeOutlinedIcon fontSize="large" />
          </div>
          <div className="header_option">
            <FlagOutlinedIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header_option">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SupervisedUserCircleOutlinedIcon fontSize="large" />
          </div>
        </div>

        {/* Right Header */}
        <div className="header_right">
          <div className="header_info">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    );
}

export default Header
