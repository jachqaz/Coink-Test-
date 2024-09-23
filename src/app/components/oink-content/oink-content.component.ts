import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-oink-content',
  templateUrl: './oink-content.component.html',
  styleUrls: ['./oink-content.component.scss'],
  imports: [
    IonicModule,
  ],
  standalone: true
})
export class OinkContentComponent implements OnInit {
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor() {
  }

  ngOnInit() {
  }

}
