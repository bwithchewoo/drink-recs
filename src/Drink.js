import React, {Component} from 'react';

class Drink extends Component{
    constructor(props){
        super(props);
    }
    state= {
        count: 0
    }

    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render(){
    return (
        <li className="drinks" key={this.props.id} style={{width:'150px',height:'150px'}}>
            <div style={{wordWrap: "normal", textAlign: "center"}}>{this.props.name}</div>
            <img className="img" src={this.props.src}/>
            <button onClick={this.incrementMe} style={{marginTop: "5px"}}>❤️Likes: {this.state.count}</button>
        </li>
    )}
}

export default Drink;