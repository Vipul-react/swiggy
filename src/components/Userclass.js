import React from "react";

class Userclass extends React.Component {
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name: "Vipul",
                location: "Pune"
            }
        }
        console.log(this.props.name+"consturcter child")
    }

    async componentDidMount(){
        console.log(this.props.name+"child component did Mount")
        const data = await fetch("https://api.github.com/users/akshaymarch7") 
        const json = await data.json();

        this.setState({
            userInfo:json
        })
        console.log(this.state.userInfo)
    }

    componentDidUpdate(){
        console.log("component updated")
    }
    
    componentWillUnmount(){
        console.log("component unmounted")
        
    }

    render() {
        // const { name, address} = this.props

        const {name, location} = this.state.userInfo
        console.log(name+"render")
        return (
            <div className='user-card'>
                <h2>Name: Vipul Kediya</h2>
                <h3>Address: {location}</h3>
                <h3>Contact: @vipul__09</h3>
            </div>
        )
    }
}

export default Userclass;