import React from 'react';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import './styles/BadgesPage.css'
import logo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';
import api from '../api';

class BadgesPage extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
      };
/*
    constructor(){
        console.log('1. Contructor()')
        //this.state = {
            //data:[],
        //}
    }
*/
componentDidMount(){
        console.log('3. componentDidMount()')

        this.fetchData()// Ejecutamos la funcion que realizara la peticion a la API en el componentDidMount, cuando todo este montado

        /*this.timeoutId =setTimeout(() =>{
            this.setState({
                loadin: true,
                error: null,
                data:undefined
            })
        },3000)*/
        this.intervalId = setInterval(this.fetchData, 5000)
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null }); // inicializamos los estados de la peticion a una api, la carga comienza, errores no hay pór el momento

        try{
            const data = await api.badges.list(); // inicializamos la data en como vacia
            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    componentWillUnmount(){
        clearImmediate(this.intervalId)
    }

/*
    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()')
        console.log({prevProps: prevProps, prevState: prevState})
        console.log({props: this.props, state: this.state})
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount()')
        clearTimeout(this.timeoutId)
    }
*/
    render(){

        if(this.state.loading === true && this.state.data === undefined){
            return <PageLoading/>;
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>;
        }

        console.log('2/4. Render()')
        return(
        <div>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default BadgesPage;