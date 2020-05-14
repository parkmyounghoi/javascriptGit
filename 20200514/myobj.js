var obj = {
    a:10,
    b:20,
    c:30,
    d:function(){
        alert("obj.d 메서드 입니다.")
    }
};
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        // obj.a
        // obj["a"]
        const element = obj[key];
        console.log("key = "+key);
        console.log("element = "+element);
        if(key=="d")
        {
            element();
        }
    }
}

alert("출력");
with(obj){
    alert(a);
    alert(b);
    alert(c);
}

var aa = {};
aa.a = 100;
alert(aa.a);

var aa = {};
aa.b = 200;
alert(aa.b);

window.setInterval(function(){console.log(1)},1000);

var aa = 2000;

window.aa = 1000;
alert(window.aa);

alert(aa);