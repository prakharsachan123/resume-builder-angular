import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {
  resumedata;
  constructor() { }

  ngOnInit() {
    this.resumedata = JSON.parse(localStorage.getItem("formdata"))
    console.log(this.resumedata);
  }

}
