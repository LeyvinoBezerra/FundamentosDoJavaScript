function cumprimentar(horario, nome)
{
    var frase;
    
    if(horario < 12)
    {
        frase = "Bom dia ";
    }
    else if(horario < 18)
    {
        frase = "Boa tarde ";
    }
    else
    {
        frase = "Boa noite ";
    }
    
    frase = frase + nome + "<br>";
    document.write(frase);
}

function somar(par1, par2)
{
    var resultado;
    resultado = par1 + par2;
    return resultado;
}