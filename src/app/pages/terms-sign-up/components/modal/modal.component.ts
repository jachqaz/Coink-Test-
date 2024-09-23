import {Component, OnInit} from '@angular/core';
import {paths} from "../../../../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToAuth() {
    this.router.navigateByUrl(paths.auth.toString());
  }
}
