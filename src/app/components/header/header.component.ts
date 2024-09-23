import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgOptimizedImage} from "@angular/common";
import {Paths} from "../../app-routing.module";

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
  defaultHref = Paths.auth.toString();
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() textTitle: string = "";

  constructor() {
  }

  ngOnInit() {
  }

}
