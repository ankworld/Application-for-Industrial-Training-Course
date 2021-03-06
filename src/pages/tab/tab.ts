import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';

import { LoginPage } from '../login/login';
import {HomePage} from '../home/home';
import { SignupPage } from '../signup/signup';
import { ScnPage } from '../scn/scn';
import { UpprofilePage } from '../upprofile/upprofile';
import { ReviewPage } from '../review/review';
import { DownloadPage } from '../download/download';
import { RecordPage } from '../record/record';

import { TeaSpvsPage } from '../tea-spvs/tea-spvs';

import { CpnStdlistPage } from '../cpn-stdlist/cpn-stdlist';

import { AdminAnnouncePage } from '../admin-announce/admin-announce';
import { AdminApprovePage } from '../admin-approve/admin-approve';

/*
  Generated class for the Tab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  chkRole: string;

  pages: Array<{title: string, component: any}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chkRole = navParams.get("role");
    console.log(this.chkRole);
    console.log("load");
    if(this.chkRole == "student"){
    this.pages = [
        { title: 'Home Page', component: HomePage},
        { title: "Send Company's Name", component: ScnPage},
        { title: 'Update Profile', component: UpprofilePage},
        { title: 'Write a Review', component: ReviewPage},
        { title: 'Download', component: DownloadPage},
        { title: 'Industrial Training Record', component: RecordPage},
        { title: 'Logout', component: LoginPage}
      ];
    }
    else if(this.chkRole == "teacher"){
      this.pages = [
        { title: "Home", component: HomePage},
        { title: "Supervision", component: TeaSpvsPage},
        { title: "Logout", component: LoginPage}
      ];
    }
    else if(this.chkRole == "company"){
      this.pages = [
        { title: "Home", component: HomePage},
        { title: "Student List", component: CpnStdlistPage},
        { title: "Logout", component: LoginPage}
      ];
    }
    else if(this.chkRole == "admin"){
      this.pages = [
        { title: "Home", component: HomePage},
        { title: "Announcement", component: AdminAnnouncePage},
        { title: "Approve the company", component: AdminApprovePage},
        { title: "Logout", component: LoginPage}
      ];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
    this.loadHome();
  }

  loadHome(){
    this.nav.setRoot(HomePage,{chkRole: this.chkRole});
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
