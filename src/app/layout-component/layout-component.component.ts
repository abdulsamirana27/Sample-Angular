import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponent implements OnInit{
  url="/customer";
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  obj = this.returnMenu()
  activities:any=this.obj?.data?.userActivities;
  result: any = [];
data: any= this.returnMenu();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    }


  ddToggle(i:any) {
    this.result[i].menu = !this.result[i].menu;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
debugger
    console.log("sam")
    for (let key in this.data.navitems) {
      if (this.data.navitems.hasOwnProperty(key)) {
        this.result.push(this.data.navitems[key]);
      }
    }
  }

  returnMenu(){
   return {
     "tranCode": 100,
     "isSuccess": true,
     "message": "SUCCESS",
     "data": {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI1MSIsIlVzZXJOYW1lIjoiYWtzYSIsIlVzZXJUeXBlIjoiMCIsIlByb2ZpbGVJZCI6IjE4NiIsIkNoYW5uZWxJZCI6IjIiLCJNU0lTRE4iOiI5MjMwMTUwMTY4NzUiLCJFbWFpbCI6ImFkbWluQGFrc2EuY29tIiwiSXNPVFAiOiIwIiwiVXNlclJlZ2lvbiI6Im51bGwiLCJGbGFnUFdEIjoiTiIsImV4cCI6MTY0ODk3MjE0MH0.TAA5a0YrF1hO9MKT-ff5LxfWkT2KnQdd5daNC2NyJvI",
       "name": "aksa",
       "id": "51",
       "msisdn": "923015016875",
       "userActivities": [

         {
           "activityName": "Customer",
           "activityUrl": ".",
           "parentActivityId": "0",
           "activityId": "26",
           "c": "0",
           "r": "0",
           "u": "0",
           "d": "0",
           "e": "0",
           "ex": "0",
           "subActivities": [
             {
               "activityName": "Customer List",
               "activityUrl": "customer/list",
               "parentActivityId": "26",
               "activityId": "34",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "1",
               "ex": "0",
               "subActivities": null
             }
           ]
         },
         {
           "activityName": "Retailer Management",
           "activityUrl": ".",
           "parentActivityId": "0",
           "activityId": "38",
           "c": "1",
           "r": "1",
           "u": "1",
           "d": "1",
           "e": "1",
           "ex": "1",
           "subActivities": [
             {
               "activityName": "Bluck Upload",
               "activityUrl": "retailer/upload-file",
               "parentActivityId": "38",
               "activityId": "52",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "1",
               "ex": "0",
               "subActivities": null
             },
             {
               "activityName": "Retailer",
               "activityUrl": "retailer/retailer-mgt",
               "parentActivityId": "38",
               "activityId": "54",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "1",
               "ex": "0",
               "subActivities": null
             }
           ]
         },
         {
           "activityName": "SIM Bundles",
           "activityUrl": ".",
           "parentActivityId": "0",
           "activityId": "46",
           "c": "1",
           "r": "1",
           "u": "1",
           "d": "1",
           "e": "1",
           "ex": "1",
           "subActivities": [
             {
               "activityName": "GetBundles",
               "activityUrl": "sim-bundle/get-bundles",
               "parentActivityId": "46",
               "activityId": "47",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "1",
               "ex": "0",
               "subActivities": null
             },
             {
               "activityName": "Get Bundle Type",
               "activityUrl": "sim-bundle/get-bundle-type",
               "parentActivityId": "46",
               "activityId": "62",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "1",
               "ex": "1",
               "subActivities": null
             }
           ]
         },
         {
           "activityName": "User Management",
           "activityUrl": ".",
           "parentActivityId": "0",
           "activityId": "23",
           "c": "1",
           "r": "1",
           "u": "1",
           "d": "1",
           "e": "1",
           "ex": "1",
           "subActivities": [
             {
               "activityName": "Profiles",
               "activityUrl": "user-management/profile",
               "parentActivityId": "23",
               "activityId": "33",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "1",
               "ex": "0",
               "subActivities": null
             },
             {
               "activityName": "User",
               "activityUrl": "user-management/user",
               "parentActivityId": "23",
               "activityId": "45",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "0",
               "e": "1",
               "ex": "0",
               "subActivities": null
             },
             {
               "activityName": "Activities",
               "activityUrl": "admin/activity",
               "parentActivityId": "23",
               "activityId": "53",
               "c": "1",
               "r": "1",
               "u": "1",
               "d": "1",
               "e": "0",
               "ex": "1",
               "subActivities": null
             }
           ]
         }
       ]
     }
   }

  }

}
