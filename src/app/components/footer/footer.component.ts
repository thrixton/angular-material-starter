import { Component, OnInit } from '@angular/core';
import { VERSION } from '../../../environments/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  versionText: string;

  constructor() {}

  ngOnInit() {
    this.versionText = `${VERSION.dateVersion}-${VERSION.version}-${VERSION.hash}`;
  }
}
