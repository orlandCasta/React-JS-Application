import React from 'react';
import "./styles/Badge.css";
import User from '../images/user.png';

class Badge extends React.Component {
    render(){

        const {
        firstName,
        lastName,
        jobTitle,
        github,
        avatarUrl
        }=this.props;

        return(
        <div className="Badge">
            <div className="Badge__header">
                <img src="" alt=""/>
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={User} alt="imagen personal"></img>
                <h1>{firstName}<br/>{lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <p>{jobTitle}</p>
                <p>@{github}</p>
            </div>
        </div>
        )
    }
}

export default Badge;