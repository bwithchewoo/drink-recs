import React, { Component } from "react";
import "./styles.css";
 
class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2 style={{fontSize:"40px"}}>Welcome thirsty strangers!</h2>
        <p style={{fontSize:"20px"}}>Care for a drink?</p>
        <p style={{fontSize:"20px"}}>Discover your next favorite brew here or add your favorite to share.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfAFHKFkTQwXgIXUnOuKL6zPUMl32XPJphpCCJApLUkjjO-HY75Dmr1y-L6uJ3Qzx16Y&usqp=CAU"/>
      </div>
    );
  }
}
 
export default Home;