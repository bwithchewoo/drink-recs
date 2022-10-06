import React, { Component } from "react";
import "./styles.css";
 
class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2 style={{fontSize:"40px"}}>Welcome thirsty strangers!</h2>
        <p style={{fontSize:"20px"}}>Care for a drink?</p>
 
        <p style={{fontSize:"20px"}}>Discover your next favorite brew here.</p>
      </div>
    );
  }
}
 
export default Home;