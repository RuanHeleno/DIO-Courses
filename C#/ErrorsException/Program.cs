// See https://aka.ms/new-console-template for more information
int a = 100, b = 0;
double resultado = 0;

try {
    resultado = Dividir(a, b);
    Console.WriteLine("{0} dividido por {1} = {2}", a, b, resultado);

} catch (DivideByZeroException ex) when(a < 0) {
    Console.WriteLine(ex.Message);
} catch (Exception ex) {
    Console.WriteLine(ex.Message);
} finally {
    Console.WriteLine("finalmente a divisão foi finalizada");
}

static double Dividir(int a, int b) {
    if(y == 0) throw new DivideByZeroException("divisão");
    return (a / b);
}