import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-picker';
  @ViewChild('colorPicker') colorPicker: ElementRef;
  selectedColor: any = '#000';

  onColorSelected(e) {
    this.selectedColor = e.detail.hex;
  }

  getSelectedColorStyle() {
    return {
      'background': this.selectedColor,
    };
  }

}
