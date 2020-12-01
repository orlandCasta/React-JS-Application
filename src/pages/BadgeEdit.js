import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import logo from '../images/platziconf-logo.svg';
import api from '../api';
import './styles/BadgeNew.css';

class BadgeEdit extends React.Component{

    state = { form: {
        loading: true,
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

    componentDidMount(){
        this.fetchData()
    }

    fetchData= async e => {
        this.setState({loading: true, error: null})
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, form: data})
        }catch (error){
            this.setState({loading: false, error: error})
        }
    }

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
        await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
                            avatarUrl="https://res.cloudinary.com/cozyplace/image/upload/v1605913060/me_bkx8za.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} onSubmit={this.handleSubmit}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeEdit;