-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 01, 2023 at 04:27 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kehadiran`
--

-- --------------------------------------------------------

--
-- Table structure for table `kehadiran`
--

CREATE TABLE `kehadiran` (
  `id` int(100) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tanggal` varchar(255) NOT NULL,
  `waktu` varchar(255) NOT NULL,
  `acara` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kehadiran`
--

INSERT INTO `kehadiran` (`id`, `nama`, `tanggal`, `waktu`, `acara`) VALUES
(2, 'Muhammad Irsyad Wahyuhadi Wibowo', '2023-12-17', '17:12', 'Event Koimatsuri'),
(3, 'Pilar Filino Hadi', '2023-12-17', '17:13', 'Event Koimatsuri'),
(4, 'Andhanu Prakoso Aji', '2023-12-17', '17:16', 'Event Koimatsuri'),
(5, 'Kirigaya Kazuto', '2023-12-17', '17:22', 'Event Koimatsuri'),
(6, 'Asuna Yuuki', '2023-12-17', '17:28', 'Event Koimatsuri'),
(7, 'Chisato Nishikigi', '2023-12-01', '19:59', 'Seminar KP'),
(8, 'Inoue Takina', '2023-12-29', '08:02', 'Makrab'),
(10, 'Maman resing', '2023-11-29', '08:11', 'Lustrum 3.0'),
(11, 'Responsi Ionic Resmi Tamat', '2023-12-01', '20:18', 'Tamat'),
(12, 'Akhirnya kelar juga responsi', '2023-12-01', '21:47', 'Selesai responsi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kehadiran`
--
ALTER TABLE `kehadiran`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kehadiran`
--
ALTER TABLE `kehadiran`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
