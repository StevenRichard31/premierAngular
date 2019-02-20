import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

    authStatus: boolean;

    constructor( private authService: AuthService, private router: Router) {

    }

    ngOnInit() {
        this.authStatus = this.authService.isAuth;
    }

    onSignIn() {
        this.authService.signIn().then(
            () => {
                console.log('Connexion réussi !');
                // changement du status apres la connection
                this.authStatus =  this.authService.isAuth;
                // redirection vers un 'path'
                this.router.navigate(['appareils']);
            }
        );
    }

    onSignOut() {
        this.authService.signOut().then(
            () => {
                console.log('Déconnexion !');
                this.authStatus = this.authService.isAuth;
            }
        );
    }

}
