export const styles = {
    "messenger": {
      "height": "calc(100vh - 80px)",
      "display": "flex",
      background: '#202a41',
      overflow: 'hidden'
    },
    "chatMenu": {
      "flex": "3",
      paddingRight: '30px'
    },
    "chatMenuInput": {
      "width": "90%",
      "padding": "10px 0",
      "border": "none",
      "borderBottom": "1px solid gray"
    },
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
      "flex": "4"
    },
    "chatMenuWrapper": {
      "padding": "10px",
      "height": "100%",
      background: '#202a41'
    },
    "chatOnlineWrapper": {
      "padding": "20px",
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
    typeMsg: {
        position: 'relative',
        width: '95%',
        height: '60px',
        margin: '0 auto',
        marginBottom: '30px',
    },
    form: {
        height: '100%',
        width: '100%'
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


  /* const styles = ({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        borderLeft: '1px solid #1b2439',
        borderRight: '1px solid #1b2439'
    },
    topbar: {
        width: '115%',
        position: 'absolute',
        background: '#1b2439',
        height: '90px',
        padding: '15px 30px',
        marginTop: '70px',
        marginLeft: '-7.5%',
        display: 'flex',
        justifYContent: 'start',
        alignItems: 'center'
    },
    profilePicture: {
        position: 'relative',
        borderRadius: '50%',
        width: '55px',
        height: '55px',
        objectFit: 'cover',
        marginRight: '15px'
    },
    text: {
        '& h1': {
            color: '#dfe2e9',
            fontSize: '19px',
        },
        '& p': {
            color: '#a4a7b3',
            fontSize: '15px',
            marginTop: '8px'
        }
    },
    msgContainer: {
        position: 'absolute',
        width: '100%',
        height: 'calc(100% - 260px)',
        overflowY: 'scroll',
        marginTop: '160px', 
        padding: '20px 35px'
    },
    typeMsg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '90%',
        height: '60px',
        marginBottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    form: {
        height: '100%',
        width: '100%'
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
}); */