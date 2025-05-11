/**
 * Utility functions for the student portal
 */

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

// Format datetime
function formatDateTime(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

// Get current semester
function getCurrentSemester() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  // First semester: September to January (9-1)
  // Second semester: February to June (2-6)
  // Summer semester: July to August (7-8)

  let semester, academicYear;

  if (month >= 9 && month <= 12) {
    // First semester of current year
    semester = 1;
    academicYear = `${year}-${year + 1}`;
  } else if (month >= 1 && month <= 1) {
    // First semester of previous year
    semester = 1;
    academicYear = `${year - 1}-${year}`;
  } else if (month >= 2 && month <= 6) {
    // Second semester
    semester = 2;
    academicYear = `${year - 1}-${year}`;
  } else {
    // Summer semester
    semester = 3;
    academicYear = `${year - 1}-${year}`;
  }

  return {
    semester,
    academicYear,
    display: `Học kỳ ${semester}, năm học ${academicYear}`,
  };
}

// Get week number
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Get current week
function getCurrentWeek() {
  const now = new Date();
  const weekNumber = getWeekNumber(now);

  // Calculate start and end of week
  const start = new Date(now);
  start.setDate(now.getDate() - now.getDay() + 1); // Monday

  const end = new Date(now);
  end.setDate(now.getDate() + (7 - now.getDay())); // Sunday

  return {
    weekNumber,
    start,
    end,
    display: `Tuần ${weekNumber} (${formatDate(start)} - ${formatDate(end)})`,
  };
}

// Validate email
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate phone number (Vietnam)
function validatePhone(phone) {
  const re =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
  return re.test(String(phone));
}

// Validate password strength
function validatePassword(password) {
  // At least 8 characters, at least one uppercase letter, one lowercase letter, and one number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(String(password));
}

// Generate random ID
function generateRandomId(prefix = "", length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = prefix;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Copy to clipboard
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Show toast notification
function showToast(message, type = "info", duration = 3000) {
  // Create toast container if it doesn't exist
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  // Add icon based on type
  let icon;
  switch (type) {
    case "success":
      icon = "fa-check-circle";
      break;
    case "error":
      icon = "fa-exclamation-circle";
      break;
    case "warning":
      icon = "fa-exclamation-triangle";
      break;
    default:
      icon = "fa-info-circle";
  }

  toast.innerHTML = `
    <div class="toast-icon"><i class="fa ${icon}"></i></div>
    <div class="toast-message">${message}</div>
    <button class="toast-close"><i class="fa fa-times"></i></button>
  `;

  // Add to container
  toastContainer.appendChild(toast);

  // Show toast with animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Add close button functionality
  const closeButton = toast.querySelector(".toast-close");
  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  });

  // Auto remove after duration
  setTimeout(() => {
    if (toast.parentNode === toastContainer) {
      toast.classList.remove("show");
      setTimeout(() => {
        if (toast.parentNode === toastContainer) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }
  }, duration);
}

// Export functions
window.utils = {
  formatCurrency,
  formatDate,
  formatDateTime,
  getCurrentSemester,
  getCurrentWeek,
  validateEmail,
  validatePhone,
  validatePassword,
  generateRandomId,
  debounce,
  copyToClipboard,
  showToast,
};
