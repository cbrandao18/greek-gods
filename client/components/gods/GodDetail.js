import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import NameDetail from '../detail/Name_Detail'
import TypeDetail from '../detail/Type_Detail'
import DescriptionDetail from '../detail/Description_Detail'
import DomainDetail from '../detail/Domain_Detail'
import AbodeDetail from '../detail/Abode_Detail'
const { FETCH_GOD } = Queries;

const GodDetail = props => {
    return (
        // there we are getting the `id` for our query from React Router
        <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
            {({ loading, error, data }) => {
                console.log(data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;

                return <div className="detail" >
                  <NameDetail id={data.god.id} name={data.god.name} />
                  <TypeDetail id={data.god.id} type={data.god.type} />
                  <DescriptionDetail id={data.god.id} description={data.god.description} />
                  <DomainDetail id={data.god.id} domains={data.god.domains}/>
                  <AbodeDetail id={data.god.id} abode={data.god.abode}/>
                </div>;
            }}
        </Query>
    );
}


export default GodDetail;