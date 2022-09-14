var obj = {
    name: 'Đinh Phương Đan',
    age: 17,
    mark: 10,
    girlFriends:['Lê Thị Trà My','Tra My'],
    eat: function (){
        console.log(this.name+ " đang ăn...");
    }
};
console.log(obj.name);
obj.eat();
obj.name = 'Đan Đinh';
console.log(obj.name);
for (var i=0;i<obj.girlFriends.length;i++){
    console.log(obj.girlFriends[i]);
}
obj.eat();
var f=0;
function demo() {
    var x=document.getElementById("abc");
   // x.innerText="Xin chào tất cả các sinh viên lớp T2207A";
    //x.innerHTML = '<i>Hello world!</i>';
    //x.style.color="red";
   // x.style.fontSize= f+ 'px';
  //  f+= 5;
    x.style.transform = 'rotate('+f+'deg)';
    f += 10;
}
function quayTron() {
    setInterval(demo,1);
}
var m=9;
var s=59;
function timer() {
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    min.innerText = m;
    sec.innerText = s;
    s--;
    if (s<0) {
        s = 59;
        m--;
    }
    if (m < 0) {
        clearInterval(si);
    }
}
    var si;
    function startTime(){
        si= setInterval(timer,1000);
}




