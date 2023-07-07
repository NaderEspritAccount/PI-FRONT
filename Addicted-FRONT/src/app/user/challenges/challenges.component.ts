import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChallengesService } from './challenges.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  challenges: any[] = [];

  constructor(private challengesService: ChallengesService) { }

  ngOnInit(): void {
    this.challengesService.getChallenges()
      .subscribe(
        (challenges: any[]) => {
          this.challenges = challenges;
        },
        (error: any) => {
          // Handle error here
        }
      );
  }

}
