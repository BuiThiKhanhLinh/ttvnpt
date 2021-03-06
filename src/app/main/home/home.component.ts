import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex = 1;

  constructor(
    private language: LanguageService
  ) { }

  get lang() {
    return this.language.lang;
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
      var i;
      var slides: any = document.getElementsByClassName("mySlides");
      var dots: any = document.getElementsByClassName("dot");
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
  }
}
