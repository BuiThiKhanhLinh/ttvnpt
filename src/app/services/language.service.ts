import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
    lang = environment.languages[environment.language];
    
    changeLanguage(id) {
        this.lang = environment.languages[environment.language = id];
    }
}
