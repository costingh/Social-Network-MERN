export const styles ={
    "rightbar": {
      "flex": "3.5",
      "color": "#d0d3db",
      "backgroundColor": "#1b2439"
    },
    "rightbarWrapper": {
      "padding": "20px 20px 0 0"
    },
    "birthdayContainer": {
      "display": "flex",
      "alignItems": "center"
    },
    "birthdayImg": {    
      "width": "40px",
      "height": "40px",
      "marginRight": "10px"
    },
    "birthdayText": {
      "fontWeight": "300",
      "fontSize": "15px"
    },
    "rightbarAd": {
      "width": "100%",
      "borderRadius": "10px",
      "margin": "30px 0"
    },
    "rightbarTitle": {
      "fontSize": "18px",
      textTransform: 'uppercase',
      "fontWeight": "500",
      "margin": "30px 0px"
    },
    "rightbarFriendList": {
      "padding": "0",
      "margin": "0",
      "listStyle": "none"
    },
    "rightbarFriend": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "15px"
    },
    "rightbarProfileImgContainer": {
      "marginRight": "10px",
      "position": "relative"
    },
    "rightbarProfileImg": {
      "width": "40px",
      "height": "40px",
      "borderRadius": "50%",
      "objectFit": "cover"
    },
    "rightbarOnline": {
      "width": "12px",
      "height": "12px",
      "borderRadius": "50%",
      "backgroundColor": "limegreen",
      "position": "absolute",
      "top": "-2px",
      "right": "0",
      "border": "2px solid #fff"
    },
    "rightbarUsername": {
      "fontWeight": "500"
    },
    "rightbarInfo": {
      "marginBottom": "30px"
    },
    "rightbarInfoItem": {
      "marginBottom": "10px"
    },
    "rightbarInfoKey": {
      "fontWeight": "500",
      "marginRight": "19px",
      letterSpacing: '.5px',
      "color": "#d0d1ca"
    },
    "rightbarInfoValue": {
      "fontWeight": "300",
    },
    "rightbarFollowings": {
      "display": "flex",
      "flexWrap": "wrap",
      "justifyContent": "space-between"
    },
    "rightbarFollowing": {
      "display": "flex",
      "flexDirection": "column",
      "marginBottom": "20px",
      "cursor": "pointer"
    },
    "rightbarFollowingImg": {
      "width": "100px",
      "height": "100px",
      "objectFit": "cover",
      "borderRadius": "10px",
      transition: 'all .3s ease',
      '&:hover': {
          transform: 'scale(0.9)'
      }
    },
    "rightbarFollowButton": {
      "marginTop": "30px",
      "marginBottom": "10px",
      "border": "1px solid #ff458a",
      "backgroundColor": "#ff458a",
      transition: 'all .3s ease',
      textTransform: 'uppercase',
      "color": "#111",
      "borderRadius": "10px",
      "padding": "8px 25px",
      "display": "flex",
      "alignItems": "center",
      "fontSize": "16px",
      "fontWeight": "400",
      "cursor": "pointer",
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
          background: 'transparent',
          color: '#d0d1ca'
      }
    },
    linkToFriendProfile: {
        textDecoration: "none", 
        color: '#d0d1ca', 
        textAlign: 'center',
    },
    rightbarFollowingName: {
        marginTop: '10px',
        textTransform: 'capitalize',
        letterSpacing: '.4px',
        fontSize: '16px',
        transition: 'all .3s ease',
        '&:hover': {
            color: '#ff458a'
        }
    }
  } 