import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data.component'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  photo:string = ""
  detailsTitle:string = ""
  detailsDescription:string = ""
  detailsLink:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = data.filter(article => article.id == id)[0]

    this.detailsTitle = result.title
    this.detailsDescription = result.detailsDescription
    this.photo = result.photo
    this.detailsLink = result.detailsLink
  }
}
