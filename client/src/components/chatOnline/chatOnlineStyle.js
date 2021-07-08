export const styles = {
  chatOnline: {
    padding: '20px 75px',
    height: 'calc(100vh - 60%)',
    position: 'relative',
    overflowY: 'scroll'
  },
  chatOnlineFriend: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      marginTop: "10px",
      color: "#dfe2e9",
      fontSize: "15px",
      fontWeight: 400,
      padding: '10px 15px',
      background: '#1b2439',
      borderRadius: '7px',
      transition: 'all .3s ease',
      '&:hover': {
          color: '#1b2439',
          background: '#ff458a'
      }
  },
  chatOnlineImgContainer: {
      position: "relative",
      marginRight: "10px",
  },
  chatOnlineImg: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "1px solid white",
  },
  chatOnlineBadge: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "limegreen",
      position: "absolute",
      top: "2px",
      right: "2px",
  },
  "@media screen and (max-width: 768px)": {
      __expression__: "screen and (max-width: 768px)",
      chatOnlineName: {
          display: "none",
      },
  },
};
