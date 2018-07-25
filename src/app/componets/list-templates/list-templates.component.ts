import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Template } from '../../interfaces/template';

@Component({
  selector: 'app-list-templates',
  templateUrl: './list-templates.component.html',
  styleUrls: ['./list-templates.component.css'],
  providers: [ HttpService ]
})
export class ListTemplatesComponent implements OnInit {
  public templates: Template[] = [];
  constructor(
      private http: HttpService
  ) { }

    ngOnInit() {
        this.http.getData('api/templates').then(data => {
            this.templates = data;
        });
    }

}
