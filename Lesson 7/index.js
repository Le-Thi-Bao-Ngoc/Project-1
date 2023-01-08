/*5-Câu lệnh điều kiện
+Cấu trúc: if(<điều kiện>){
    <câu lệnh>
}
else{
    <câu lệnh>
}
+ Dùng để sử lý trường hợp
*/
// Tính thương của 2 số.
var a,b; //Hiện tại giá trị của a,b là undefined
console.log(a,b)
a=10;
b=5;
if( b === 0){
    console.log("không chia được")
}    else{
    console.log("kq:",a/b)
}
// = để gán, == để so sánh
var friend = "Đức";//Có thể là đức hoặc quân hoặc phương.
// Cách 1:
if(friend == "Đức"){
    console.log("Đi ăn lạc");
}
if(friend == "Quân"){
    console.log("Đi ăn gà");
}
if(friend == "Phương"){
    console.log("Đi ăn cơm")
}
// Cách 2:
if(friend == "Đức"){
    console.log("Đi ăn lạc");
}else{
    if(friend == "Quân"){
        console.log("Đi ăn gà")
    }
    else{
        console.log("Đi ăn cơm")
    }
}
/**
 * y = biểu thức có giá trị đầu vào
 * VD: y = ax;
 *      p = ax ** 3 + by ** 2 + cz + d
 * - Hàm (Function) trong js là giúp chúng ta một công việc gì đó.
 * Nó câu đầu vào và sẽ trả cho chúng ta đầu ra.
 * - Cú pháp:
 *      function <tên hàm> (<biến đầu vào 1>,<biến đầu vào 2>,...){
 *    xử lý
 *    return <biến đầu ra>
 * }
 * -Lời gọi hàm
 *      <tên hàm> (<biến đầu vào 1>,<biến đầu vào 2>,...)
 */
// VD:

    function LoiChuc() { 
        console.log("Happy Single's Day");
    }
function TinhTuoi(namSinh){
        var tuoi = 2022 - namSinh;
        return tuoi;
}

var tuoicuaNgoc = TinhTuoi(2008);
    console.log(tuoicuaNgoc)

    function TinhToan(so){
        var pheptinh = 29 % so;
        return pheptinh;
    }
var ketqua = TinhToan(5)
    console.log(ketqua)