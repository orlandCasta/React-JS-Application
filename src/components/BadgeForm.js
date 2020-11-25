import React from 'react';

class BadgeForm extends React.Component{
//------------------------------------------------------------------------------------------
//                             Metodos para manejo del formulario
//------------------------------------------------------------------------------------------

    handleClick = e => {
        console.log("Button was cliked")
    };

//------------------------------------------------------------------------------------------
    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.state);
    };
//------------------------------------------------------------------------------------------
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}></input>
                    </div>
                    <div className="form-group">
                        <label>jobTitle</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.obTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Github</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="github" value={this.props.formValues.github}></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;