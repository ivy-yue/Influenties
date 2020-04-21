import DataSheetBase from './DataSheetBase.js';
import datasheet_listData1_row0_content_img from './images/datasheet_listData1_row0_content_img.png';
import datasheet_listData1_row1_content_img from './images/datasheet_listData1_row1_content_img.png';
import datasheet_listData1_row2_content_img from './images/datasheet_listData1_row2_content_img.png';
import datasheet_listData1_row3_content_img from './images/datasheet_listData1_row3_content_img.png';
import datasheet_listData1_row6_content_img from './images/datasheet_listData1_row6_content_img.png';
import datasheet_listData1_row8_content_img from './images/datasheet_listData1_row8_content_img.png';
import datasheet_listData1_row9_content_img from './images/datasheet_listData1_row9_content_img.png';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['view_size'] = "206,821 Views";
    item['platform'] = "Tiktok";
    item['title'] = "#OnlineShopping";
    item['content_img'] = datasheet_listData1_row0_content_img;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['view_size'] = "206,821 Views";
    item['platform'] = "Tiktok";
    item['title'] = "#Online";
    item['content_img'] = datasheet_listData1_row1_content_img;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['view_size'] = "206,821 Views";
    item['platform'] = "Tiktok";
    item['title'] = "#OnlineShopping";
    item['content_img'] = datasheet_listData1_row2_content_img;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['view_size'] = "201k views";
    item['platform'] = " Instagram";
    item['title'] = "#MakeUpRoutine";
    item['content_img'] = datasheet_listData1_row3_content_img;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['view_size'] = "100M Views";
    item['platform'] = "Youtube";
    item['title'] = "#OOTD";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "#StayHomeChallenge";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['platform'] = "Youtube";
    item['title'] = "#StayHomeChallenge";
    item['content_img'] = datasheet_listData1_row6_content_img;
    item['view_size'] = "2M Views";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "#StayHomeChallenge";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "#StayHomeChallenge";
    item['content_img'] = datasheet_listData1_row8_content_img;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "#StayHomeChallenge";
    item['content_img'] = datasheet_listData1_row9_content_img;
    item.key = key++;
  }

}
