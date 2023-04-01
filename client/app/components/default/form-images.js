import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
export default class DefaultFormImagesComponent extends Component {
  @tracked
  imageList = [];
  @tracked
  isEmpty = true;
  @action
  fileChange(event)
  {
    let imageAction = document.getElementById("myImages");
    if(imageAction != null)
    {
      this.imageList = Array.from(event.target.files);
      if(this.imageList.length > 0)
      {
        this.args.sendValue(this.imageList);
        this.isEmpty=false;
      }
    }
  }

  @action
  removeItem(index)
  {
    let oldArray = [...this.imageList];
    oldArray.splice(index, 1);
    this.imageList = oldArray;
    if (this.imageList.length === 0)
    {
      this.isEmpty = true;
    }
    this.args.sendValue(this.imageList);
  }
}
