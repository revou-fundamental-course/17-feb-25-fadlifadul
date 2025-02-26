const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
let interval;

// Fungsi untuk menampilkan slide sesuai index
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Fungsi untuk berpindah ke slide berikutnya
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Fungsi untuk berpindah ke slide sebelumnya
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Menjalankan slider otomatis setiap 3 detik
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

// Menghentikan slider otomatis saat user klik tombol
function stopAutoSlide() {
  clearInterval(interval);
  startAutoSlide(); // Restart auto slide setelah user klik tombol
}

// Event listener untuk tombol navigasi
nextButton.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
});

prevButton.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
});

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);
startAutoSlide();
