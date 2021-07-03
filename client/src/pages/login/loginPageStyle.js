/* #ff458a' */

export const styles = {
    login: {
		height: '100vh',
		width: '100%',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#f1f1f1',
		color: '#444'
    },
	text: {
		fontSize: '14px',
		marginTop: '30px',
		marginBottom: '6vh',
		color: '#444',
		fontWeight: '500',
		textTransform: 'uppercase',
		letterSpacing: '.7px',
		'& a': {
			textDecoration: 'none',
			fontSize: '14px',
			color: '#ff458a',
			fontWeight: '500',
			textTransform: 'uppercase',
			letterSpacing: '.7px',
		}
	},
    form: {
        width: '400px',
		minWidth: '250px',
		textAlign: 'center'
	},
	textField: {
		width: '100%',
		marginTop: '30px',	
	},
    button: {
		width: '100%',
		backgroundColor: '#1b2021',
		marginTop: '5vh',
		height: '50px',
		lineHeight: '50px',
		fontSize: '17px',
		textTransform: 'uppercase',
		letterSpacing: '.6px',
		color: '#dfe2e9',
		cursor: 'pointer',
		textAlign: 'center',    
		appearance: 'none',
		outline: 'none',
		border: 'none',
		transition: 'all .3s ease-in-out',
		'&:hover': {
			backgroundColor: '#ff458a'
		}
	},
	errorMessage: {
		textAlign: 'left',
		fontSize: '12px',
		color: 'red',	
		marginTop: '5px'
	}
}




