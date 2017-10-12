import React, { PropTypes, Component } from 'react'

export default class EmailsList extends Component {

    handleLogin() {
        const newEmail = document.getElementById('newEmail');
        this.props.add(newEmail)
        newEmail.value = null
    }


    render() {
        const { emails, add, remove } = this.props;
        const listItems = emails.map((email) =>
            <li>{email}<button onClick={() => remove(email)}>Remove</button></li>
        );
        const newItem =
            <li>
                <input id="newEmail" type="text" name="email" placeholder="Email"/>
                <button type="button" onClick={() => this.handleLogin() }>Login</button>
            </li>

        return (
            <div>
                <ul>
                    {listItems}
                    {newItem}
                </ul>
            </div>
        )
    }
}

EmailsList.propTypes = {
    emails: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}