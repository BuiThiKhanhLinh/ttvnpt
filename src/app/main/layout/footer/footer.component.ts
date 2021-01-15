import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit(): void {
  }
  get lang() {
    return this.language.lang;
  }

  changeLanguage(id) {
    this.language.changeLanguage(id);
  }

}
