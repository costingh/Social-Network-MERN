export const styles = {
    "messenger": {
      "height": "calc(100vh - 80px)",
      "display": "flex",
      background: '#202a41',
      overflow: 'hidden'
    },
    "chatMenu": {
      "flex": "2.5"
    },
    "chatMenuInput": {
      "width": "90%",
      "padding": "10px 0",
      "border": "none",
      "borderBottom": "1px solid gray"
    },
    "chatBox": {
      "flex": "5.5"
    },
    "chatBoxWrapper": {
      "padding": "10px",
      "height": "100%",
      background: '#202a41'
    },
    "chatBoxTop": {
      "height": "100%",
      "overflowY": "scroll",
      "paddingRight": "10px",
    },
    "chatBoxBottom": {
      "marginTop": "5px",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    },
    "chatMessageInput": {
      "width": "80%",
      "height": "90px",
      "padding": "10px"
    },
    "chatSubmitButton": {
      "width": "70px",
      "height": "40px",
      "border": "none",
      "borderRadius": "5px",
      "cursor": "pointer",
      "backgroundColor": "teal",
      "color": "white"
    },
    "chatOnline": {
      "flex": "3"
    },
    "chatMenuWrapper": {
      "padding": "10px",
      "height": "100%",
      background: '#202a41'
    },
    "chatOnlineWrapper": {
      "padding": "10px",
      "height": "100%",
      background: '#202a41',
    },
    conversationsPanel: {
      height: '90%',
      overflowY: 'scroll',
      padding: '40px 15px'
    },
    "noConversationText": {
      "position": "absolute",
      left: '50%',
      transform: 'translateX(-50%)',
      "top": "10%",
      "fontSize": "19px",
      "color": "rgb(224, 220, 220)",
      "cursor": "default",
    },
    "@media screen and (max-width: 768px)": {
      "__expression__": "screen and (max-width: 768px)",
      "chatMenu": {
        "flex": "1"
      },
      "chatMenuInput": {
        "display": "none"
      },
      "chatBox": {
        "flex": "10"
      },
      "chatOnline": {
        "flex": "1px"
      }
    },
    header: {
      fontSize: '19px',
      color: '#cdd1d9',
  },
  }