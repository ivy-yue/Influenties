import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/StartScreen_elImage_64621.png';
import img_elImage2 from './images/StartScreen_elImage2_640005.png';
import Component1 from './Component1';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'black',
     };
    const style_elImage = {
      height: 'auto',
     };
    const style_elImage2 = {
      height: 'auto',
     };
    const style_elUsername = {
      fontSize: 19.0,
      color: '#feffff',
      textAlign: 'center',
     };
    const style_elInformation = {
      fontSize: 13.3,
      color: '#535b5e',
      textAlign: 'center',
      textShadow: '#919191 0.0px 0.7px 0.0px',
     };
    
    const style_elLine = {
      borderTop: '1px solid rgba(10, 58, 119, 0.2574)',
     };
    const style_elLine_outer = {
      display: 'none',
      boxShadow: '0.0px 0.0px 0px #feffff',
     };
    
    const style_elButton = {
      display: 'block',
      fontSize: 7.1,
      color: '#fff',
      textAlign: 'center',
      backgroundColor: '#1db953',
     };
    const style_elTextBlock = {
      fontSize: 11.4,
      color: '#feffff',
      textAlign: 'center',
     };
    const style_elLongTextCopy = {
      color: '#4a494a',
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elImage">
            <img style={style_elImage} src={img_elImage} alt=""  />
          </div>
          
          <div className="elImage2">
            <img style={style_elImage2} src={img_elImage2} alt=""  />
          </div>
          
          <div className="elUsername">
            <div className="systemFontBold" style={style_elUsername}>
              <div>{this.props.locStrings.start_username_363039}</div>
            </div>
          </div>
          
          <div className="elInformation">
            <div className="systemFontRegular" style={style_elInformation}>
              <div>{this.props.locStrings.start_information_17977}</div>
            </div>
          </div>
          
          <div className="elLine" style={style_elLine_outer}>
            <div style={style_elLine} />
          </div>
          
          <div className="elButton">
            <Button className="systemFontBold" style={style_elButton}>
              {this.props.locStrings.start_button_828426}
            </Button>
          </div>
          
          <div className="elTextBlock">
            <div className="systemFontBold" style={style_elTextBlock}>
              <div>{this.props.locStrings.start_textblock_823185}</div>
            </div>
          </div>
          
          <div className="elLongTextCopy">
            <div className="baseFont" style={style_elLongTextCopy}>
              <div>{this.props.locStrings.start_longtextcopy_455765}</div>
            </div>
          </div>
          
          <div className="hasNestedComps elComponent">
            <div>
              <Component1 ref={(el)=> this._elComponent = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
