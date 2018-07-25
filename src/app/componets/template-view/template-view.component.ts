import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-template-view',
  styleUrls: ['./template-view.component.css'],
  templateUrl: './template-view.component.html',
  providers: [ HttpService ],
  encapsulation: ViewEncapsulation.None
})
export class TemplateViewComponent implements OnInit {
    public form: FormGroup;
    public content: AbstractControl;
    public template: {template: ''};

    public editorConfig = {
        theme: 'bubble',
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['link', 'image'],
                ['clean']
            ]
        }
    };
  constructor(
      private route: ActivatedRoute,
      private http: HttpService,
      private _fb: FormBuilder
  ) {
      this.form = _fb.group({
          'content': ['<p>Template</p>', Validators.compose([Validators.required])],
      });

      this.content = this.form.controls['content'];
  }

  public ngOnInit() {
      this.http.getData(`/api/templates/${this.route.snapshot.params.id}`).then(data => {
          this.template = data;

          this.form = this._fb.group({
              'content': [this.template.template, Validators.compose([Validators.required])],
          });

          this.content = this.form.controls['content'];
      });
  }
  public onContentChanged({ html, text }) {
     const currectDate = new Date();
     this.http.updateData(`/api/templates/${this.route.snapshot.params.id}`, {
         modified: currectDate.valueOf()
     }).then(data => {
         console.log(data);
     });
  }

}
