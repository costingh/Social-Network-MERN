export const styles = {
  "sidebar": {
    "flex": "3",
    "height": "calc(100vh - 80px)",
    "overflowY": "scroll",
    "position": "sticky",
    "top": "50px",
    background: '#1b2439',
  },
  "sidebarWrapper": {
    background: '#1b2439',
    color: '#d0d3db',
    "padding": "20px",
  },
  "sidebarList": {
    "padding": "0",
    "margin": "0",
    "listStyle": "none"
  },
  "sidebarListItem": {
    "display": "flex",
    "alignItems": "center",
    "marginBottom": "20px"
  },
  "sidebarIcon": {
    "marginRight": "15px",
    color: '#ff458a'
  },
  "sidebarButton": {
    "width": "150px",
    "border": "none",
    "padding": "15px 25px",
    "borderRadius": "10px",
    "fontWeight": "400",
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '.4px',
    background: '#ff458a',
    cursor: 'pointer',
    border: '1px solid #ff458a',
    transition: 'all .3s ease',
    '&:hover': {
      background: 'transparent',
      color: '#d0d3db',
    }
  },
  "sidebarHr": {
    "margin": "20px 0",
    backgroundColor: '#ff458a',
    height: '1px'
  },
  "sidebarFriendList": {
    "padding": "0",
    "margin": "0",
    "listStyle": "none"
  },
  "sidebarFriend": {
    "display": "flex",
    "alignItems": "center",
    "marginBottom": "15px"
  },
  "sidebarFriendImg": {
    "width": "32px",
    "height": "32px",
    "borderRadius": "50%",
    "objectFit": "cover",
    "marginRight": "10px"
  }
}

