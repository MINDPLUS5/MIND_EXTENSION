enum PIN {
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4,
    //% block="5"
    5,
    //% block="6"
    6,
    //% block="7"
    7,
    //% block="8"
    8,
    //% block="9"
    9,
    //% block="10"
    10,
    //% block="11"
    11,
    //% block="12"
    12,
    //% block="13"
    13,
    //% block="A0"
    14,
    //% block="A1"
    15,
    //% block="A2"
    16,
    //% block="A3"
    17,
    //% block="A4"
    18,
    //% block="A5"
    19,
}

//% color="#0c91b8" iconWidth=50 iconHeight=40
namespace softwareserial {
    //% block="SoftwareSerial  TX [BUTTONTX] RX [BUTTONRX]" blockType="command"
    //% BUTTONTX.shadow="dropdown" BUTTONTX.options="PIN" BUTTONTX.defl="PIN.2"
    //% BUTTONRX.shadow="dropdown" BUTTONRX.options="PIN" BUTTONRX.defl="PIN.3"
    export function iniciarSoftwareSerial(parameter: any, block: any) {
        let buttontx = parameter.BUTTONTX.code
        let buttonrx = parameter.BUTTONRX.code
        Generator.addInclude('softwareserial', '#include <SoftwareSerial.h>');
        Generator.addObject(` `, `SoftwareSerial`, `BTSerial(${buttontx},${buttonrx});`);
        Generator.addSetup(``, `BTSerial.begin(9600);`);
    }

    //% block="¿Hay datos en Soft Serial?" blockType="boolean"
    export function habilitarsoftserial(parameter: any, block: any) {
        Generator.addCode(`BTSerial.available()`);
    }

    //% block="Leer datos Soft Serial" blockType="reporter"
    export function serialwrite(parameter: any, block: any) {
        Generator.addCode(`BTSerial.read()`);
    }

    //% block="Escribir en Soft Serial [STR]" blockType="command"
    //% STR.shadow="string" STR.defl=hello
    export function setLineWidth(parameter: any, block: any) {
        let str = parameter.STR.code
        Generator.addCode(`BTSerial.write(${str});`)
    }
}
