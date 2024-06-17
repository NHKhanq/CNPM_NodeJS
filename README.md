# NGHIÊN CỨU NODEJS VÀ XÂY DỰNG ỨNG DỤNG BÁN HÀNG TRỰC TUYẾN

## Mục Đích

Đề tài này tập trung vào nghiên cứu và phát triển một ứng dụng bán hàng trực tuyến sử dụng Node.js. Mục tiêu của dự án là xây dựng một hệ thống có các chức năng cơ bản của một trang thương mại điện tử như hiển thị sản phẩm, chỉnh sửa và tìm kiếm sản phẩm.
## Các Chức Năng Chính

1. **Hiển thị sản phẩm** 
2. **Thêm, sửa, xóa sản phẩm.** 
3. **Hiển thị thông tin chi tiết sản phẩm.** 
4. **Đặt mua sản phẩm** 

## Công Nghệ Sử Dụng

1. **NodeJS:** Sử dụng Node.js làm nền tảng chính để xây dựng server và xử lý logic của ứng dụng.

2. **Express.js:** Sử dụng Express.js để xây dựng RESTful API, giúp quản lý và truy cập dữ liệu từ cơ sở dữ liệu.

3. **MongoDB:** Lưu trữ dữ liệu sản phẩm, người dùng và đơn đặt hàng trong cơ sở dữ liệu NoSQL MongoDB.

6. **Handlebars:** Sử dụng Template engine Handlebars để xây dựng giao diện người dùng đẹp và tương tác.

## Hướng Dẫn Cài Đặt và Chạy Ứng Dụng

1. **Cài Đặt Git và Node.js:**
   - Cài đặt Git để làm việc với các repository từ xa, chia sẻ mã nguồn và làm việc nhóm.
   - Tải Git [tại đây](https://www.git-scm.com/downloads).
   - Cài đặt NodeJS và npm (Node Package Manager) [tại đây](https://nodejs.org/en).

2. **Cài Đặt MongoDB:**
   - Cài đặt MongoDB dùng để lưu trữ các dữ liệu của dự án và truy xuất các thông tin khi người dùng yêu cầu và trả về giao diện.
   - Tải MongoDB [tại đây](https://www.mongodb.com/try/download/shell).
   - Tạo Database có tên __nodejs-dev__ và tạo các Collection lần lượt là __logins__, __products__ và __orders__.

3. **Clone Repository:**
   - Mở terminal, di chuyển đến thư mục cần Clone dự án và chạy lệnh: `git clone https://github.com/NHKhanq/csn-da21ttb-NguyenHoangKhang-webbanhang-nodejs.git`.
   - 
4. **Cài Đặt Dependencies:**
   - Di chuyển vào thư mục mới tạo bằng lệnh: `cd csn-da21ttb-NguyenHoangKhang-webbanhang-nodejs`.
   - Cài đặt các Dependencies bằng lệnh: `npm install`.
   - 
5. **Chạy Ứng Dụng:**
   - Chạy lệnh `npm start` để khởi động server.
   - Mở trình duyệt và truy cập __http://localhost:5000__ để xem ứng dụng.