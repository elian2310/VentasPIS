import React from "react";

export default class FetchCUFD extends React.Component{
    state = {
        loading: true
    };

    async componentDidMount(){
        const url = "siatURL"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({controlCode: data.results[4]})
        console.log(data);

    }

    render(){
        <div>
            {this.controlCode}
        </div>
    }
}