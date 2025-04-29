import axios from "axios";
import React from 'react';

const post = (props) => {
  try {
    const response = await fetch('http://localhost:32636/sendEmail', {})
  } catch (err) {
    console.log(err);
    throw err;
  }
}
const get = (props) => {

}

export default RestApi;