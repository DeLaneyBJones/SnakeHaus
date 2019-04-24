import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedSchedule {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/feed_schedule')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 
    

    
    getFeedSchedules()
    {
        return this.data;
    }

    getAllFeedSchedulesOnDate(date: string)
    {
        var count = 0;
        var allData: Array<Object> = [];
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].F_Date == date)
            {
                allData[count] = this.data[i].SnakeName;
                count++;
            }
        }
        return allData;
    }

    getFeedSchedule(name: string)
    {
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].SnakeName == name)
            {
                return this.data[i];
            }
        }
        return "Not found!";
    }

    constructor(public http: Http){
        this.load();
    }

    send(snakeName: string, date: string, food: string, comment: string)
    {
        var body = {
            "FS_Id" : null,
            "SnakeName" : snakeName,
            "F_Date" : date,
            "Food" : food,
            "Comment" : comment
        };
        console.log(body);
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.post('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/observation', body)
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 
}