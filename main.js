const input = document.querySelector("#bin_input");

const convert = () => {
    const bin = input.value;
    if (! /^[01]+$/.test(bin)) return alert("Invalid bin: " + bin);

    let idx = dec = 0;
    let pow = bin.length - 1;
    while (idx < bin.length) {
        dec += parseInt(bin[idx]) * Math.pow(2, pow);
        idx++; pow--;
    }

    alert(`The binary number ${bin} is equal to the decimal number ${dec}`);
}

window.addEventListener('keydown', (e) => { if (e.key === 'Enter') convert() });