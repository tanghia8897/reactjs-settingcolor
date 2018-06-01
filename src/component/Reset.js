import React, { Component } from 'react';

class Reset extends Component {
    onSettingDefault = ()=>{
        this.props.onReset(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onSettingDefault} >reset</button>
        );
    }
}

export default Reset;