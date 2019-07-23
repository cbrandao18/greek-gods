import React from "react";
import { Link } from 'react-router-dom'

class Navigation extends React.Component{
    render(){
        return (
            <div>
                <Link to='/'>Index</Link>
                <Link to='/new'>Create</Link>
            </div>
        )
    }
}

export default Navigation;