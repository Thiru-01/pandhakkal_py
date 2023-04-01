import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import { inject as service } from '@ember/service';

export default class IndexHomeController extends Controller {

  @service router;
  constructor() {
    super(...arguments);
    this.initiateSlider();

  }

  @tracked
  imageLink = ["https://img.freepik.com/free-photo/beautiful-shot-sea-with-mountain-distance-clear-sky_181624-2248.jpg", "https://wallpaperaccess.com/full/1204217.jpg" , "https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg" , "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"]

  @tracked
  currentIndex = 0

  initiateSlider()
  {
    let slider = document.getElementById("image-slider");
    if(slider !== null)
    {
        slider[this.currentIndex].style.transform = "translateX(0)";
    }
    setInterval(this.nextSlider, 10000);
  }

  @action
  nextSlider()
  {
    let slider = document.getElementsByClassName("image-slider");
    if(slider !== null && slider.length > 0)
    {
      slider[this.currentIndex].classList.remove("image-slider-active");
      this.currentIndex = (this.currentIndex + 1) % slider.length;
      slider[this.currentIndex].classList.add("image-slider-active");
    }
  }

  @action
  previousSlider()
  {
    let slider = document.getElementsByClassName("image-slider");
    if(slider !== null)
    {
      slider[this.currentIndex].classList.remove("image-slider-active");
      this.currentIndex = (this.currentIndex - 1 + slider.length) % slider.length;
      slider[this.currentIndex].classList.add("image-slider-active");
    }
  }

  @action
  specificSlider(index)
  {
    let slider = document.getElementsByClassName("image-slider");
    if(slider !== null)
    {
      slider[this.currentIndex].classList.remove("image-slider-active");
      slider[index].classList.add("image-slider-active");
      this.currentIndex = index;
    }
  }
}
