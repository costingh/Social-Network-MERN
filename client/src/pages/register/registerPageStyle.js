export const styles = {
    register: {
		height: '100vh',
		width: '100%',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
    },
    form: {
        width: '400px',
		minWidth: '250px',
		textAlign: 'center'
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
    avatar: {
        width: '150px',
        height: '150px',
        marginLeft: '50%',
        transform: 'translateX(-50%)'
    },
	textField: {
		width: '100%',
		marginTop: '40px',	
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
	},
	success: {
		width: '400px',
		minWidth: '250px',
		textAlign: 'center'
	},
	top: {
		display: 'block',
		textAlign: 'center',
		padding: '40px 10px',
		borderTopLeftRadius: '10px',
		borderTopRightRadius: '10px',
		background: '#8bc34a'
	},
	bottom: {
		textAlign: 'center',
		padding: '40px 40px',
		borderBottomLeftRadius: '10px',
		borderBottomRightRadius: '10px',
		background: '#EEE'
	},
	successText: {
		color: '#fff',
		fontSize: '23px',
		letterSpacing: '1.3px',
		marginTop: '15px',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	descriptionText: {
		lineHeight: '28px',
		fontSize: '17px',
		color: '#757575',
		width: '400px',
		minWidth: '100px',

	}
}
