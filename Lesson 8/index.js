// Đầu tiên phải lấy phần tử HTML và lưu biến của 
//javascript
// Tạo ra 1 biến var<tên biến>
// Câu lệnh giúp lấy được thẻ html: document.querySelector(" Thẻ mình muốn chọn ")
var div = document.querySelector(".one")
console.log(div)
// Cách style 1 thẻ html trong js
// Cú pháp: tên thẻ.style.tên thuộc tính = "giá trị"
div.style.backgroundColor = "blue"
div.style.fontFamily = "arial"
// Đê sử lí 1 event thì cần cú pháp như sau:
// Tên thẻ.addEventListener("tên event",hàm sử lí event)
div.addEventListener("keypress",changeBackground)
function changeBackground(event){
    div.style.backgroundColor = "red";
}