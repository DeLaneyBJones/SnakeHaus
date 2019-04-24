import { Component, OnInit } from '@angular/core';
import { MedsData } from '../providers/meds-data';
import { FeedData } from '../providers/feed-data';
import { FeedSchedule } from '../providers/feed-schedule';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.page.html',
  styleUrls: ['./schedule-modal.page.scss'],
})
export class ScheduleModalPage implements OnInit {
  medsData: Array<Object>;
  feedData: any;
  feedSchedule: any;
  testingDate: string;

  testingDateTomorrow: string;
  feedDataTomorrow: any;

  feedSched: boolean;
  hasFeedSched: boolean;
  medsSched: boolean;
  hasMedsSched: boolean;
  thawing: boolean;
  hasThawing: boolean;

  constructor(public medsData2: MedsData, public feedData2: FeedData, public feedSchedule2: FeedSchedule, public modalController: ModalController) { 
  }

  callThisFunction() {
    this.testingDate = "2019-04-09";
    this.testingDateTomorrow = "2019-04-10";
    
    this.medsData = this.medsData2.getAllMedsOnDate(this.testingDate);
    if(this.medsData.length > 0)
    {
      this.hasMedsSched = true;
    }
    else{
      this.hasMedsSched = false;
    }

    this.feedSchedule = this.feedSchedule2.getAllFeedSchedulesOnDate(this.testingDate);
    this.feedData = this.feedData2.getAllFeedsByName(this.feedSchedule);
    if(this.feedData.length > 0)
    {
      this.hasFeedSched = true;
    }
    else{
      this.hasFeedSched = false;
    }

    this.feedSchedule = this.feedSchedule2.getAllFeedSchedulesOnDate(this.testingDateTomorrow);
    this.feedDataTomorrow = this.feedData2.getAllFeedsByName(this.feedSchedule);
    if(this.feedDataTomorrow.length > 0)
    {
      this.hasThawing = true;
    }
    else{
      this.hasThawing = false;
    }
  }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalController.dismiss();
  }

}
