import { withStyles } from '@material-ui/styles';
import InfoAccordion from '../infoAccordion/InfoAccordion';
import AddIcon from '@material-ui/icons/Add';

const styles = ({
    inner: {
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: '0px 75px',
        paddingTop: '70px',
    },
    profileInfos: {
        position: 'relative',
        width: '100%',
        padding: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1b2439',
        borderRadius: '10px',
        marginBottom: '40px'
    },
    image: {
        width: '105px',
        height: '105px',
        position: 'relative',
        objectFit: 'cover',
        marginRight: '15px',
        borderRadius: '50%',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    name: {
        color: '#cdd1d9',
        fontWeight: '500',
        fontSize: '18px',
        letterSpacing: '.6px',
        marginTop: '20px',
        textAlign: 'center'
    },
    description: {
        color: '#dfe2e9',
        fontSize: '18px',
        fontWeight: 400,
        marginTop: '20px',
        textAlign: 'center',
    },
    addContact: {
        position: 'relative',
        width: '100%',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        background: '#1b2439',
        color: '#a4a7b3',
        fontSize: '17px',
        borderRadius: '10px',
        marginTop: '40px',
        cursor: 'pointer',
        transition: 'all .3s ease',
        '&:hover': {
            color: '#cdd1d9',
        }
    }
});

function ContactInfo({classes}) {
    return (
        <div className={classes.inner}>
            <div className={classes.profileInfos}>
                <div>
                    <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="name" className={classes.image}></img>
                    <h1 className={classes.name}>John Doe</h1>
                    <p className={classes.description}>This is my description</p>
                </div>
            </div>
            <div className={classes.personalInfos}>
                <InfoAccordion />
            </div>
            <div className={classes.addContact}>
                <AddIcon style={{marginRight: '15px'}}/> 
                <p>Add Contact</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(ContactInfo);