// Hàm hiển thị form đăng ký dịch vụ
function showServiceForm(serviceId) {
  const formContainer = document.getElementById("service-form-container");
  const formTitle = document.getElementById("form-title");

  // Cập nhật tiêu đề form theo dịch vụ được chọn
  switch (serviceId) {
    case "lam-the-sinh-vien":
      formTitle.textContent = "Đăng ký làm lại thẻ sinh viên";
      document.getElementById("service-fee").textContent = "50,000 VNĐ";
      break;
    case "giay-xac-nhan-sv":
      formTitle.textContent = "Đăng ký xin giấy xác nhận sinh viên";
      document.getElementById("service-fee").textContent = "20,000 VNĐ";
      break;
    case "xac-nhan-lich-hoc":
      formTitle.textContent = "Đăng ký xác nhận lịch học";
      document.getElementById("service-fee").textContent = "20,000 VNĐ";
      break;
    case "giay-hoan-thanh-chuong-trinh":
      formTitle.textContent =
        "Đăng ký xin cấp giấy hoàn thành chương trình học";
      document.getElementById("service-fee").textContent = "30,000 VNĐ";
      break;
    case "giay-chung-nhan-tot-nghiep":
      formTitle.textContent =
        "Đăng ký xin cấp giấy chứng nhận tốt nghiệp tạm thời";
      document.getElementById("service-fee").textContent = "50,000 VNĐ";
      break;
    case "ban-sao-van-bang":
      formTitle.textContent = "Đăng ký cấp bản sao văn bằng chứng chỉ";
      document.getElementById("service-fee").textContent = "100,000 VNĐ";
      break;
    case "bang-diem-qua-trinh":
      formTitle.textContent = "Đăng ký cấp bảng điểm quá trình";
      document.getElementById("service-fee").textContent = "30,000 VNĐ";
      break;
    case "chung-chi-tin-hoc":
      formTitle.textContent = "Đăng ký xin cấp chứng chỉ Tin học";
      document.getElementById("service-fee").textContent = "100,000 VNĐ";
      break;
    case "chung-chi-ngoai-ngu":
      formTitle.textContent = "Đăng ký xin cấp chứng chỉ Ngoại ngữ";
      document.getElementById("service-fee").textContent = "100,000 VNĐ";
      break;
    case "chung-chi-ky-nang-mem":
      formTitle.textContent = "Đăng ký xin cấp chứng chỉ Kỹ năng mềm";
      document.getElementById("service-fee").textContent = "80,000 VNĐ";
      break;
    case "chung-chi-gdqp":
      formTitle.textContent = "Đăng ký xin cấp chứng chỉ Giáo dục Quốc phòng";
      document.getElementById("service-fee").textContent = "100,000 VNĐ";
      break;
    case "chung-chi-du-lich":
      formTitle.textContent = "Đăng ký xin cấp chứng chỉ nghiệp vụ Du lịch";
      document.getElementById("service-fee").textContent = "150,000 VNĐ";
      break;
    case "xac-nhan-vay-von":
      formTitle.textContent = "Đăng ký xác nhận vay vốn";
      document.getElementById("service-fee").textContent = "Miễn phí";
      break;
    case "cap-bu-mien-giam-hoc-phi":
      formTitle.textContent = "Đăng ký xác nhận cấp bù tiền miễn giảm học phí";
      document.getElementById("service-fee").textContent = "Miễn phí";
      break;
    case "so-uu-dai-giao-duc":
      formTitle.textContent = "Đăng ký xác nhận sổ ưu đãi trong giáo dục";
      document.getElementById("service-fee").textContent = "Miễn phí";
      break;
    case "phuc-khao-diem":
      formTitle.textContent = "Đăng ký phúc khảo điểm thi kết thúc học phần";
      document.getElementById("service-fee").textContent = "50,000 VNĐ";
      break;
    case "dang-ky-hoc-lai":
      formTitle.textContent = "Đăng ký học lại (đối với sinh viên liên thông)";
      document.getElementById("service-fee").textContent = "30,000 VNĐ";
      break;
    case "kiem-tra-tieng-anh":
      formTitle.textContent = "Đăng ký kiểm tra năng lực tiếng Anh";
      document.getElementById("service-fee").textContent = "200,000 VNĐ";
      break;
    default:
      formTitle.textContent = "Đăng ký dịch vụ";
      document.getElementById("service-fee").textContent = "30,000 VNĐ";
  }

  // Hiển thị form
  formContainer.style.display = "flex";
}

// Hàm ẩn form đăng ký dịch vụ
function hideServiceForm() {
  const formContainer = document.getElementById("service-form-container");
  formContainer.style.display = "none";
}

// Hàm xử lý khi submit form
function submitServiceForm() {
  // Kiểm tra các trường bắt buộc
  const reason = document.getElementById("service-reason").value;

  if (!reason) {
    alert("Vui lòng nhập lý do đăng ký dịch vụ!");
    return;
  }

  // Trong thực tế, đây sẽ là API call để gửi đăng ký dịch vụ
  alert(
    'Đăng ký dịch vụ thành công! Bạn có thể theo dõi trạng thái xử lý trong danh sách "Dịch vụ đã đăng ký".'
  );

  // Ẩn form
  hideServiceForm();

  // Làm mới danh sách dịch vụ đã đăng ký (trong thực tế sẽ gọi API)
  // refreshServiceList();
}

// Hàm xử lý khi click vào nút xem chi tiết
function viewServiceDetail(serviceId) {
  // Trong thực tế, đây sẽ là API call để lấy chi tiết dịch vụ
  alert("Đang tải thông tin chi tiết của dịch vụ #" + serviceId);
}

// Hàm xử lý khi click vào nút tải xuống
function downloadServiceDocument(serviceId) {
  // Trong thực tế, đây sẽ là API call để tải tài liệu
  alert("Đang tải xuống tài liệu của dịch vụ #" + serviceId);
}

// Hàm xử lý khi click vào nút chỉnh sửa
function editServiceRequest(serviceId) {
  // Trong thực tế, đây sẽ là API call để lấy thông tin và hiển thị form chỉnh sửa
  alert("Đang mở form chỉnh sửa cho dịch vụ #" + serviceId);
}

// Hàm tìm kiếm dịch vụ
function searchServices() {
  const searchInput = document
    .querySelector(".search-box input")
    .value.toLowerCase();
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item) => {
    const serviceName = item
      .querySelector(".service-name")
      .textContent.toLowerCase();
    if (serviceName.includes(searchInput)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Hàm lọc dịch vụ theo loại
function filterServicesByType(type) {
  const serviceCategories = document.querySelectorAll(".service-category");

  if (type === "") {
    // Hiển thị tất cả
    serviceCategories.forEach((category) => {
      category.style.display = "block";
    });
  } else {
    // Chỉ hiển thị loại được chọn
    serviceCategories.forEach((category) => {
      if (category.getAttribute("data-type") === type) {
        category.style.display = "block";
      } else {
        category.style.display = "none";
      }
    });
  }
}

// Khởi tạo các sự kiện khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  // Gắn sự kiện cho nút tìm kiếm
  const searchButton = document.querySelector(".search-box button");
  if (searchButton) {
    searchButton.addEventListener("click", searchServices);
  }

  // Gắn sự kiện cho dropdown lọc
  const filterSelect = document.querySelector(".filter-options select");
  if (filterSelect) {
    filterSelect.addEventListener("change", function () {
      filterServicesByType(this.value);
    });
  }

  // Gắn sự kiện cho các nút trong bảng dịch vụ đã đăng ký
  const viewButtons = document.querySelectorAll(".view-btn");
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const serviceId =
        this.closest("tr").querySelector("td:first-child").textContent;
      viewServiceDetail(serviceId);
    });
  });

  const downloadButtons = document.querySelectorAll(".download-btn");
  downloadButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const serviceId =
        this.closest("tr").querySelector("td:first-child").textContent;
      downloadServiceDocument(serviceId);
    });
  });

  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const serviceId =
        this.closest("tr").querySelector("td:first-child").textContent;
      editServiceRequest(serviceId);
    });
  });
});
