import React from 'react';
import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import logo from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            fistName="Orlando"
                            lastName="Castañeda"
                            jobTitle="Fullstack Developer"
                            github="@orlanCast"
                            avatarUrl="https://res.cloudinary.com/cozyplace/image/upload/v1605913060/me_bkx8za.jpg">
                            </Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew;