function Calculate(event)
{
    event.preventDefault(); 
    const length = parseFloat(document.getElementById("Length").value);
    const width = parseFloat(document.getElementById("Width").value);
    const height = parseFloat(document.getElementById("Height").value);

    const surface = 2 * (length * width + length * height + width * height)
    const volume = length * width * height;

    document.getElementById("Surface").innerText = `Surface Area: ${surface}`;
    document.getElementById("Volume").innerText = `Volume: ${volume}`;
}