import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
// login
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
const USERNAME = 'namasaya';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  constructor(public _apiService: ApiService, private modal: ModalController, private authService: AuthenticationService, private alertController :
    AlertController, private router : Router) { }

  dataKehadiran: any =[];
  modal_tambah = false;
  modal_edit = false;
  id: any;
  nama: any;
  tanggal: any;
  waktu: any;
  acara: any;
  ngOnInit() {
    this.getKehadiran();
  }

  async cekSesi() {
    const ambilNama = localStorage.getItem(USERNAME);
    if (ambilNama) {
      let namauser = ambilNama;
      this.nama = namauser;
    } else {
      this.authService.logout();
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
  }

  logout() {
    this.alertController.create({
      header: 'Perhatian',
      subHeader: 'Yakin Logout aplikasi ?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
          console.log('Canceled', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
          //jika tekan yakin
          this.authService.logout();
          this.router.navigateByUrl('/', { replaceUrl: true });
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  getKehadiran() {
    this._apiService.tampil('tampilKehadiran.php').subscribe({
      next: (res: any) => {
      console.log('sukses', res);
      this.dataKehadiran = res;
      },
      error: (err: any) => {
      console.log(err);
      },
    })
  }

  reset_model() {
    this.id = null;
    this.nama = '';
    this.tanggal ='';
    this.waktu = '';
    this.acara = '';
  }
  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
  }

  open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilKehadiran(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
  }
    

  cancel() {
    this.modal.dismiss();
    this.modal_tambah = false;
    this.modal_edit = false;

    this.reset_model();
  }

  tambahKehadiran() {
    if (this.nama != '' && this.tanggal != '' && this.waktu != '' && this.acara != '') {
      let data = {
        nama: this.nama,
        tanggal: this.tanggal,
        waktu: this.waktu,
        acara: this.acara,

      }
      this._apiService.tambah(data, 'tambahKehadiran.php').subscribe({
        next: (hasil: any) => {
          this.reset_model();
          console.log('berhasil tambah kehadiran');
          this.getKehadiran();
          this.modal_tambah = false;
          this.modal.dismiss();
        },
          error: (err: any) => {
          console.log('gagal tambah kehadiran');
        }
      })
    } else {
    console.log('gagal tambah kehadiran karena masih ada data yg kosong');
    }
  }

  hapusKehadiran(id: any) {
    this._apiService.hapus(id, 
    '/hapusKehadiran.php?id=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.getKehadiran();
        console.log('berhasil hapus data');
      },
        error: (error: any) => {
        console.log('gagal');
      }
    })
  }
  
  ambilKehadiran(id: any) {
    this._apiService.lihat(id, 
    'lihatKehadiran.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let kehadiran = hasil;
        this.id = kehadiran.id;
        this.nama = kehadiran.nama;
        this.tanggal = kehadiran.tanggal;
        this.waktu = kehadiran.waktu;
        this.acara = kehadiran.acara;

      },
        error: (error: any) => {
        console.log('gagal ambil data');
      }
    })
  }

  editKehadiran() {
    let data = {
      id: this.id,
      nama: this.nama,
      tanggal: this.tanggal,
      waktu: this.waktu,
      acara: this.acara,
    }
    this._apiService.edit(data, 'editKehadiran.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.reset_model();
        this.getKehadiran();
        console.log('berhasil edit Kehadiran');
        this.modal_edit = false;
        this.modal.dismiss();
      },
        error: (err: any) => {
        console.log('gagal edit Kehadiran');
      }
    })
  }

}
