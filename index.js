// Mô hình cho tính tổng
const MoHinhTong = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  tinhTongSoDuong() {
    return this.mang.filter((so) => so > 0).reduce((tong, so) => tong + so, 0);
  },
};

// Giao diện cho tính tổng
const GiaoDienTong = {
  layGiaTriNhap() {
    return document.getElementById("inputArrayTong").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultTong"
    ).textContent = `Tổng các số dương là: ${ketQua}`;
  },
  ganSuKienNutTinhTong(handler) {
    document
      .getElementById("calculateButton")
      .addEventListener("click", handler);
  },
};

// Bộ điều khiển cho tính tổng
const BoDieuKhienTong = {
  khoiTao() {
    GiaoDienTong.ganSuKienNutTinhTong(this.xuLyTinhTong);
  },
  xuLyTinhTong() {
    const dauVao = GiaoDienTong.layGiaTriNhap();
    MoHinhTong.thietLapMang(dauVao);
    const ketQua = MoHinhTong.tinhTongSoDuong();
    GiaoDienTong.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho tính tổng
BoDieuKhienTong.khoiTao();

// Mô hình cho đếm số dương
const MoHinhDem = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  demSoDuong() {
    return this.mang.filter((so) => so > 0).length;
  },
};

// Giao diện cho đếm số dương
const GiaoDienDem = {
  layGiaTriNhap() {
    return document.getElementById("inputArrayDem").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultDem"
    ).textContent = `Số lượng các số dương là: ${ketQua}`;
  },
  ganSuKienNutDem(handler) {
    document.getElementById("countButton").addEventListener("click", handler);
  },
};

// Bộ điều khiển  cho đếm số dương
const BoDieuKhienDem = {
  khoiTao() {
    GiaoDienDem.ganSuKienNutDem(this.xuLyDem);
  },
  xuLyDem() {
    const dauVao = GiaoDienDem.layGiaTriNhap();
    MoHinhDem.thietLapMang(dauVao);
    const ketQua = MoHinhDem.demSoDuong();
    GiaoDienDem.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho đếm số dương
BoDieuKhienDem.khoiTao();

// Mô hình cho tìm số nhỏ nhất
const MoHinhNhoNhat = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  timSoNhoNhat() {
    return Math.min(...this.mang);
  },
};

// Giao diện cho tìm số nhỏ nhất
const GiaoDienNhoNhat = {
  layGiaTriNhap() {
    return document.getElementById("inputArrayNhoNhat").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultNhoNhat"
    ).textContent = `Số nhỏ nhất trong mảng là: ${ketQua}`;
  },
  ganSuKienNutTimSoNhoNhat(handler) {
    document.getElementById("minButton").addEventListener("click", handler);
  },
};

// Bộ điều khiển cho tìm số nhỏ nhất
const BoDieuKhienNhoNhat = {
  khoiTao() {
    GiaoDienNhoNhat.ganSuKienNutTimSoNhoNhat(this.xuLyTimSoNhoNhat);
  },
  xuLyTimSoNhoNhat() {
    const dauVao = GiaoDienNhoNhat.layGiaTriNhap();
    MoHinhNhoNhat.thietLapMang(dauVao);
    const ketQua = MoHinhNhoNhat.timSoNhoNhat();
    GiaoDienNhoNhat.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho tìm số nhỏ nhất
BoDieuKhienNhoNhat.khoiTao();

// Mô hình cho tìm số dương nhỏ nhất
const MoHinhDuongNhoNhat = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  timSoDuongNhoNhat() {
    const soDuong = this.mang.filter((so) => so > 0);
    return soDuong.length
      ? Math.min(...soDuong)
      : "Không có số dương trong mảng";
  },
};

// Giao diện cho tìm số dương nhỏ nhất
const GiaoDienDuongNhoNhat = {
  layGiaTriNhap() {
    return document.getElementById("inputArrayDuongNhoNhat").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultDuongNhoNhat"
    ).textContent = `Số dương nhỏ nhất trong mảng là: ${ketQua}`;
  },
  ganSuKienNutTimSoDuongNhoNhat(handler) {
    document
      .getElementById("minPositiveButton")
      .addEventListener("click", handler);
  },
};

// Bộ điều khiển cho tìm số dương nhỏ nhất
const BoDieuKhienDuongNhoNhat = {
  khoiTao() {
    GiaoDienDuongNhoNhat.ganSuKienNutTimSoDuongNhoNhat(
      this.xuLyTimSoDuongNhoNhat
    );
  },
  xuLyTimSoDuongNhoNhat() {
    const dauVao = GiaoDienDuongNhoNhat.layGiaTriNhap();
    MoHinhDuongNhoNhat.thietLapMang(dauVao);
    const ketQua = MoHinhDuongNhoNhat.timSoDuongNhoNhat();
    GiaoDienDuongNhoNhat.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho tìm số dương nhỏ nhất
BoDieuKhienDuongNhoNhat.khoiTao();

// Mô hình cho tìm số chẵn cuối cùng
const MoHinhChanCuoi = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  timSoChanCuoiCung() {
    for (let i = this.mang.length - 1; i >= 0; i--) {
      if (this.mang[i] % 2 === 0) {
        return this.mang[i];
      }
    }
    return -1; // Trả về -1 nếu không có số chẵn
  },
};

// Giao diện cho tìm số chẵn cuối cùng
const GiaoDienChanCuoi = {
  layGiaTriNhap() {
    return document.getElementById("inputArrayChanCuoi").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultChanCuoi"
    ).textContent = `Số chẵn cuối cùng trong mảng là: ${ketQua}`;
  },
  ganSuKienNutTimSoChanCuoi(handler) {
    document
      .getElementById("lastEvenButton")
      .addEventListener("click", handler);
  },
};

// Bộ điều khiển cho tìm số chẵn cuối cùng
const BoDieuKhienChanCuoi = {
  khoiTao() {
    GiaoDienChanCuoi.ganSuKienNutTimSoChanCuoi(this.xuLyTimSoChanCuoi);
  },
  xuLyTimSoChanCuoi() {
    const dauVao = GiaoDienChanCuoi.layGiaTriNhap();
    MoHinhChanCuoi.thietLapMang(dauVao);
    const ketQua = MoHinhChanCuoi.timSoChanCuoiCung();
    GiaoDienChanCuoi.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho tìm số chẵn cuối cùng
BoDieuKhienChanCuoi.khoiTao();

// Mô hình cho sắp xếp mảng
const MoHinhSapXep = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  sapXepMang() {
    return this.mang.sort((a, b) => a - b);
  },
};

// Giao diện cho sắp xếp mảng
const GiaoDienSapXep = {
  layGiaTriNhap() {
    return document.getElementById("inputArraySapXep").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultSapXep"
    ).textContent = `Mảng sau khi sắp xếp là: ${ketQua.join(", ")}`;
  },
  ganSuKienNutSapXep(handler) {
    document.getElementById("sortButton").addEventListener("click", handler);
  },
};

// Bộ điều khiển cho sắp xếp mảng
const BoDieuKhienSapXep = {
  khoiTao() {
    GiaoDienSapXep.ganSuKienNutSapXep(this.xuLySapXep);
  },
  xuLySapXep() {
    const dauVao = GiaoDienSapXep.layGiaTriNhap();
    MoHinhSapXep.thietLapMang(dauVao);
    const ketQua = MoHinhSapXep.sapXepMang();
    GiaoDienSapXep.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho sắp xếp mảng
BoDieuKhienSapXep.khoiTao();

// Hàm kiểm tra số nguyên tố
function kiemTraNguyenTo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// cho tìm số nguyên tố đầu tiên
const MoHinhNguyenTo = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  timSoNguyenToDauTien() {
    for (let i = 0; i < this.mang.length; i++) {
      if (kiemTraNguyenTo(this.mang[i])) {
        return this.mang[i];
      }
    }
    return -1; // Trả về -1 nếu không có số nguyên tố
  },
};

// Giao diện cho tìm số nguyên tố đầu tiên
const GiaoDienNguyenTo = {
  layGiaTriNhap() {
    return document.getElementById("inputArrayNguyenTo").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultNguyenTo"
    ).textContent = `Số nguyên tố đầu tiên trong mảng là: ${ketQua}`;
  },
  ganSuKienNutTimNguyenTo(handler) {
    document.getElementById("primeButton").addEventListener("click", handler);
  },
};

// Bộ điều khiển cho tìm số nguyên tố đầu tiên
const BoDieuKhienNguyenTo = {
  khoiTao() {
    GiaoDienNguyenTo.ganSuKienNutTimNguyenTo(this.xuLyTimNguyenTo);
  },
  xuLyTimNguyenTo() {
    const dauVao = GiaoDienNguyenTo.layGiaTriNhap();
    MoHinhNguyenTo.thietLapMang(dauVao);
    const ketQua = MoHinhNguyenTo.timSoNguyenToDauTien();
    GiaoDienNguyenTo.hienThiKetQua(ketQua);
  },
};

// Mô hình  cho đếm số nguyên trong mảng số thực
const MoHinhSoThuc = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  demSoNguyen() {
    return this.mang.filter(Number.isInteger).length;
  },
};

// cho đếm số nguyên trong mảng số thực
const GiaoDienSoThuc = {
  layGiaTriNhap() {
    return document.getElementById("inputArraySoThuc").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById(
      "resultSoThuc"
    ).textContent = `Số lượng số nguyên trong mảng là: ${ketQua}`;
  },
  ganSuKienNutDemSoNguyen(handler) {
    document
      .getElementById("countIntegersButton")
      .addEventListener("click", handler);
  },
};

// Bộ điều khiển cho đếm số nguyên trong mảng số thực
const BoDieuKhienSoThuc = {
  khoiTao() {
    GiaoDienSoThuc.ganSuKienNutDemSoNguyen(this.xuLyDemSoNguyen);
  },
  xuLyDemSoNguyen() {
    const dauVao = GiaoDienSoThuc.layGiaTriNhap();
    MoHinhSoThuc.thietLapMang(dauVao);
    const ketQua = MoHinhSoThuc.demSoNguyen();
    GiaoDienSoThuc.hienThiKetQua(ketQua);
  },
};

// Khởi tạo ứng dụng cho đếm số nguyên trong mảng số thực
BoDieuKhienSoThuc.khoiTao();

//  so sánh số lượng số dương và số âm
const MoHinhSoSanh = {
  mang: [],
  thietLapMang(dauVao) {
    this.mang = dauVao.split(",").map(Number);
  },
  demSoLuongSoDuong() {
    return this.mang.filter((so) => so > 0).length;
  },
  demSoLuongSoAm() {
    return this.mang.filter((so) => so < 0).length;
  },
  soSanhSoDuongVaSoAm() {
    const soDuong = this.demSoLuongSoDuong();
    const soAm = this.demSoLuongSoAm();
    if (soDuong > soAm) {
      return `Số lượng số dương (${soDuong}) nhiều hơn số lượng số âm (${soAm}).`;
    } else if (soDuong < soAm) {
      return `Số lượng số âm (${soAm}) nhiều hơn số lượng số dương (${soDuong}).`;
    } else {
      return `Số lượng số dương và số lượng số âm đều bằng nhau (${soDuong}).`;
    }
  },
};

// Giao diện cho so sánh số lượng số dương và số âm
const GiaoDienSoSanh = {
  layGiaTriNhap() {
    return document.getElementById("inputArraySoSanh").value;
  },
  hienThiKetQua(ketQua) {
    document.getElementById("resultSoSanh").textContent = ketQua;
  },
  ganSuKienNutSoSanh(handler) {
    document.getElementById("compareButton").addEventListener("click", handler);
  },
};

// Bộ điều khiển cho so sánh số lượng số dương và số âm
const BoDieuKhienSoSanh = {
  khoiTao() {
    GiaoDienSoSanh.ganSuKienNutSoSanh(this.xuLySoSanh);
  },
  xuLySoSanh() {
    const dauVao = GiaoDienSoSanh.layGiaTriNhap();
    MoHinhSoSanh.thietLapMang(dauVao);
    const ketQua = MoHinhSoSanh.soSanhSoDuongVaSoAm();
    GiaoDienSoSanh.hienThiKetQua(ketQua);
  },
};

BoDieuKhienSoSanh.khoiTao();
