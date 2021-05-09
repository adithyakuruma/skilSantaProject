function studentlist(number, callback) {
    object.name="adithya kondra";
    object.age="21";
    object.number=number;
    console.log(object);
    callback();
}

function student() {
    document.write(object.name+"<br>");
    document.write(object.age+"<br>");
    document.write(object.number+"<br>");

}
let object={
    name:"adithya",
    age:"22"
};
studentlist(1234567890, student);
