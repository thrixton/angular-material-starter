import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { LoggingService } from './logging.service';

// Import icons
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _logger: LoggingService
  ) {
    this.initialise();
  }
  private addSvg(icon: IconDefinition) {
    // console.log(icon);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon.icon[0]} ${icon.icon[1]}">
        <path d="${icon.icon[4]}" />
      </svg>`;

    this._iconRegistry.getNamedSvgIcon(icon.iconName, icon.prefix).subscribe(
      () => {
        //Ok, icon already exists
      },
      () => {
        //Error, not found, add it
        this._iconRegistry.addSvgIconLiteralInNamespace(
          icon.prefix,
          icon.iconName,
          this._sanitizer.bypassSecurityTrustHtml(svg)
        );
        this._logger.trace('Added icon', { prefix: icon.prefix, name: icon.iconName });
      }
    );
  }

  private initialise() {
    this.addSvg(faBuilding);
    this.addSvg(faCog);
    this.addSvg(faWrench);
    this.addSvg(faCalendarAlt);
    this.addSvg(faTachometerAlt);
    this.addSvg(faCreditCard);
    this.addSvg(faHome);
    this.addSvg(faBars);
    this.addSvg(faBell);
    this.addSvg(faUserCircle);
    this.addSvg(faUserPlus);
    this.addSvg(faUserCog);
    this.addSvg(faSignOutAlt);
    this.addSvg(faKey);
    this.addSvg(faUserShield);
    this.addSvg(faUnlockAlt);
    this.addSvg(faUser);
    this.addSvg(faMehBlank);
    this.addSvg(faPlus);
    this.addSvg(faSnowflake);
    this.addSvg(faGoogle);
    this.addSvg(faFacebookF);
    this.addSvg(faMedkit);
    this.addSvg(faTimesCircle);
    this.addSvg(faPen);
    this.addSvg(faTrashAlt);
    this.addSvg(faHeart);
  }
}
