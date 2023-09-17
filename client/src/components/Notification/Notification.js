import React, { useState } from "react";
import { MDBContainer, MDBNotification } from "mdbreact";
import './style.css'

const Notification = ({msgs, handlePickup}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseNotification = () => {
    setIsOpen(false);
  };

  return (
    <MDBContainer className="grey darken-3 p-3">
        {Array.isArray(msgs.data) && msgs.data.length > 0 ? (
  msgs.data.map((item) => (
    <>
    <div className="notification">

    <MDBNotification
          iconClassName="text-primary"
          show
          fade
          key={item._id}
          title="Thrift Store"
          message={item.content}
          text={item.timestamp}
          onClick={handleCloseNotification}

        />
        <button onClick={handlePickup} > Schedule Pickup</button>
        </div>
        </>

  ))
) : (
  <p>No messages available</p>
)}
    </MDBContainer>
  );
};

export default Notification;
