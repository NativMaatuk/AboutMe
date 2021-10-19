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
      {name:'ConfirMe',link:'https://nativmaatuk.github.io/ConfirmMe/',intro:'Web App developed on Angular, DB - FireBase, to get control panel page enter "012" in phone input area and submit. responsive to PC and Phone',image:'confirmeimg01.png'},
      {name:'Tic-Tac-Toe',link:'https://github.com/NativMaatuk/Tic-Tac-Toe',intro:'PC Game for Windows, Developed on JAVA uses JavaFX, need JDK11 to run.',image:'tic-tac-toeimg01.png'},
      {name:'Minesweeper',link:'https://github.com/NativMaatuk/Minesweeper',intro:'PC Game for Windows, Developed on JAVA uses JavaFX, need JDK11 to run.',image:'Minesweeperimg01.png'},
      {name:'Defects',link:'https://github.com/NativMaatuk/Defects',intro:'The project solution composes of three projects: DefectsViewer, MathActions, UnitTester. developed on C#',image:'Defectsimg01.png'} ,
      {name:'Simon Says',link:'https://github.com/NativMaatuk/Simon-Says',intro:'Memory Game for Android, DB - FireBase',image:'SimonSaysimg01.png'}  
    ];
  }
}