function Calculate(event)
{
    event.preventDefault(); 
    const number = document.getElementById("Number").value;

    let average = 0;
    let numberLength = number.toString().length;

    for (let i = 0; i < numberLength; i++)
    {
        average += parseInt(number.charAt(i));
    }
    document.getElementById("result").innerHTML += `The average of digits is: ${average / numberLength} <br>`;
    document.getElementById('submitBtn').disabled = true;
}

function resetForm() {
    document.getElementById('form').reset();

    document.getElementById('submitBtn').disabled = false;

    document.getElementById('result').textContent = '';
}
