export const styles = {
  "share": {
    "width": "100%",
    "borderRadius": "10px",
    "WebkitBoxShadow": "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    "boxShadow": "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    background: '#273047',
    color:'#d0d3db',
  },
  "shareWrapper": {
    "padding": "20px"
  },
  "shareTop": {
    "display": "flex",
    "alignItems": "center"
  },
  "shareProfileImg": {
    "width": "50px",
    "height": "50px",
    "borderRadius": "50%",
    "objectFit": "cover",
    "marginRight": "30px"
  },
  "shareInput": {
    "border": "none",
    "width": "100%",
    backgroundColor: '#273047',
    lineHeight:'20px',
    padding:'15px 10px',
    color:'#d0d3db',
    fontSize:'20px',
    '&:focus': {
        outline: 'none',
    }
  },
  "shareHr": {
    "margin": "20px"
  },
  "shareBottom": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "shareOptions": {
    "display": "flex",
    "marginLeft": "20px"
  },
  "shareOption": {
    "display": "flex",
    "alignItems": "center",
    "marginRight": "15px",
    "cursor": "pointer"
  },
  "shareIcon": {
    "fontSize": "18px",
    "marginRight": "3px"
  },
  "shareOptionText": {
    "fontSize": "14px",
    "fontWeight": "500"
  },
  "shareButton": {
    "border": "none",
    "padding": "10px 15px",
    "borderRadius": "8px",
    "fontWeight": "400",
    "marginRight": "20px",
    "cursor": "pointer",
    background: '#ff458a',
    border: '1px solid #ff458a',
    color: '#111',
    transition: 'all .3s ease',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      background: 'transparent',
      color: '#d0d3db'
    }
  },
  "shareImgContainer": {
    "padding": "0 20px 10px 20px",
    "position": "relative"
  },
  "shareImg": {
    "width": "100%",
    "objectFit": "cover"
  },
  "shareCancelImg": {
    "position": "absolute",
    "top": "0",
    "right": "20px",
    "cursor": "pointer",
    "opacity": "0.7"
  }
}