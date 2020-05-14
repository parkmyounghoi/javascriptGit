var inputBtn = document.getElementById("btnA");
var outputBtn = document.getElementById("btnB");
var mDiv = document.getElementById("printArea");

var student_ary = [];

inputBtn.onclick = function(){
    mDiv.innerHTML = "입력버튼 누름";
    var student = {
        "이름":document.getElementById("name").value,
        "국어":document.getElementById("kor").value,
        "수학":document.getElementById("math").value,
        "영어":document.getElementById("eng").value
    };
    student.getSum = function(){
        return parseInt(this.국어) + parseInt(this.수학) + parseInt(this.영어);
    };
    student_ary.push(student);
    console.log(student_ary);
}

outputBtn.onclick = function(){
    var output ="";
    for (const student of student_ary) {
        for (const key in student) {
            const element = student[key];
            if(key != 'getSum')
                output += key + ": "+ element + " ";
            else{
                output += "총점 : "+student[key]();
                // output += "총점 : "+element();
            }
        }
        output += "<br>";
    }
    mDiv.innerHTML = output;
}