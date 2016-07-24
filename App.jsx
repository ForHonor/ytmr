import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';import ResolutionsForm from './ResolutionsForm.jsx'
import ResolutionSingle from './ResolutionSingle.jsx'

Resolutions  = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {
	resolutions(){
		return Resolutions.find().fetch();
	}

	render() {
		let res = this.resolutions();
		if(res.length < 1){
			return <div>No Resolutions!</div>
		}
		//returns should be converted to a single xml node
		return (
		<div>
			<h1>My Resolutions</h1>
			<ResolutionsForm />
			<ul>
			{res.map(function(resIndiv){
			return <ResolutionSingle key={resIndiv._Id} resolution={resIndiv} />
			})}
			</ul>
		</div>
		)
	}
	
}
