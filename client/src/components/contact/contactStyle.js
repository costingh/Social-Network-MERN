export const styles = {
    contact: {
        width: '95%',
        height: '60px',
        background: '#1b2439',
        padding: '40px 10px',
        margin: '20px auto',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            background: '#ff458a',
            '& h1': {
                color: '#1b2439'
            },
            '& p': {
                color: '#202a41'
            },
            '& svg': {
                color: '#1b2439'
            }
        }
    },
    'activeContact': {
        width: '95%',
        height: '60px',
        background: '#ff458a',
        padding: '40px 10px',
        margin: '20px auto',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        '& h1': {
            color: '#1b2439' + ' !important'
        },
        '& p': {
            color: '#202a41' + ' !important'
        },
        '& svg': {
            color: '#1b2439' + ' !important'
        },
    },
    left: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            objectFit: 'cover',
            marginRight: '10px'
        },
        '& h1': {
            fontSize: '15px',
            fontWeight: '600',
            letterSpacing: '.5px',
            color: '#cdd1d9'
        },
        '& p': {
            fontSize: '13px',
            marginTop: '5px',
            fontWeight: '300',
            letterSpacing: '.4px',
            color: '#a4a7b3'
        }
    },
    right: {
        textAlign: 'right',
        '& p': {
            fontSize: '13px',
            marginTop: '2px',
            fontWeight: '300',
            letterSpacing: '.4px',
            color: '#394054'
        }
    },
    moreIcon: {
        color: '#cdd1d9'
    }
  }