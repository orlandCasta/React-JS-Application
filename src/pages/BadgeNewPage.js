import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{

    state = { form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        github: '',
        email: '',
        avatarUrl: '',
    } };

    /*Metedo handleChange recibe el e evento, y sera un setState, le pasamos form y ahora tiene informacion del evento con nombre y valor
    */
   handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

    render(){
        return(
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            github={this.state.form.github}
                            email={this.state.form.email}
                            avatarUrl="https://res.cloudinary.com/cozyplace/image/upload/v1605913060/me_bkx8za.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew;