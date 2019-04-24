import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedData {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/feed?order=SnakeName')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                resolve(this.data);
            });
        });
    } 
    

    
    getFeeds()
    {
        return this.data;
    }

    getAllFeedsByName(name: Array<Object>)
    {
        var returning: Array<Object> = [];
        for(var i = 0; i < name.length; i++)
        {
            returning[i] = this.getFeed(name[i].toString());
        }
        return returning;
    }

    getFeed(snakeName: string)
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

    getFilteredFeed(queryString)
    {
        return this.load().then(Foods => {
            let theFilteredFoods: any = [];

            for (let food of Foods)
            {
                if(food.Food.toLowerCase().indexOf(queryString.toLowerCase())> -1)
                {
                    theFilteredFoods.push(food);
                }
            }
            return theFilteredFoods;
        });
    }

    constructor(public http: Http){
        this.load();
    }

    send(snakeName: string, food: string, frequency: string)
    {
        var body = {
            "F_Id" : null,
            "SnakeName" : snakeName,
            "Food" : food,
            "Frequency" : frequency,
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