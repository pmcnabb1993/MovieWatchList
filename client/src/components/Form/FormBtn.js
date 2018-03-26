import React from "react";
import "./Form.css";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
    {props.children}
  </button>
);
