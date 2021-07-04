export const styles = {
  "sidebar": {
    "flex": "3",
    "height": "calc(100vh - 50px)",
    "overflowY": "scroll",
    "position": "sticky",
    "top": "50px",
    background: '#1b2439',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '5px'
    },
    '*::-webkit-scrollbar-track': {
      "backgroundColor": "#273047"
    },
    '*::-webkit-scrollbar-thumb': {
      "backgroundColor": "#111"
    }
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
    "marginRight": "15px"
  },
  "sidebarButton": {
    "width": "150px",
    "border": "none",
    "padding": "10px",
    "borderRadius": "5px",
    "fontWeight": "500"
  },
  "sidebarHr": {
    "margin": "20px 0"
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

