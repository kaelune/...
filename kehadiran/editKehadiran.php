<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
//terima data dari mobile
$id=trim($data['id']);
$nama=trim($data['nama']);
$tanggal=trim($data['tanggal']);

$waktu=trim($data['waktu']);
$acara=trim($data['acara']);

http_response_code(201);
if($nama!='' and $waktu!='' && $acara!=''){
 $query = mysqli_query($koneksi,"update kehadiran set nama='$nama',tanggal='$tanggal',waktu='$waktu', acara='$acara' where
id='$id'");
 $pesan = true;
}else{
 $pesan = false;
}
echo json_encode($pesan);
echo mysqli_error($koneksi);