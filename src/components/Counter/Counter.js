import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../AC/index';

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleInc}>INC</button>
            </div>
        )
    }

    handleInc = () => {
        this.props.increment();
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter);