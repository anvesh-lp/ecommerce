import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private activeRoute: ActivatedRoute) {
    this.id = +activeRoute.params['id'];
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
    });
  }

  ngOnInit() {}
}
