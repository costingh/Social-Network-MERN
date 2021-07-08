
export const styles = ({
    messageContainerLeft: {
        margin: '15px 5px',
        width: '100%',
        position: 'relative',
        textAlign: 'left',
        '& img': {
          borderRadius: '50%',
          height: '35px',
          width: '35px',
          objectFit: 'cover',
          position: 'absolute',
          bottom: '0px',
          left: '-25px',
        },
        '& div': {
          width: 'auto',
          display: 'inline-block',
          padding: '20px',
          position: 'relative',
          borderRadius: '20px',
          fontSize: '13px',
          lineHeight: '19px',
          letterSpacing: '.7px',
          maxWidth: '75%',
          fontWeight: '300',
          marginTop: '40px',
          borderBottomLeftRadius: '0px',
          background: '#1b2439',
          color: '#a4a7b3',
          marginLeft: '20px'
        }
    },
    messageContainerRight: {
      margin: '15px 5px',
      width: '100%',
      position: 'relative',
      textAlign: 'right',
      '& img': {
        borderRadius: '50%',
        height: '35px',
        width: '35px',
        objectFit: 'cover',
        position: 'absolute',
        bottom: '0px',
        right: '-25px'
      },
      '& div': {
        width: 'auto',
        display: 'inline-block',
        padding: '20px',
        position: 'relative',
        borderRadius: '20px',
        fontSize: '13px',
        lineHeight: '19px',
        letterSpacing: '.7px',
        maxWidth: '75%',
        fontWeight: '300',
        marginTop: '40px',
        borderBottomRightRadius: '0px',
        background: '#ff458a',
        color: '#1b2439',
        textShadow: '.2px .2px#1b2439',
        marginRight: '20px'
      }
  },
    date: {
        display: 'block',
        margin: '10px 30px',
        color: '#a4a7b3',
        fontSize: '12px',
        letterSpacing: '.5px'
    }
});