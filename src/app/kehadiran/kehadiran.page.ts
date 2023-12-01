import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-kehadiran',
  templateUrl: './kehadiran.page.html',
  styleUrls: ['./kehadiran.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KehadiranPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
