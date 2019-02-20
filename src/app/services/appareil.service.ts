export class AppareilService {
    appareils = [
        {
            name: 'machine à laver',
            status: 'éteint'
        },
        {
            name: 'machine à bois',
            status: 'allumé'
        },
        {
            name: 'Télévision',
            status: 'éteint'
        },
    ];

    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }
}
