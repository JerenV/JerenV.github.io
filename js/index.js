function diffuseBomb(inputArray)
{
    var colourArray = ["white","black","purple","red","green","orange"];
    var lastWire = "";
    var explodedStatus = 0;
    for(i = 0; i < inputArray.length; i++)
    {
        for(j = 0; j < colourArray.length; j++)
        {
            if(inputArray[i] == colourArray[j])
            {
                if (colourArray[j] == "white" && (lastWire == "white" ||lastWire == "black"||lastWire == "purple" ))
                {
                    explodedStatus = 1;  
                }
                if (colourArray[j] == "black" && lastWire == "white")
                {
                    explodedStatus = 1;  
                }
                if (colourArray[j] == "green" && (lastWire == "purple"|| lastWire == "black"))
                {
                    explodedStatus = 1;  
                }
                if (colourArray[j] == "orange" && lastWire == "purple")
                {
                    explodedStatus = 1;  
                }
                if (lastWire == "red" && !(colourArray[j] == "green"))
                {
                    explodedStatus = 1;
                }
                if (lastWire == "orange" && !(colourArray[j] == "red" || colourArray[j] == "black"))
                {
                    explodedStatus = 1;
                }
                if (lastWire == "green" && !(colourArray[j] == "orange" || colourArray[j] == "white"))
                {
                    explodedStatus = 1;
                }
                lastWire = colourArray[j];
            }

        }
    }
    if (explodedStatus == 1)
    {
        console.log('boom');
    }
    else 
    {
        console.log('bomb diffused');
    }
};
diffuseBomb(["white","orange","green","white"]);

function simplify(inputString)
{
    numerator = Number(inputString.split(' ')[0]);
    denominator = Number(inputString.split(' ')[1]);
    gcd = gcd(numerator,denominator);
return numerator/gcd + ' ' + denominator/gcd ;
}
function gcd(a,b)
{
    remainder = a%b;
    while(remainder != 0)
    {
        remainder = a%b
        a = b;
        b = remainder;
    }
    return a
}
console.log(simplify('51478 5536'))
function kaprekar(start,end)
{
    kaprekarArray = []
    for(i = start ; i<=end ; i++)
    {
        squareString = i*i;
        squareString = squareString.toString()
        firstHalf = parseInt(squareString.substr(0,(squareString.length/2)),10);
        secondHalf = parseInt(squareString.substr((squareString.length/2),squareString.length/2));
        if ((firstHalf + secondHalf) == i)
        {
            kaprekarArray.push(i);
        }
    }
    return kaprekarArray
}
console.log(kaprekar(101,9000));
function kaprekarRoutineDec(number)
{
    number = number.toString();
    number = number.split('');
    for(i = 0; i<4-number.length ;i++)
    {
        number.push('0')
    }
    number = number.map(Number);
    number = number.sort(function(a, b){return b-a});
    return number;
}
console.log(kaprekarRoutineDec(5922));
function kaprekarRoutineAsc(number)
{
    number = number.toString();
    number = number.split('');
    for(i = 0; i<4-number.length ;i++)
    {
        number.push('0')
    }
    number = number.map(Number);
    number = number.sort();
    return number;
}
function kaprekarConstant(number)
{
    iterations = 0
    while (number != 6174)
    {
        number = parseInt(kaprekarRoutineDec(number).join(''),10)-parseInt(kaprekarRoutineAsc(number).join(''),10)
        iterations ++;
    }
    return iterations
}
console.log(kaprekarConstant(5455));
