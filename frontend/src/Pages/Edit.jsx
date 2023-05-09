import React, { Component } from 'react';
import Head from '../Components/Head';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Json: {
                Head:{
                    title:"Heading",
                    Url:null,
                    Urlmode:false,
                }
            },
            select:-2
        };
    }

    

  render() {
    return (
        <div className=' h-screen flex flex-row' >
        <div className='h-full w-full'>
            
            <Head id={-1} data={this.state.Json} setData ={(temp)=>{this.setState({Json:temp})}} setSelect ={(temp)=>{this.setState({select:temp})}} save={()=>{}} className='' edit={this.state.select===-1}/>
        <div className='z-[1] fixed  w-screen h-screen' onClick={()=>{this.setState({select :'-2'})}}></div>
            <hr></hr>
        </div>
    </div>
    )
  }
}


