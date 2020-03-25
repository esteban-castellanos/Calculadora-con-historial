
function sumar(...operandos)//utilizamos ...paramentros, cuando no sabes la cantidad de parametros que va a ingresar el usuario
{
    return operandos.reduce((valor1, valor2) =>
    {
        return Number(valor1) + Number(valor2);
    });
}
function restar(...operandos)
{
    return operandos.reduce((valor1, valor2) =>
    {
        return Number(valor1) - Number(valor2);
    });
}
function multiplicar(...operandos)
{
    return operandos.reduce((valor1, valor2) =>
    {
        return Number(valor1) * Number(valor2);
    });
}
function dividir(...operandos)
{
    return operandos.reduce((valor1, valor2)=>
    {
        return Number(valor1) / Number(valor2);
    });
}

module.exports = 
{
    "sumar": sumar,
    "restar": restar,
    "multiplicar": multiplicar,
    "dividir": dividir
}