import React, { Component } from 'react';
import './App.css';
import ListItem1 from './ListItem1';

export default class Component1 extends Component {

  // This component doesn't use any properties

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
    const dataSheet_listData1 = this.props.appActions.getDataSheet('listData1');
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData1').items);
    
    
    return (
      <div className="Component1 appBg">
        <div className="foreground">
          <div className="hasNestedComps elList">
            <div>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <ListItem1 dataSheetId={'listData1'} dataSheetRow={row} {...{ 'platform': row['platform'], 'view_size': row['view_size'], 'title': row['title'], 'content_img': row['content_img'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<div key={row.key}>
                    {itemComp}
                  </div>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  
}
