import { Component } from 'react';
import './styles/bottomcards.css';
import $ from 'jquery';

export class BottomCards extends Component{

	componentDidMount() {
		$("#f").hide();
		$("#s").hide();
		$("#t").hide();
		setTimeout(() => {
			$("#f").show();
			$("#f").addClass('animated fadeInLeft');
		}, 1500)
		
	}

	render(){
		return(
			<div className="container">
				<div className="card card-1" id="f">
					<img src="https://krourke.org/img/md_avatar_stormtrooper.svg" alt="Smiley face" id="aimg" />
				</div>
			</div>

		)
	}
}