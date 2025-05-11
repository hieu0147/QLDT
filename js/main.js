// Khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Xóa các phần nội dung preview trong dashboard
  const previewSections = document.querySelectorAll(
    "#dashboard .content-section"
  );
  previewSections.forEach((section) => {
    if (section.id !== "dashboard") {
      section.remove();
    }
  });

  // Hiển thị trang chính khi tải trang
  showContent("thong-bao-nha-truong");

  // Xử lý sự kiện click vào menu có submenu
  const menuItems = document.querySelectorAll(".has-submenu > a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle("active");
    });
  });

  // Xử lý nút toggle sidebar cho giao diện responsive
  const toggleBtn = document.querySelector(".toggle-sidebar");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.querySelector(".sidebar").classList.toggle("active");
      document
        .querySelector(".main-content")
        .classList.toggle("sidebar-active");
    });
  }

  // Xử lý sự kiện click vào thông báo
  const notificationItems = document.querySelectorAll(".notification-item");

  notificationItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Trong thực tế, đây sẽ là liên kết đến trang chi tiết thông báo
      alert("Đang chuyển đến trang chi tiết thông báo");
    });
  });
});

// Hàm hiển thị nội dung tương ứng khi click vào menu
function showContent(contentId) {
  // Ẩn tất cả các phần nội dung
  const contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach((section) => {
    section.classList.remove("active");
  });

  // Tải nội dung từ file tương ứng
  fetch(`pages/${contentId}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Không tìm thấy trang");
      }
      return response.text();
    })
    .then((html) => {
      // Kiểm tra xem đã có phần nội dung này chưa
      let contentSection = document.getElementById(contentId);

      if (!contentSection) {
        // Nếu chưa có, tạo mới và thêm vào trang
        contentSection = document.createElement("div");
        contentSection.id = contentId;
        contentSection.className = "content-section";
        contentSection.innerHTML = html;
        document.querySelector(".main-content").appendChild(contentSection);
      } else {
        // Nếu đã có, cập nhật nội dung
        contentSection.innerHTML = html;
      }

      // Hiển thị nội dung
      contentSection.classList.add("active");
    })
    .catch((error) => {
      console.error(`Lỗi khi tải nội dung ${contentId}:`, error);

      // Hiển thị phần nội dung được chọn nếu đã có sẵn
      const selectedContent = document.getElementById(contentId);
      if (selectedContent) {
        selectedContent.classList.add("active");
      } else {
        // Tạo thông báo lỗi nếu không tìm thấy nội dung
        let errorContent = document.createElement("div");
        errorContent.id = contentId;
        errorContent.className = "content-section active";
        errorContent.innerHTML = `<h1 class='page-title'>${contentId
          .replace(/-/g, " ")
          .toUpperCase()}</h1><p>Không thể tải nội dung. Vui lòng thử lại sau.</p>`;
        document.querySelector(".main-content").appendChild(errorContent);
      }
    });

  // Đóng submenu trên mobile (nếu cần)
  if (window.innerWidth <= 768) {
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".main-content").classList.remove("sidebar-active");
  }
}
