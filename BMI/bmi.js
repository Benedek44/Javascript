function Calculate(event)
{
    event.preventDefault(); 
    const mass = parseFloat(document.getElementById("Mass").value);
    const height = parseFloat(document.getElementById("Height").value);

    const BMI = mass / Math.pow(height, 2);

    document.getElementById("Bmi").innerText = `BMI: ${BMI.toFixed(2)}`;
}