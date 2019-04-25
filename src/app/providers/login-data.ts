import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Verification {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/test')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 

    login(username: string, password: string)
    {
        for (var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].Name == username)
            {

                if(this.data[i].Access == password)
                {
                    return true;
                }
            }
        }
        return false;
    }

    constructor(public http: Http){
        this.load();
    }
}