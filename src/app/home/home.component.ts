import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let i = 0
    let animation = setInterval(() => {
      document.getElementsByClassName("about_thread")[i].classList.add("animate_about")
      if (i == 2) clearInterval(animation)
      i += 1
    }, 150)
    document.getElementsByClassName("about_thread")[0].classList.add("animate_about")
  }

}
