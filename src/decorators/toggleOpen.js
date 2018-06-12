import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false
    };

    toggleOpen = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen} />
    }
}