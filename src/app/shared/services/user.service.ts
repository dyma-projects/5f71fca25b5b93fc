import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
    public users: BehaviorSubject<Array<string>>;

    constructor() {
        this.users = new BehaviorSubject<Array<string>>(new Array<string>());
    }

    addUser(user: string): void {
        this.users.value.push(user);
    }
}