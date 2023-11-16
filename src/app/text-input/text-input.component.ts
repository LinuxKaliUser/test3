import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class TextInputComponent {
  inputText: string = '';
  selectedMode: string = 'light';
}
