import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className={classes.root}>
      <Avatar 
        alt="Profile Picture" 
        src={
            user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            } 
        />
    </div>
  );
}