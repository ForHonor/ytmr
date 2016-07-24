import React,{Component} from 'react';
//import ReactDOM from 'react-dom';

export default class ResolutionsForm extends Component {

	addResolution(event){
		event.preventDefault();	//stop the browser from reloading the webpage each time
		var text = this.refs.resolution.value.trim();
		Resolutions.insert(
			{text:text,
			complete:false,
			createdAt:new Date()			
			}
		);
		this.refs.resolution.value = "";
	}
	render() {
		//returns should be converted to a single xml node
		return (
			<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
				<input type="text" ref="resolution" placeholder="Finish React Meteor Series" />
			</form>
		)
	}
	
}
