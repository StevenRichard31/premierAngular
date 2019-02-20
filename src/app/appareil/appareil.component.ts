import {Component, Injectable, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})



@Injectable()
export class AppareilComponent implements OnInit {

    // This property is bound using its original name and is automatically updated by Angular.
    @Input() appareilName: string;
    @Input() appareilStatus: string;
    @Input() indexOfAppareil: number;
    @Input() id: number;



    constructor(private httpClient: HttpClient, private appareilService: AppareilService) { }

        ngOnInit() {
        }

        getStatus() {
            return this.appareilStatus;
        }

        switchOn() {
            console.log(this.indexOfAppareil);
            this.appareilService.switchOnOne(this.indexOfAppareil);
        }

        switchOff() {
            console.log(this.indexOfAppareil);
            this.appareilService.switchOffOne(this.indexOfAppareil);
        }

        isOff() {
            const status = this.getStatus();
            if (status === 'éteint') {
                return true;
            } else {
                return false;
            }
        }

        getColor() {
           if (this.getStatus() === 'allumé') {
               return 'green';
           } else {
               return 'red';
           }
        }

        /*----------------TEST REQUETE API NODE ---------------------*/

        saveAppareilsToServer() {
            const email = {
                email: 'stevefgdfdfgdfgdfgn@hotmail.fr'
            };
            this.httpClient
            .post('http://192.168.1.41:3000/user/appareil', email)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé !');
                },
                (error) => {
                    console.log(error);
                }
            );
        }
}
