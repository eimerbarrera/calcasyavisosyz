import React from 'react';



class Contenedorhome extends React.Component {

	render() {

		return(

            <div class="row">
    			<div class="col-sm-6" style={{backgroundColor:'#FFCD48'}}>Resize the browser window to see the effect.</div>
    			<div class="col-sm-6" style={{backgroundColor:'#ccc'}}>The columns will automatically stack on top of each other when the screen is less than 576px wide.</div>
			</div>

		)

	}

}

export default Contenedorhome;