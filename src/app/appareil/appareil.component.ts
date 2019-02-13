import {Component, Injectable, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})



@Injectable()
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  private appareils = {
    email: 'stevefgdfdfgdfgdfgn@hotmail.fr'
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  saveAppareilsToServer() {
    this.httpClient
        .post('http://localhost:3000/user/appareil', this.appareils)
        .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
  }
}
