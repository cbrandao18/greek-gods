import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import Mutations from "../../graphql/mutations";
const { REMOVE_GOD_DOMAIN, ADD_GOD_DOMAIN } = Mutations;

class DomainDetail extends React.Component {
    constructor(props) {
        super(props);

        // since we know we'll be receiving the god's name through props
        // we can set it in our state
        this.state = {
            editing: false,
            godId: this.props.id,
            domains: this.props.domains || "",
            newDomain: ""
        };

        this.handleEdit = this.handleEdit.bind(this);
    }

    // this is the function that will trigger "editing" mode
    handleEdit(e) {
        e.preventDefault();
        this.setState({ editing: true });
    }

    fieldUpdate(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        let domainItems = this.props.domains.map(domain => {
            return (
                <Mutation
                    key={domain} 
                    mutation={REMOVE_GOD_DOMAIN}                    
                > 
                    {(removeGodDomain, data) => {
                        return (<div>
                            <a 
                                onClick={e => {
                                    e.preventDefault();
                                    removeGodDomain(
                                    {
                                        variables: { godId: this.props.id, domain: domain}
                                    }
                            )}}
                                style={{ fontSize: "14px", cursor: "pointer", display: "inline" }}
                            >
                                <IconContext.Provider value={{ className: "custom-icon" }}>
                                    <FaTrash />
                                </IconContext.Provider>
                            </a>
                            <li>{domain}</li>
                        </div>)
                    }} 
                </Mutation>
            
        )})
        if (this.state.editing) {
            return (
                <Mutation mutation={ADD_GOD_DOMAIN}>
                    {(addGodDomain, data) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    addGodDomain({
                                        variables: { godId: this.props.id, domain: this.state.newDomain }
                                    }).then(() => this.setState({ editing: false, newDomain: "" }));
                                }}
                            >
                                <input
                                    value={this.state.newDomain}
                                    onChange={this.fieldUpdate("newDomain")}
                                />
                                <button type="submit">Add Domain</button>
                            </form>
                        </div>
                    )}
                </Mutation>
            );
        } else {
            return (
                <div>
                    <div
                        onClick={this.handleEdit}
                        style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
                    >
                        <IconContext.Provider value={{ className: "custom-icon" }}>
                            <FaPencilAlt />
                        </IconContext.Provider>
                    </div>
                    <ul>
                        {domainItems}
                    </ul>
                    
                </div>
            );
        }
    }
}

export default DomainDetail;