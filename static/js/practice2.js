const colorInput = document.getElementById('colorInput');
const borderColorInput = document.getElementById('borderColorInput');
const borderWidthSlider = document.getElementById('borderWidthSlider');
const output = document.getElementById('output');
const dummyText = document.getElementById('dummyText');

function applyStyles() {
    const color = colorInput.value;
    const borderColor = borderColorInput.value;
    const borderWidth = borderWidthSlider.value + 'px';

    dummyText.style.color = `rgb(${color})`;
    output.style.borderColor = `rgb(${borderColor})`;
    output.style.borderWidth = borderWidth;
}

colorInput.addEventListener('input', applyStyles);
borderColorInput.addEventListener('input', applyStyles);
borderWidthSlider.addEventListener('input', applyStyles);
