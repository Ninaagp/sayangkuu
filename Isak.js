// Fungsi untuk menampilkan bagian tertentu
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Sembunyikan semua bagian
    });
    document.getElementById(sectionId).classList.remove('hidden'); // Tampilkan bagian yang diminta
}

// Menampilkan modal dengan ucapan yang sesuai
function showModal(ucapan) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modal-content");
    
    // Masukkan konten ucapan ke dalam modal
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <p>${ucapan}</p>`;
    
    // Tampilkan modal
    modal.style.display = "flex";
}

// Menutup modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Sembunyikan modal
}

// Menangani klik di luar modal untuk menutup
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal(); // Jika mengklik luar modal, maka modal tertutup
    }
}
