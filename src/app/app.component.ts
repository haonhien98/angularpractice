import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root', //phần được đổ vào
  standalone: true, //component này là độc lập và không cần thuộc về bất kỳ module nào.
  imports: [RouterOutlet, BrowserAnimationsModule, MatButtonModule, MatInputModule, MatFormFieldModule], //Để có thể sử dụng nó trong template của component này.
  templateUrl: './app.component.html', //phần giao diện đổ vào (nếu viết trực tiếp không qua url thì sẽ dùng template)
  styleUrl: './app.component.css', //phần css (nếu viết trực tiếp không qua url thì dùng styles)
})
export class AppComponent {
  title = 'project1';
}
