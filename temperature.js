function celsiusToFahrenheit(t1) {
    var celsiusTemperature = t1;
    var celsiusToFahr = celsiusTemperature * 9 / 5 + 32;
    document.write("temperature in celsius is  " + celsiusTemperature + " \xB0C  when converted to farenhit is " + celsiusToFahr + " \xB0F ")
}

function fahrenheitToCelsius(t2) {
    var fahrenheitTemperature = t2;
    var fahrenheitTocelsius = (fahrenheitTemperature - 32) * 5 / 9;
    document.write("<br> temperature in farenhit is  " + fahrenheitTemperature + " \xB0F  when converted to celsius is " + fahrenheitTocelsius + " \xB0C ")

}
let t1 = prompt("Enter temperature in celsius")
let t2 = prompt("Enter temperature in farenhit")
celsiusToFahrenheit(t1);
fahrenheitToCelsius(t2);