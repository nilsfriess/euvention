import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {

  jobs: any[] = [
    {
      id: 1,
      name: 'Box 12',
      tools: [
        'hemostatic forceps',
        'forceps',
        'abdominal vetractor',
        'scissors',
        'mosquito forceps',
        'mosquito scissors'
      ],
      status: [
        70,
        20,
        10
      ]
    },
    {
      id: 2,
      name: 'Box 14',
      tools: [
        'forceps',
        'hemostatic forceps',
        'abdominal vetractor',
        'mosquito scissors'
      ],
      status: [
        40,
        35,
        25
      ]
    },
    {
      id: 3,
      name: 'Box 23',
      tools: [
        'forceps',
        'hemostatic forceps',
        'abdominal vetractor',
        'mosquito scissors',
        'scissors'
      ],
      status: [
        80,
        5,
        15
      ]
    },

  ];

  showDetail: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      this.jobs[0].status[0] += 10;
      this.jobs[0].status[1] -= 10;
    }, 2500);
    setTimeout(() => {
      this.jobs[0].status[1] += 5;
      this.jobs[0].status[2] -= 5;
    }, 4000);

    setTimeout(() => {
      this.jobs[0].status[1] += 5;
      this.jobs[0].status[2] -= 5;
    }, 12000);

    setTimeout(() => {
      this.jobs[0].status[0] += 20;
      this.jobs[0].status[1] -= 20;
    }, 15000);

    setTimeout(() => {
      this.jobs.splice(0, 1);
    }, 20000);

    setTimeout(() => {
      this.jobs[1].status[1] += 5;
      this.jobs[1].status[2] -= 5;
    }, 6000);

    setTimeout(() => {
      this.jobs[1].status[0] += 15;
      this.jobs[1].status[1] -= 15;
    }, 10000);

    this.route.data.subscribe((data) => {
      this.showDetail = data.showDetail;
    });
  }
}
