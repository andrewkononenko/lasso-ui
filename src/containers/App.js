import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as pageActions from '../actions/SubscribeAction'
import * as emailActions from '../actions/EmailActions'
import { bindActionCreators } from 'redux'
import SubscribeCheckbox from '../components/SubscribeCheckbox'
import EmailsList from '../components/EmailsList'

class App extends Component {
    saveState() {
        console.log('Subscribed ' + this.props.subscribed)
        console.log('Emails ' + this.props.emails)

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", 'http://localhost:8080/subscribers', false );
        xmlHttp.send( null );
        alert(xmlHttp.responseText)
    }

    render() {
        const { subscribed, emails } = this.props
        const { subscribe } = this.props.subscribeAction
        const { addEmail, remove } = this.props.emailActions

        return (
            <div>
                <SubscribeCheckbox
                    subscribed = {subscribed}
                    subscribe = {subscribe}
                />
                <EmailsList
                    emails = {emails}
                    add = {addEmail}
                    remove = {remove}
                />
                <button onClick={() => this.saveState()}>Save</button>
            </div>
        )
    }
}

function createRequest()
{
    var Request = new XMLHttpRequest();

    // if (window.XMLHttpRequest)
    // {
    //     //Gecko-совместимые браузеры, Safari, Konqueror
    //     Request = new XMLHttpRequest();
    // }
    // else if (window.ActiveXObject)
    // {
    //     //Internet explorer
    //     try
    //     {
    //         Request = new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     catch (CatchException)
    //     {
    //         Request = new ActiveXObject("Msxml2.XMLHTTP");
    //     }
    // }

    if (!Request)
    {
        alert("Невозможно создать XMLHttpRequest");
    }

    return Request;
}

function handler (request) {
    alert(request.responseText);
}

function sendRequest(r_method, r_path, r_args, r_handler)
{
    //Создаём запрос
    var Request = createRequest();

    //Проверяем существование запроса еще раз
    if (!Request)
    {
        return;
    }

    //Назначаем пользовательский обработчик
    Request.onreadystatechange = function()
    {
        //Если обмен данными завершен
        if (Request.readyState == 4)
        {
            //Передаем управление обработчику пользователя
            r_handler(Request);
        }
    }

    //Проверяем, если требуется сделать GET-запрос
    if (r_method.toLowerCase() == "get" && r_args.length > 0)
        r_path += "?" + r_args;

    //Инициализируем соединение
    Request.open(r_method, r_path, true);

    if (r_method.toLowerCase() == "post")
    {
        //Если это POST-запрос

        //Устанавливаем заголовок
        Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
        //Посылаем запрос
        Request.send(r_args);
    }
    else
    {
        //Если это GET-запрос

        //Посылаем нуль-запрос
        Request.send(null);
    }
}

function mapStateToProps (state) {
    return {
        subscribed: state.enabled.subscribed,
        emails: state.emails.emails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        subscribeAction: bindActionCreators(pageActions, dispatch),
        emailActions: bindActionCreators(emailActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)