import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import logo from '../images/platziconf-logo.svg';
import api from '../api';
import './styles/BadgeNew.css';
import User from '../images/user.png';

class BadgeNew extends React.Component{

    state = { form: {
        loading: false,
        error: null,
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

  handleSubmit = async e => {
      e.preventDefault()
      this.setState({loading:true, error:null})
      try{
        await api.badges.create(this.state.form)
        this.setState({ loading: false })
        this.props.history.push('/badges')
      } catch(error) {
        this.setState({ loading: false, error: null })
      }
  }

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return(
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName || 'First Name'}
                            lastName={this.state.form.lastName || 'Last Name'}
                            jobTitle={this.state.form.jobTitle || 'Job Title'}
                            github={this.state.form.github || 'Github'}
                            email={this.state.form.email || 'Email'}
                            avatarUrl={User}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} onSubmit={this.handleSubmit}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew;