import React from 'react';


class Model {
	constructor () {
		this.userInfo = {
			name: null,
			surname : null,
			email : null,
            phone : null,
            password: null	
		}

		this.notify = null;
		this.properties = data.properties;
		this.activeProperty = data.properties[0]
		this.isRouting = false;
		this.targetPlace = null;

	}
	setUserInfo (info) {
		this.userInfo = info;
		//Utils.store('lyft', this.userInfo);
		this.notify();
	}

	subscribe (render) {
		this.notify = render;
	}

	setActiveProperty (property) {
		this.activeProperty = property;
		this.notify();
	}

	setTarget (targetPlace) {
		this.targetPlace  = targetPlace;
		this.notify();
	}

	setIsRouting ( ) {
		this.isRouting = true;
		this.notify();
	}
	
}
/*ReactDOM.render(<store />, document.getElementById("container"));*/

export default LyftModel;