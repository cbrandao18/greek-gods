import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { NEW_EMBLEM } = Mutations;

class EmblemCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: ""
        }
    }

    handleSubmit(e, newEmblem) {
        e.preventDefault();
        let name = this.state.name
        newEmblem({
            variables: {
                name: this.state.name,
            }
        })
            .then(data => {
                console.log(data);
                this.setState({
                    message: `New emblem "${name}" created successfully`,
                    name: ""
                });
            })
    }

    updateCache(cache, { data: { newEmblem } }) {
        let emblems;
        try {
            emblems = cache.readQuery({ query: FETCH_EMBLEMS });
        } catch (err) {
            return;
        }

        if (emblems) {
            let emblemsArray = emblems.emblems;

            cache.writeQuery({
                query: FETCH_EMBLEMS,
                data: { emblems: emblemsArray.concat(newEmblem) }
            });
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        return (
            <Mutation
                mutation={NEW_EMBLEM}
                update={(cache, data) => this.updateCache(cache, data)}
            >
                {(newEmblem, { data }) => {
                    return <div>
                        <form onSubmit={e => this.handleSubmit(e, newEmblem)}>
                            <input
                                onChange={this.update("name")}
                                value={this.state.name}
                                placeholder="Name"
                            />
                            <button type="submit">Create Emblem</button>
                        </form>
                        <p>{this.state.message}</p>
                    </div>
                }}
            </Mutation>
        );
    }
}

export default EmblemCreate;