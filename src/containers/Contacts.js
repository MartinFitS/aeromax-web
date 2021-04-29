import React from "react";
import CardPresentation from "../components/CardPresentation";
import {connect} from "react-redux";

const Contacts = ({contacts}) => (
    <React.Fragment>
        {
            contacts.map(contact =>
                <CardPresentation
                    key={contact.id}
                    {...contact}
                />
            )
        }
        
    </React.Fragment>
);

const mapStateToProps = state =>{
    return{
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, null)(Contacts) ;