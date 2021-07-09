import { withStyles } from "@material-ui/styles";
import InfoAccordion from "../infoAccordion/InfoAccordion";
import { styles } from "./contactInfoStyle";

function ContactInfo({ classes, contact }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className={classes.inner}>
            <div className={classes.profileInfos}>
                <div>
                    <img
                        src={
                            contact 
                            && contact.profilePicture
                                ? PF + contact.profilePicture
                                : PF + "person/noAvatar.png"
                        }
                        alt="name"
                        className={classes.image}
                    ></img>
                    <h1 className={classes.name}>{contact && contact.username ? contact.username : 'John Doe'}</h1>
                    <p className={classes.description}>{contact && contact.desc ? contact.desc : 'This is my description'}</p>
                </div>
            </div>
            <div className={classes.personalInfos}>
                <InfoAccordion 
                    contact={contact}
                />
            </div>
        </div>
    );
}

export default withStyles(styles)(ContactInfo);
