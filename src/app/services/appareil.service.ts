import {Subject} from 'rxjs';

export class AppareilService {

    // Role: Il doit emmètre la liste des appareil de type 'any[]'
    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'machine à bois',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Télévision',
            status: 'éteint'
        },
    ];

    emitAppareilSubject() {
        // demande à appareilSubject d'émettre une COPIE '.slice()' de 'this.appareils'
        this.appareilSubject.next(this.appareils.slice());
    }


    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

    switchOnAll() {
        // on modifie tous les status en 'allumé'
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        // on souscrit au différent changement, ce qui permet de mettre à jour la liste d'objet
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}
