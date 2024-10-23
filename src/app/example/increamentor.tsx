// App.js
"use client";
import React, { useRef } from 'react';
import './style.scss';
import {  } from "react"

function IncrementerContainer() {
	const n = useRef<HTMLInputElement>(null)

	function OnButtonClick(e: any) {
		if (n.current === null) {
			console.log("n.current is null")
		}
		if  (n.current.value == null) {
			n.current.value = ""
			console.log("value was null")
		}

		console.log("Value changed")
		n.current.value = n.current.value + "1"
	}
  return <div className="container">
      <h1>Hello, Sass in React!</h1>
			<input type='text' ref={n} defaultValue="1 will be appended when you click the button" />
 			<button className="button" onClick={(e) => OnButtonClick(e)}>Click Me</button>
    </div>
}

export default IncrementerContainer;

