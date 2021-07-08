export const styles = {
    "chatBox": {
      "flex": "4",
      position: 'relative',
      margin: 0,
      padding: 0
    },
    "chatBoxWrapper": {
      "height": "100%",
      width: '100%',
      position: 'relative',
      background: '#202a41',
    },
    "chatBoxTop": {
      "height": "85%",
      "overflowY": "scroll",
      overflowX:'hidden',
      width: '100%',
      paddingRight: '50px',
      paddingLeft: '50px',
      position: 'relative',
    },
    "chatBoxBottom": {
      "marginTop": "5px",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between",
      height: '15%'
    },
    "@media screen and (max-width: 768px)": {
      "__expression__": "screen and (max-width: 768px)",
      "chatBox": {
        "flex": "10"
      },
    },
    typeMsg: {
        position: 'relative',
        width: '95%',
        height: '60px',
        margin: '0 auto',
        marginBottom: '30px',
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
    form: {
        height: '100%',
        width: '100%'
    },
    typeMsg: {
        position: 'relative',
        width: '95%',
        height: '60px',
        margin: '0 auto',
        marginBottom: '30px',
    },
    input: {
        height: '100%',
        width: '100%',
        background: '#1b2439',
        appearance: 'none !important',
        outline: 'none',
        border: 'none',
        padding: '0px 30px',
        color: '#cdd1d9',
    },
    send: {
        position: 'absolute',
        color: '#ff458a',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)'
    }
  }
