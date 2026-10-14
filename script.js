// Fungsi untuk memunculkan elemen saat di-scroll (Reveal Animation)
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 120; // Disesuaikan sedikit agar animasi muncul lebih halus

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  };

  // Jalankan sekali saat halaman dimuat
  revealOnScroll();

  // Jalankan setiap kali layar di-scroll
  window.addEventListener("scroll", revealOnScroll);
});
