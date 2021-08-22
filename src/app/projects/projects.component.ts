import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //api reader
    let request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.github.com/users/Deniorrr/repos', true)

    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      data.forEach((repo) => {
        // Log each repo's title
        let image_link = `https://raw.githubusercontent.com/Deniorrr/${repo.name}/${repo.default_branch}/portfolio_miniature.png`
        create_tile(image_link, repo.name, repo.description, repo.language)
      })
    }
    // Send request
    request.send()

  }

}

function create_tile(zdjecie, tytul, opis, language) {
  let tile = ""
  tile += `<div class='tile'><img class='preview' src='${zdjecie}'><h1>${tytul}</h1><p>${opis}</p><p id='language'>Main language: ${language}</p></div>`
  document.getElementById("projects_scraped").innerHTML += tile
}
