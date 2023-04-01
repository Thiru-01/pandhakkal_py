import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class IndexAdminFormController extends Controller {
  @tracked
  categories = ["Inauguration", "Birthday", "Baby shower", "Wedding"];

  @tracked
  type = ["Indoor", "Outdoor"];

  @tracked
  files = [];
  @action
  handleValidation(event)
  {
    let data = new FormData(event.target);
    console.info(data.get("file"));
    return false;
  }

  @action
  receiveFiles(files)
  {
    this.files = files;
  }
}
