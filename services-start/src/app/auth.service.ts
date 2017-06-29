import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class AuthService {

    constructor(private logService: LogService){

    }

    authenticate(userName:string, password:string){
        // Just a fake implementation
        const authenticated = userName === 'test' && password === 'test' ? true : false;
        this.logService.log('LogService - Authenticated: ' + authenticated);
        return authenticated;
    }

    logout(){
        // Just return 'false' to logout;
        this.logService.log('LogService - Logout');
        return false;
    }
}