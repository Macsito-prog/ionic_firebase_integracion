import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';
const { CapacitorVideoPlayer,Device } = Plugins;


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {
  private _videoPlayer:any;
  private _url: string;
  constructor() { }



  
  async ngOnInit() {
    // define the plugin to use
    const info = await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      this._videoPlayer = CapacitorVideoPlayer;
    } else {
      this._videoPlayer = WebVPPlugin.CapacitorVideoPlayer
    }
    // define the video url
    this._url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuck/Bunny.mp4"
    // add listeners to the plugin
   
  }

  play(){
  
    const res:any  =  this._videoPlayer.initPlayer({mode:"fullscreen",url:this._url,playerId:"fullscreen",componentTag:"my-page"});
   
  }
}

