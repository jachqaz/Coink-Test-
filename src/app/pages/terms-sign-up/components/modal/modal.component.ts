import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "../../../../app-routing.module";

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
    this.router.navigateByUrl(Paths.auth.toString());
  }
}
