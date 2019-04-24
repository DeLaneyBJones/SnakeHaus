import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ReptileData } from '../providers/reptile-data';
import { FeedData } from '../providers/feed-data';
import { FeedSchedule } from '../providers/feed-schedule';
import { MedsData } from '../providers/meds-data';
import { ObservationData } from '../providers/observations-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-reptile-modal',
  templateUrl: './update-reptile-modal.page.html',
  styleUrls: ['./update-reptile-modal.page.scss'],
})
export class UpdateReptileModalPage implements OnInit {
  searchQuery: string = '';
  hasReptile: Boolean;
  feed: Array<Object> = [];
  feedSchedule: Array<Object> = [];
  meds: Array<Object> = [];
  reptiles: Array<Object> = [];
  observations: Array<Object> = [];

  constructor(public modalController: ModalController, public reptileData: ReptileData, public feedData: FeedData, public feedSched: FeedSchedule, public medsData: MedsData, public obsData: ObservationData, public router: Router) {
    reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;
    })
    this.hasReptile = false;
  }

  async dismiss(){
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

  getReptiles(event)
  {
    this.reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;
    })
    let queryString = event.target.value;
    if(queryString != undefined)
    {
      if(queryString.trim() == '')
      {
        return;
      }
      this.reptileData.getFilteredReptiles(queryString).then(theResult => {
        this.reptiles = theResult;
      })
    }
  }

  resetList(event)
  {
    this.reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;
    })
  }

  UpdateReptileDetails(reptile)
  {
    this.reptiles = reptile;    
    this.observations = this.obsData.getObservations(reptile.SnakeName);
    this.feed = this.feedData.getFeed(reptile.SnakeName);
    this.feedSchedule = this.feedSched.getFeedSchedule(reptile.SnakeName);
    this.meds = this.medsData.getMeds(reptile.SnakeName);
    this.hasReptile = true; 
    var form = document.querySelector('form')!;
    var data = new FormData(form);
    var name = data.get('name');
    
  }

  // getObservations()
  //   {   
  //     this.obsData.getObservations(this.reptiles[0].SnakeName);
  //       var observationInformation: Array<Object> = []; 
  //       var count = 0;
  //       for(var i = 0; i < this.obsData.getObservations(this.reptiles.SnakeName).length; i++)
  //       {
  //           if(this.data[i].SnakeName == snakeName)
  //           {
  //               observationInformation[count] = this.data[i];
  //               count++;
  //           }
  //       }
  //       return observationInformation;

  //   }

  sendForm()
  {
    var form = document.querySelector('form')!;
    var data = new FormData(form);
    var name = data.get('name') as string;
    var location = data.get('location') as string;
    var species = data.get('species') as string;
    var morph = data.get('morph') as string;
    var DoB = data.get('DoB') as string;
    var food = data.get('food') as string;
    var handling = data.get('handling') as string;
    var acquired = data.get('acquired') as string;
    var scaleVentral = data.get('scaleVentral') as string;
    var scaleMid = data.get('scaleMid') as string;
    var scaleSubCauudal = data.get('scaleSubCuudal') as string;
    var saddles = data.get('saddles') as string;
    var scaleCount5 = data.get('scaleCount5') as string;
    //var picture = data.get('choice') as ImageBitmap;
    var picture = null;
    var active = data.get('active') as string;
    var adopter = data.get('adopter') as string;
    var adoptionDate = data.get('adoptionDate') as string;
    var obDate = data.get('obDate') as string;
    var obData = data.get('obData') as string;
    var feedFood = data.get('feedFood') as string;
    var frequency = data.get('title') as string;
    var schedDate = data.get('schedDate') as string;
    var schedFood = data.get('schedFood') as string;
    var schedComment = data.get('schedComment') as string;
    var rxDate = data.get('rxDate') as string;
    var rx = data.get('rx') as string;
    var nextRx = data.get('nextRx') as string;

    this.reptileData.send(name, location, species, morph, DoB, handling, acquired, scaleVentral, scaleMid, scaleSubCauudal, saddles, scaleCount5, picture, active, adopter, adoptionDate);
    this.obsData.send(name, obDate, obData);
    this.feedData.send(name, feedFood, frequency);
    this.feedSched.send(name, schedDate, schedFood, schedComment);
    this.medsData.send(name,rxDate, rx, nextRx);
  }

}
