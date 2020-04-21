import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "start_username_363039";
    item['en'] = "5 Seconds of Summer";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_information_17977";
    item['en'] = "1,647,421 FOLLOWERS";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_823185";
    item['en'] = "SHOW INTEREST";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_longtextcopy_455765";
    item['en'] = "#MicroInfluencer";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textblock_814709";
    item['en'] = "#OnlineShopping";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textblock2_849195";
    item['en'] = "206,821 Views";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textblock3_787705";
    item['en'] = "Tiktok";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textblock_688263";
    item['en'] = "#OnlineShopping";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textblock2_222992";
    item['en'] = "206,821 Views";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textblock3_756412";
    item['en'] = "Tiktok";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
