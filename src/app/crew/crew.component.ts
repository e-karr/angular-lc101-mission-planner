import { Component, OnInit } from '@angular/core';

interface Candidate {
  name: string;
  photo: string;
  faveAnimal: string;
  nickname: string;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  inCrew: boolean = false;
  crew: Candidate[] = [];
  mouseoverCrewMember: Candidate = null;

  candidates: Candidate[] = [
    {
      name: 'Sally Ride',
      photo:
        'https://handlers.education.launchcode.org/static/images/sally-ride.jpg',
      faveAnimal: 'Dog',
      nickname: 'Sal',
    },
    {
      name: 'Mae Jemison',
      photo:
        'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg',
      faveAnimal: 'Cat',
      nickname: 'Jemi',
    },
    {
      name: 'Ellen Ochoa',
      photo:
        'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg',
      faveAnimal: 'Horse',
      nickname: 'Ellie',
    },
    {
      name: 'Frederick Gregory',
      photo:
        'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg',
      faveAnimal: 'Lizard',
      nickname: 'Freddy',
    },
    {
      name: 'Guion Bluford',
      photo:
        'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg',
      faveAnimal: 'Tiger',
      nickname: 'Blue',
    },
    {
      name: 'Kjell Lindgren',
      photo:
        'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg',
      faveAnimal: 'Cow',
      nickname: 'Lin',
    },
    {
      name: 'Jeanette Epps',
      photo:
        'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg',
      faveAnimal: 'Rabbit',
      nickname: 'Jean',
    },
  ];

  constructor() {}

  ngOnInit() {}

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: Candidate) {
    if (!this.crew.includes(candidate) && this.crew.length < 3) {
      this.crew.push(candidate);
    } else if (this.crew.includes(candidate)) {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index, 1);
    }
  }
}
