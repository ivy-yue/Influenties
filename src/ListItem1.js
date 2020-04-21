import React, { Component } from 'react';
import './App.css';
import img_elContent_img from './images/ListItem1_elContent_img_632600.png';
import img_elGroup3 from './images/ListItem1_elGroup3.png';

export default class ListItem1 extends Component {

  // Properties used by this component:
  // platform, view_size, title, content_img

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
    const value_content_img = this.props.content_img;
    
    const style_elContent_img = {
      height: 'auto',
     };
    
    const style_elRectangle2 = {
      background: 'rgba(255, 255, 255, 1.000)',
      borderRadius: '13.0px',
     };
    
    const style_elRectangle3 = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    
    const value_textBlock = this.props.title;
    
    const style_elTextBlock = {
      fontSize: 10.4,
      color: '#ff4e00',
      textAlign: 'left',
     };
    
    const value_textBlock2 = this.props.view_size;
    
    const style_elTextBlock2 = {
      fontSize: 8.5,
      color: '#ff4e00',
      textAlign: 'left',
     };
    
    const value_textBlock3 = this.props.platform;
    
    const style_elTextBlock3 = {
      fontSize: 8.5,
      color: '#ff4e00',
      textAlign: 'left',
     };
    
    const style_elGroup3 = {
      backgroundImage: 'url('+img_elGroup3+')',
      backgroundSize: '100% 100%',
     };
    
    return (
      <div className="ListItem1">
        <div className="foreground">
          <img className="elContent_img" style={style_elContent_img} src={(value_content_img || img_elContent_img)} alt=""  />
          <div className="elRectangle2" style={style_elRectangle2} />
          <div className="elRectangle3" style={style_elRectangle3} />
          <div className="systemFontRegular  elTextBlock" style={style_elTextBlock}>
            <div>{value_textBlock !== undefined ? value_textBlock : (<span className="propValueMissing">{this.props.locStrings.listitem1_textblock_688263}</span>)}</div>
          </div>
          <div className="systemFontRegular  elTextBlock2" style={style_elTextBlock2}>
            <div>{value_textBlock2 !== undefined ? value_textBlock2 : (<span className="propValueMissing">{this.props.locStrings.listitem1_textblock2_222992}</span>)}</div>
          </div>
          <div className="systemFontRegular  elTextBlock3" style={style_elTextBlock3}>
            <div>{value_textBlock3 !== undefined ? value_textBlock3 : (<span className="propValueMissing">{this.props.locStrings.listitem1_textblock3_756412}</span>)}</div>
          </div>
          <div className="elGroup3" style={style_elGroup3} />
        </div>
      </div>
    )
  }
  
}
