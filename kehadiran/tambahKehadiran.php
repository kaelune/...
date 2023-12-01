<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
//terima data dari mobile
$nama=trim($data['nama']);
$tanggal=trim($data['tanggal']);

$waktu=trim($data['waktu']);
$acara=trim($data['acara']);
http_response_code(201);
if($nama!='' and $tanggal!='' and $waktu!='' and $acara!=''){
 $query = mysqli_query($koneksi,"insert into kehadiran(nama,tanggal,waktu,acara) values('$nama','$tanggal','$waktu','$acara')");
 $pesan = true;
}else{
 $pesan = false;
}
echo json_encode($pesan);
echo mysqli_error($koneksi);