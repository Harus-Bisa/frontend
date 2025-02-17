import React, { Component } from 'react';
import "../../css/Logo.css";
import full_black_white_padding_1 from './PNG/Harus_Bisa-01-Full-Blk-Wht-WPad_1.png'; //
import full_black_white_padding_2 from './PNG/Harus_Bisa-01-Full-Blk-Wht-WPad_2.png'; //
import full_white_black_padding_1 from './PNG/Harus_Bisa-02-Full-Wht-Blk-WPad_1.png'; //
import full_white_black_padding_2 from './PNG/Harus_Bisa-02-Full-Wht-Blk-WPad_2.png'; //
import full_black_trans_padding_1 from './PNG/Harus_Bisa-03-Full-Blk-Trans-WPad_1.png';//
import full_black_trans_padding_2 from './PNG/Harus_Bisa-03-Full-Blk-Trans-WPad_2.png';//
import full_white_trans_padding_1 from './PNG/Harus_Bisa-04-Full-Wht-Trans-WPad_1.png';//
import full_white_trans_padding_2 from './PNG/Harus_Bisa-04-Full-Wht-Trans-WPad_2.png';//

import full_black_white_nopadding_1 from './PNG/Harus_Bisa-05-Full-Blk-Wht-NoPad_1.png';//
import full_black_white_nopadding_2 from './PNG/Harus_Bisa-05-Full-Blk-Wht-NoPad_2.png';//
import full_white_black_nopadding_1 from './PNG/Harus_Bisa-06-Full-Wht-Blk-NoPad_1.png';//
import full_white_black_nopadding_2 from './PNG/Harus_Bisa-06-Full-Wht-Blk-NoPad_2.png';//
import full_black_trans_nopadding_1 from './PNG/Harus_Bisa-07-Full-Blk-Trans-NoPad_1.png';//
import full_black_trans_nopadding_2 from './PNG/Harus_Bisa-07-Full-Blk-Trans-NoPad_2.png';//
import full_white_trans_nopadding_1 from './PNG/Harus_Bisa-08-Full-Wht-Trans-NoPad_1.png';//
import full_white_trans_nopadding_2 from './PNG/Harus_Bisa-08-Full-Wht-Trans-NoPad_2.png';//

import logo_black_white_padding from './PNG/Harus_Bisa-09-Logo-Blk-Wht-WPad.png';
import logo_white_black_padding from './PNG/Harus_Bisa-10-Logo-Wht-Blk-WPad.png';
import logo_black_trans_padding from './PNG/Harus_Bisa-11-Logo-Blk-Trans-WPad.png';
import logo_white_trans_padding from './PNG/Harus_Bisa-12-Logo-Wht-Trans-WPad.png';
import logo_black_white_nopadding from './PNG/Harus_Bisa-13-Logo-Blk-Wht-NoPad.png';
import logo_white_black_nopadding from './PNG/Harus_Bisa-14-Logo-Wht-Blk-NoPad.png';
import logo_black_trans_nopadding from './PNG/Harus_Bisa-15-Logo-Blk-Trans-NoPad.png';
import logo_white_trans_nopadding from './PNG/Harus_Bisa-16-Logo-Wht-Trans-NoPad.png';
//Image format: size-color-background-padding

class Logo extends Component{
	constructor(props){
		super(props); 
		this.state = {
			hover: false,
		}

		this.handleHover = this.handleHover.bind(this);
	}

	handleHover(){
		this.setState(prevState => {
			return{
				hover: !prevState.hover,
			}
		});
	}

	render(){
		if (this.props.size === 'full'){
			if (this.props.color === 'black'){
				if (this.props.background === 'white'){
					if (this.props.padding){
						return(
						
							<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}>
								<img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_black_white_padding_1}/>
								<img alt={"logo"} src={full_black_white_padding_2}/>
							</div>
						)
					}
					else{
						return(<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}><img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_black_white_nopadding_1}/><img alt={"logo"} src={full_black_white_nopadding_2}/></div>)
					}
				}
				else if (this.props.background === 'trans'){
					if (this.props.padding){
						return(<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}><img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_black_trans_padding_1}/><img alt={"logo"} src={full_black_trans_padding_2}/></div>)
					}
					else{
						return(
							<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}>
								<img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_black_trans_nopadding_1}/>
								<img alt={"logo"} src={full_black_trans_nopadding_2}/>
							</div>)
					}
				}
				else{
					console.log('invalid. check your props')
					return null;
				}
			}
			else if (this.props.color === 'white'){
				if (this.props.background === 'black'){
					if (this.props.padding){
						return( <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}><img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_white_black_padding_1}/><img alt={"logo"} src={full_white_black_padding_2}/></div>)
					}
					else{
						return(<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}><img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_white_black_nopadding_1}/><img alt={"logo"} src={full_white_black_nopadding_2}/></div>)
					}

				}
				else if (this.props.background === 'trans'){
					if (this.props.padding){
						return(<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}><img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_white_trans_padding_1}/><img alt={"logo"} src={full_white_trans_padding_2}/></div>)
					}
					else{
						return(<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={'full ' + this.props.className} style={this.props.style}><img alt={"logo"} className={this.state.hover ? 'on-hover' : 'hvr-bob'} src={full_white_trans_nopadding_1}/><img alt={"logo"} src={full_white_trans_nopadding_2}/></div>)
					}
				}
				else{
					console.log('invalid. check your props')
				}
			}
			else{
				console.log('invalid. check your props')
				return null;
			}

		}
		else if (this.props.size === 'logo'){
			if (this.props.color === 'black'){
				if (this.props.background === 'white'){
					if (this.props.padding){
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_black_white_padding}/>)
					}
					else{
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_black_white_nopadding}/>)
					}
				}
				else if (this.props.background === 'trans'){
					if (this.props.padding){
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_black_trans_padding}/>)
					}
					else{
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_black_trans_nopadding}/>)
					}
				}
				else{
					console.log('invalid. check your props')
					return null;
				}
			}
			else if (this.props.color === 'white'){
				if (this.props.background === 'black'){
					if (this.props.padding){
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_white_black_padding}/>)
					}
					else{
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_white_black_nopadding}/>)
					}

				}
				else if (this.props.background === 'trans'){
					if (this.props.padding){
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_white_trans_padding}/>)
					}
					else{
						return(<img alt={"logo"} className={'hvr-bob ' + this.props.className} style={this.props.style} src={logo_white_trans_nopadding}/>)
					}
				}
				else{
					console.log('invalid. check your props')
				}
			}
			else{
				console.log('invalid. check your props')
				return null;
			}

		}
		else{
			console.log('invalid. check your props')
			return null;
		}
	}
}

Logo.defaultProps={
	size:"full",
	background:'trans',
	color:'black',
	link:true,
	padding:false,
	className:"",
	style:{height:'2rem'}
}
export default Logo
