import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Loader from '../../loader/Loader.js';

class PreviewActivity extends Component {

	constructor (props) {

    	super (props);
	}

  	render () {

  		if (this.props.data && this.props.data.name) {
  			return this.props.data.name;
  		}

  		return (<Loader />);
  	}
}

export default PreviewActivity = withTracker(() => {

	const sub = Meteor.subscribe('activities');
	const dataIsReady = sub.ready();
	const data = Activities.findOne({ _id : Session.get("invite_activity") }, { reactive : true });

	return {
	    dataIsReady,
	    data,
	};

})(PreviewActivity);
