import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(private router : RouterModule) { }
  projects:any[];
  ngOnInit(): void {
    this.projects = [
      {name:'KSPlay',link:'https://nativmaatuk.github.io/KSPlay/',intro:'Games and console shopping site | develop on Angular | Data from the services | responsive to PC & Mobile | User name: user Password: user ',image:'KSPlay.png'},
      {name:'Zig Zag',link:'https://github.com/NativMaatuk/Zig-Zag',intro:'3D Game for PC, develop on C# with Unity-2018.3.',image:'Zig-Zag.png'},
      {name:'ConfirMe',link:'https://nativmaatuk.github.io/ConfirmMe/',intro:'Web App developed on Angular, DB - FireBase, to get control panel page please enter "012" in phone input area and submit. responsive to PC and Mobile.',image:'confirmeimg01.png'},
      {name:'Tic-Tac-Toe',link:'https://github.com/NativMaatuk/Tic-Tac-Toe',intro:'PC Game for Windows, Developed on JAVA uses JavaFX, need JDK11 to run.',image:'tic-tac-toeimg01.png'},
      {name:'Minesweeper',link:'https://github.com/NativMaatuk/Minesweeper',intro:'PC Game for Windows, Developed on JAVA uses JavaFX, need JDK11 to run.',image:'Minesweeperimg01.png'},
      {name:'Defects',link:'https://github.com/NativMaatuk/Defects',intro:'The project solution composes of three projects: DefectsViewer, MathActions, UnitTester. developed on C#.',image:'Defectsimg01.png'} ,
      {name:'Simon Says',link:'https://github.com/NativMaatuk/Simon-Says',intro:'Memory Game for Android, DB - FireBase.',image:'SimonSaysimg01.png'}  
    ];
  }
}