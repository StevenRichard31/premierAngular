import {User} from '../models/User.models';
import {Subject} from 'rxjs';


export class UserService {
    private users: User[] = [
        {
            firstName: 'Steven',
            lastName: 'Richard',
            email: 'blabla@gmail.fr',
            hobbies: [
                'coder',
                'jeux video'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}