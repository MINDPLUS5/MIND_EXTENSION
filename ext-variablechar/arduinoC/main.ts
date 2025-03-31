
enum COMANDO {
    //% block="F"
    F,
    //% block="B"
    B,
    //% block="L"
    L,
    //% block="R"
    R,
    //% block="S"
    S,
    //% block="Q"
    Q,
    //% block="Z"
    Z,
    //% block="E"
    E,
    //% block="C"
    C,
}


//% color="#5e36e7" iconWidth=50 iconHeight=40
namespace variablechar {
    //% block="guardar en Char [STR]" blockType="command"
    //% STR.shadow="string" STR.defl=Datos_serie
    export function guardarenletra(parameter: any, block: any) {
        let str = parameter.STR.code
        Generator.addObject(``, `char`,`letter;`);
        Generator.addCode(`letter =${str};`);
    }

    //% block="Char = [LETRA] " blockType="boolean"
    //% LETRA.shadow="dropdown" LETRA.options="COMANDO" LETRA.defl="COMANDO.F"
    export function compararletra(parameter: any, block: any) {
        let letra = parameter.LETRA.code
        Generator.addCode(`letter == '${letra}'`);
    }
}
