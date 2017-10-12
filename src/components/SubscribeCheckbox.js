import React, { PropTypes, Component } from 'react'

export default class SubscribeCheckbox extends Component {
    render() {
        const { subscribed, subscribe } = this.props;
        return (
            <div>
                Are you subscribed? {subscribed.toString()}!
                <button onClick={subscribe}>Change</button>
            </div>
        )
    }
}

SubscribeCheckbox.propTypes = {
    subscribed: PropTypes.bool.isRequired,
    subscribe: PropTypes.func.isRequired
}