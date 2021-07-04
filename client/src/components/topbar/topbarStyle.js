/* #ff458a' */

export const styles = {
  'topbarContainer': {
    'height': '80px',
    'width': '100%',
    'backgroundColor': '#1b2439',
    'display': 'flex',
    'alignItems': 'center',
    'position': 'sticky',
    'top': '0',
    'zIndex': '999'
  },
  'topbarLeft': {
    'flex': '3'
  },
  'logo': {
    'fontSize': '24px',
    'marginLeft': '20px',
    'fontWeight': 'bold',
    'color': '#d0d3db',
    'cursor': 'pointer'
  },
  'topbarCenter': {
    'flex': '5'
  },
  'searchbar': {
    'width': '100%',
    'height': '45px',
    'backgroundColor': '#273047',
    'borderRadius': '30px',
    'display': 'flex',
    'alignItems': 'center'
  },
  'searchIcon': {
    'fontSize': '27px !important',
    'marginLeft': '10px'
  },
  'searchInput': {
    'border': 'none',
    'width': '100%',
    'height': '95%',
    'borderRadius': '30px',
    'background': '#273047',
    color: '#d0d3db !important',
    '&:focus': {
        outline: 'none'
    }
  },
  'topbarRight': {
    'flex': '4',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-around',
    'color': '#d0d3db'
  },
  'topbarLink': {
    'marginRight': '15px',
    'fontSize': '14px',
    'cursor': 'pointer'
  },
  'topbarIcons': {
    'display': 'flex'
  },
  'topbarIconItem': {
    'marginRight': '15px',
    'cursor': 'pointer',
    'position': 'relative'
  },
  'topbarIconBadge': {
    'width': '15px',
    'height': '15px',
    'backgroundColor': 'red',
    'borderRadius': '50%',
    'color': 'white',
    'position': 'absolute',
    'top': '-5px',
    'right': '-5px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'fontSize': '12px'
  },
  userInfo: {
      display: 'flex',
      alignItems: 'center'
  },
  'topbarImg': {
    'width': '32px',
    'height': '32px',
    'borderRadius': '50%',
    'objectFit': 'cover',
    'cursor': 'pointer',
    marginRight: '10px'
  },
  username: {
      fontSize: '17px',
      marginRight: '5px',
      color: '#d0d3db'
  },
  downArrow: {
      fontSize: '28px',
      color: '#d0d3db',
      cursor: 'pointer'
  },
  '@media screen and (max-width: 768px)': {
    '__expression__': 'screen and (max-width: 768px)',
    'topbarLink': {
      'display': 'none'
    }
  }
}




