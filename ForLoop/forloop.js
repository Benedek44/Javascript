function Calculate(event)
{
    event.preventDefault(); 
    const word = document.getElementById("Word").value;

    for (let i = 0; i < word.length; i++)
    {
        document.getElementById("result").innerHTML += `${word.charAt(i)} <br>`;
    }
}