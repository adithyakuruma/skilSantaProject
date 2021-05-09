function ageCalculator() {
    let userinput = document.getElementById("DOB").value;
    let dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        return false;
    } else {

        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        if (age >= 18 && age <= 44) {

            window.location.replace("https://selfregistration.cowin.gov.in");
            return document.getElementById("result").innerHTML =
                "Age is: " + age + " years. ";
        } else{
            return document.getElementById("result").innerHTML =
                "Age is " + age + " years ," +  "Not eligible for vaccination";
}
    }
}