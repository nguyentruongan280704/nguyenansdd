import React, { Component } from 'react';

class Form extends Component {
    state = { 
     } 
    render() {
        let {handleSubmit}=this.props; 
        return (
            <>
             <form className='fami1' onSubmit={handleSubmit}>
                    <input className='text' placeholder='Search Users' type="text" />
                    <button className='Search'>Search</button>
                    <button className='Clear'>Clear</button>
            </form>
            </>
        );
    }
}
 
export default Form;