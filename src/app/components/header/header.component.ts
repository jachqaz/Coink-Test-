import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {paths} from "../../app-routing.module";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule,
    NgOptimizedImage
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  defaultHref = paths.auth.toString();
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() textTitle: string = "";

  constructor() {
  }

  ngOnInit() {
  }

}
