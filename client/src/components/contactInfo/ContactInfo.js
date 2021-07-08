import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import InfoAccordion from "../infoAccordion/InfoAccordion";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { styles } from "./contactInfoStyle";

function ContactInfo({ classes, userId, currentChat }) {
    const [contact, setContact] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    useEffect(() => {
        if(currentChat) {
            const friendId = currentChat.members.find(
                (member) => member !== userId
            );
    
            const getContact = async () => {
                try {
                    const res = await axios.get(`/users?userId=${friendId}`);
                    setContact(res.data);
                    console.log(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getContact();
        }
    }, [userId, currentChat]);

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
            {/* <div className={classes.addContact}>
                <AddIcon style={{ marginRight: "15px" }} />
                <p>Add Contact</p>
            </div> */}
        </div>
    );
}

export default withStyles(styles)(ContactInfo);
