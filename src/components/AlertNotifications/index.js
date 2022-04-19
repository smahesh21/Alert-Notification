import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotification = () => {
  const renderSuccessNotificationCard = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="text-container">
        <h1 className="heading success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )
  const renderErrorNotificationCard = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="text-container">
        <h1 className="heading error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotificationCard = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="text-container">
        <h1 className="heading warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotificationCard = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="text-container">
        <h1 className="heading info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )
  return (
    <div className="alert-notification-container">
      <div className="alert-notification">
        <h1 className="notification-heading">Alert Notifications</h1>
        {renderSuccessNotificationCard()}
        {renderErrorNotificationCard()}
        {renderWarningNotificationCard()}
        {renderInfoNotificationCard()}
      </div>
    </div>
  )
}

export default AlertNotification
