import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "../../../../app-routing.module";
import {UserService} from "../../../../../data/services/user.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  goToAuth() {
    console.log(this.userService.user);
    this.router.navigateByUrl(Paths.auth.toString());
  }
}
