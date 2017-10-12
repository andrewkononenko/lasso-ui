import { combineReducers } from 'redux'
import enabled from './Enabled'
import emails from './Emails'

export default combineReducers({
    enabled,
    emails
})
