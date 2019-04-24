import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MedsData {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/meds')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 
    

    
    getAllMeds()
    {
        return this.data;
    }

    getMeds(snakeName: string)
    {
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].SnakeName == snakeName)
            {
                return this.data[i];
            }
        }
        return "Not found!";
    }
    // this.medsData2.getAllMedsOnDate(this.testingDate);
    getAllMedsOnDate(date: string)
    {
        var count = 0;
        var allData: Array<Object> = [];
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].NextRx == date)
            {
                allData[count] = this.data[i];
                count++;
            }
        }
        return allData;
    }

    constructor(public http: Http){
        this.load();
    }

    send(snakeName: string, rxDate: string, rx: string, nextRx: string)
    {
        var body = {
            "M_ID" : null,
            "SnakeName" : snakeName,
            "RxDate" : rxDate,
            "Rx" : rx,
            "NextRx" : nextRx
        };
        console.log(body);
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.post('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/meds', body)
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 
}