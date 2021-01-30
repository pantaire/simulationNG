import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explanation-popover',
  templateUrl: './explanation-popover.component.html',
  styleUrls: ['./explanation-popover.component.css']
})
export class ExplanationPopoverComponent {

  @Input() popoverText: string;
  isActive = false;

  toggle() {
    this.isActive = !this.isActive;
  }

}