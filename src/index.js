import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Location from './pages/Logement'
import Error from './pages/Error'
import About from './pages/About'

import Header from './layout/Header'
import Footer from './layout/Footer'


import "./style.css";

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/location">
					<Location />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	</React.StrictMode>,
)