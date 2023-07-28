import React from "react";
import { Person, Robot } from "react-bootstrap-icons";
import "./chat.css"

export default function ChatMessage(props) {
  return (
    <div className= {`d-flex ${props.user && 'justify-content-end'}`} >
      {props.user ? (
        <span className="message-left ">
          <span className="messgae-text">{props.message}</span>
          <Person className="message-icon" />
        </span>
      ) : (
        <span className="message-right">
          <Robot  className="message-icon"/>
          <span className="messgae-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}
