export const styles = {
    "post": {
        "width": "100%",
        "borderRadius": "10px",
        "WebkitBoxShadow": "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        "boxShadow": "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        "margin": "30px 0",
        background: '#273047'
    },
    "postWrapper": {
        "paddingTop": "20px",
        paddingBottom: '20px'
    },
    "postTop": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        padding: '0px 20px'
    },
    "postTopLeft": {
        "display": "flex",
        "alignItems": "center"
    },
    "postProfileImg": {
        "width": "32px",
        "height": "32px",
        "borderRadius": "50%",
        "objectFit": "cover"
    },
    "postUsername": {
        "fontSize": "15px",
        "fontWeight": "400",
        "margin": "0 10px",
        letterSpacing: '.6px'
    },
    "postDate": {
        "fontSize": "12px"
    },
    postText: {
        padding: '0px 20px'
    },
    "postCenter": {
        "margin": "20px 0"
    },
    "postImg": {
        "marginTop": "20px",
        "width": "100%",
        "maxHeight": "500px",
        "objectFit": "cover"
    },
    "postBottom": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        padding: '0px 20px'
    },
    "postBottomLeft": {
        "display": "flex",
        "alignItems": "center"
    },
    "likeIcon": {
        "width": "24px",
        "height": "24px",
        "marginRight": "7px",
        "cursor": "pointer",
        transition: 'all 1 ease-in-out',
        '&:hover': {
            transform: 'scale(1.4)'
        }
    },
    "postLikeCounter": {
        "fontSize": "15px"
    },
    "postCommentText": {
        "cursor": "pointer",
        "borderBottom": "1px dashed gray",
        "fontSize": "15px"
    }
}

