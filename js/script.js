const cel = document.getElementById("celcius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");
const ran = document.getElementById("rankine");

const inputs = document.getElementsByClassName("input");

for (let aux = 0; aux < inputs.length; aux++) {let input = inputs[aux];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fah.value = (value * 1.8) + 32;
                kel.value = value + 273.15;
                ran.value = (value * 1.8) + 491.67
                break;
            case "fahrenheit":
                cel.value = (value - 32) / 1.8;
                kel.value = ((value - 32) / 1.8) + 273.15;
                ran.value = (value - 32) + 491.67;
                break;
            case "kelvin":
                cel.value = value - 273.15;
                fah.value = ((value - 273.15) * 1.8) + 32;
                ran.value = ((value - 273.15) * 1.8) + 491.67;
                break;
            case "rankine":
                cel.value=(value - 491.67) / 1.8;
                fah.value=(value - 491.67) + 32;
                kel.value=((value-491.67)/1.8)+273.15;
                break;
        }
    });
}
