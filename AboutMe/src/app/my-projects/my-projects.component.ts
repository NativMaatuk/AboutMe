import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }
  projects:any[];
  ngOnInit(): void {
    this.projects = [
      {name:'ConfirMe',link:'https://nativmaatuk.github.io/ConfirmMe/',intro:'Web App\ndevelop on Angular',image:'confirmeimg01.png'},
      {name:'Tic-Tac-Toe',link:'https://github.com/NativMaatuk/Tic-Tac-Toe',intro:'PC Game for Windows, Develop on JAVA uses JavaFX, need JDK11 to run.',image:'tic-tac-toeimg01.png'},
      {name:'Minesweeper',link:'https://github.com/NativMaatuk/Minesweeper',intro:'PC Game for Windows, Develop on JAVA uses JavaFX, need JDK11 to run.',image:'Minesweeperimg01.png'},
      {name:'Defects',link:'https://github.com/NativMaatuk/Defects',intro:'The project solution composes of three projects: DefectsViewer, MathActions, UnitTester. develop on C#',image:'Defectsimg01.png'} ,
      {name:'Simon Says',link:'https://github.com/NativMaatuk/Simon-Says',intro:'Memory Game for Android',image:'SimonSaysimg01.png'}  
    ];
  }
 
}