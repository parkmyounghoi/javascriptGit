var student = {};

student.이름 = "박명회";
student.성별 = "남자";
student.장래희망 = "책저자";
student.취미 = "등산,10키로달리기";
student.특기 = "스타크래프트빨무";

student.toString = function(){
    var output = "";
    for (const key in this) {
        console.log("key = "+key);
        const element = this[key];
        if(key != 'toString')
            output = output + (element+" ");
    }
    console.log("output = "+ output);
    return output;
}
student.toString();