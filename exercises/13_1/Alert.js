import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const { info, hideComponent } = props;
  setTimeout(() => hideComponent(), info.timeSeconds*1000);
  return (
    <div className='Alert'>
      <h1>{info.title}</h1>
      <p>{info.content}</p>
    </div>
  )
}

Alert.propTypes = {
  info: PropTypes.shape(
    {
      title: PropTypes.string,
      content: PropTypes.string,
      timeSeconds: PropTypes.number,
    }
  )
}

export default Alert;