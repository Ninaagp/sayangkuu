# sayangkuu
Isak's Birthday
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>3D Ucapan Ulang Tahun :)</title>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Fredoka+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="sayangkuu.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: url('C:/Users/Lenovo/Documents/birthday/Blue Illustrative Save The Ocean Presentation (2)/2.png') no-repeat center center fixed;
            background-size: cover;
        }

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        }

        .image-container img {
            width: 100%; /* Membuat gambar responsif */
            max-width: 150px; /* Membatasi lebar maksimum gambar untuk mobile */
            height: auto; /* Menjaga rasio gambar */
            border-radius: 10px; /* Tambahkan radius pada sudut */
            margin: 10px; /* Memberikan jarak antar gambar */
            cursor: pointer; /* Menunjukkan gambar dapat diklik */
        }

        .text-3d {
            margin-top: 16px;
            font-family: 'Fredoka One', cursive; /* Font imut */
            font-size: 4vw; /* Ukuran font responsif */
            font-weight: bold; /* Membuatnya tebal */
            color: #000; /* Warna hitam */
        }

        .button-container {
            margin-top: 20px;
        }

        .button {
            padding: 10px 20px;
            background-color: #ff4081; /* Warna tombol */
            color: #fff;
            font-size: 3vw; /* Ukuran font responsif */
            text-decoration: none; /* Menghilangkan garis bawah */
            border-radius: 10px; /* Membulatkan sudut */
            margin: 10px; /* Jarak antar tombol */
            transition: background-color 0.2s; /* Efek transisi */
        }

        .button:hover {
            background-color: #ff69b4; /* Warna lebih cerah saat hover */
        }

        .hidden {
            display: none; /* Menyembunyikan bagian yang tidak ditampilkan */
        }

        .modal {
            display: none; /* Menyembunyikan modal */
            position: fixed; /* Mengatur posisi tetap */
            z-index: 1000; /* Menempatkan modal di atas konten lainnya */
            left: 0;
            top: 0;
            width: 100%; /* Lebar modal 100% */
            height: 100%; /* Tinggi modal 100% */
            overflow: auto; /* Memungkinkan scroll jika diperlukan */
            background-color: rgba(0, 0, 0, 0.7); /* Latar belakang semi-transparan */
            justify-content: center; /* Memusatkan konten modal */
            align-items: center; /* Memusatkan konten modal */
        }

        .modal-content {
            background-color: #fff; /* Latar belakang putih */
            margin: 15% auto; /* Jarak dari atas dan bawah */
            padding: 20px; /* Padding di dalam modal */
            border: 1px solid #888; /* Border */
            width: 80%; /* Lebar modal */
            max-width: 400px; /* Lebar maksimum modal */
            border-radius: 10px; /* Membulatkan sudut */
        }

        .modal-content p {
            color: #000; /* Warna teks dalam modal menjadi hitam */
            font-size: 3vw; /* Ukuran font responsif untuk teks modal */
        }

        .close {
            color: #aaa; /* Warna teks close */
            float: right; /* Menempatkan tombol close di kanan */
            font-size: 28px; /* Ukuran font tombol close */
            font-weight: bold; /* Tebal */
        }

        .close:hover,
        .close:focus {
            color: red; /* Warna saat hover */
            text-decoration: none; /* Menghilangkan garis bawah */
            cursor: pointer; /* Menunjukkan dapat diklik */
        }
    </style>
    <script>
        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
        }

        // Menampilkan modal dengan ucapan yang sesuai
        function showModal(ucapan) {
            const modal = document.getElementById("myModal");
            const modalContent = document.getElementById("modal-content");
            modalContent.innerHTML = `<span class="close" onclick="closeModal()">&times;</span><p>${ucapan}</p>`;
            modal.style.display = "flex"; // Menampilkan modal
        }

        // Menutup modal
        function closeModal() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none"; // Menyembunyikan modal
        }

        // Menangani klik di luar modal untuk menutup
        window.onclick = function(event) {
            const modal = document.getElementById("myModal");
            if (event.target === modal) {
                closeModal();
            }
        }
    </script>
</head>
<body>
    <!-- Bagian 1 -->
    <div id="section1" class="section">
        <div class="image-container">
            <img src="C:/Users/Lenovo/Documents/birthday/WhatsApp Image 2024-09-30 at 18.38.40_1ad19d75.jpg" alt="Birthday Image">
        </div>
        <h1 class="text-3d">Hai, hari ini ulang tahunku</h1>
        <div class="button-container">
            <a href="#" class="button" onclick="showSection('section2')">Klik di sini dong sayangkuuuu</a>
        </div>
    </div>

    <!-- Bagian 2 -->
    <div id="section2" class="section hidden">
        <h2 class="text-3d">Ucapan Berkat</h2>
        <div class="image-container">
            <img src="C:/Users/Lenovo/Documents/birthday/WhatsApp Image 2024-09-30 at 17.09.14_0bdd1175.jpg" alt="Foto Ucapan" onclick="showModal('Sehat Sukses selalu cintaku Nina berharap banyak dari Isak,kita punya banyak wish list tetap sehat bukan hanya keluarga bukan hanya Nina tapi banyak orang berharap juga sama Isak. Nina tidak tahu apa yang menjadi Isak punya pergumulan tapi Nina selalu minta sama Tuhan tolong mudahkan setiap proses biar apa yang Tuhan kehendaki itu yang terjadi. Nina akan selalu dukung Isak apapun yang Isak lakukan dan dalam situasi apapun Nina akan selalu support Isak <br>Kiranya Allah sumber berkat itu selalu memudahkan segala sesuatu yang Isak usahakan 🤍🌹<br>Segala perkara ku dapat ku tanggung di dalam Dia.<br>(Filipi 4:13)')">
        </div>
        <div class="button-container">
            <a href="#" class="button" onclick="showSection('section3')"> disini cintakuuuu</a>
        </div>
    </div>

    <!-- Bagian 3 -->
    <div id="section3" class="section hidden">
        <h1 class="text-3d">Foto Ulang Tahun</h1>
        <div class="image-container">
            <img src="C:/Users/Lenovo/Documents/birthday/WhatsApp Image 2024-09-30 at 17.09.17_fdfda1f4.jpg" alt="Foto 1" onclick="showModal('Semoga nanti kalau kesini lagi <jayapura city> orangnya masih tetap Nina')">
            <img src="C:/Users/Lenovo/Documents/birthday/WhatsApp Image 2024-09-30 at 17.09.17_298bc2e9.jpg" alt="Foto 2" onclick="showModal('Foto ini diambil 27 September 2023 sebenarnya saat itu Nina tidak yakin kalau nanti hubungan ini akan berlanjut sampai saat ini, Nina pikir saja oke sudah Nina balik ke Surabaya nanti sudah tidak akan ada komunikasi lagi soalnya Nina tidak begitu yakin Nina bisa komitmen tidak, karna saat itu Nina rasa seperti digantung, tapi Puji Tuhan sudah sampai saat ini Tuhan masih izinkan kita bersama dan bukan hanya saat ini tapi sampai nanti nikah sampai nanti punya anak sampai selama Aminnn')">
            <img src="C:/Users/Lenovo/Documents/birthday/WhatsApp Image 2024-09-30 at 17.09.15_a257ed71.jpg" alt="Foto 3" onclick="showModal('Apapun badainya jangan pernah ganti Nina')">
        </div>
        <div class="button-container">
            <a href="#" class="button" onclick="showSection('section1')">Kembali ya Isakkuu</a>
        </div>
    </div>

    <!-- Modal untuk ucapan -->
    <div id="myModal" class="modal">
        <div class="modal-content" id="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <p></p>
        </div>
    </div>
</body>
</html>
