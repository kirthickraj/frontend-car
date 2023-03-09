import React,{Component} from 'react';
import './Main.css'

import axios from 'axios'

class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            brand:'',
            price:'',
            rating:''
        };
    }y
    
    handleIdChange=(event)=>{
        this.setState({id:event.target.value})
    };
    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handleBrandChange=(event)=>{
        this.setState({brand:event.target.value})
    };
    handlePriceChange=(event)=>{
      this.setState({price:event.target.value})
  };
  handleRatingChange=(event)=>{
    this.setState({rating:event.target.value})
};

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name,
            brand: this.state.brand,
            price: this.state.price,
            rating: this.state.rating
        };
        
        axios.post('http://127.0.0.1:8080/post', data)
    }

    render(){
    return ( 
        <><center>
        <div className='container'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>CAR</h1>
            
            <div className='row'>
                <label>Id : </label><br></br>
                <input type="number" id='id' placeholder='  Enter your Id...' value={this.state.id}
                    onChange={this.handleIdChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.id}</p> */}

            <div className='row'>
                <label>name : </label><br></br>
                <input type="text" id='name' placeholder='  name...' value={this.state.name}
                    onChange={this.handleNameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.username}</p> */}

           
            {/* <p  style={{color:"red"}}>{formErrors.email}</p> */}

            <div className='row'>
                <label>brand: </label><br></br>
                <input type="text" id='brand' placeholder='  Enter brand...' value={this.state.brand}
                    onChange={this.handleBrandChange}/>
            </div>
            <div className='row'>
                <label>Price: </label><br></br>
                <input type="text" id='price' placeholder='  Enter price' value={this.state.price}
                    onChange={this.handlePriceChange}/>
            </div>
            <div className='row'>
                <label>Rating:</label><br></br>
                <input type="text" id='rating' placeholder='  Enter rating' value={this.state.rating}
                    onChange={this.handleRatingChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}
            <br></br>

            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div></center>
        </>
     );
    }
}

export default Main