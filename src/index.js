import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Location from './pages/Logement'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Error from './layout/Error'
import About from './components/About'

import "./style.css";

ReactDOM.render(
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
				<Route>
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)