import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
