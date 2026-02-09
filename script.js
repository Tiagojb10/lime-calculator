function calculateLime() {
    const currentPH = parseFloat(document.getElementById("currentPH").value);
    const targetPH = parseFloat(document.getElementById("targetPH").value);
    const factor = parseFloat(document.getElementById("soilType").value);
    const cce = parseFloat(document.getElementById("cce").value);

    const resultBox = document.getElementById("result");

    // Show message box
    resultBox.classList.remove("hidden");

    // Validation
    if (isNaN(currentPH) || isNaN(targetPH) || isNaN(factor) || isNaN(cce)) {
        resultBox.textContent = "⚠️ Please fill in all fields.";
        return;
    }

    if (targetPH <= currentPH) {
        resultBox.textContent = "⚠️ Target pH must be higher than current pH.";
        return;
    }

    // Calculations
    const limeRequired = (targetPH - currentPH) * factor;
    const adjustedLime = limeRequired / (cce / 100);

    // Display result
    resultBox.innerHTML = `
        ✅ Lime Required: ${limeRequired.toFixed(2)} t/ha<br>
        ✅ Adjusted Lime (CCE): ${adjustedLime.toFixed(2)} t/ha
    `;
}
