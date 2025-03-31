
enum MOTORS {
    //% block="M1"
    1,
    //% block="M2"
    2,
    //% block="M3"
    3,
    //% block="M4"
    4,
    
}

enum GIRO {
    //% block="Avanza"
    FORWARD,
    //% block="Retrocede"
    BACKWARD,
}


//% color="#AA278D" iconWidth=50 iconHeight=40
namespace motorL293D{
    //% block="Motor [MOTORS] [GIRO] Vel [VEL]" blockType="command"
    //% MOTORS.shadow="dropdownRound" MOTORS.options="MOTORS" MOTORS.defl="MOTORS.1"
    //% GIRO.shadow="dropdownRound" GIRO.options="GIRO" GIRO.defl="GIRO.1"
    //% VEL.shadow="range" VEL.params.min=0 VEL.params.max=255 VEL.defl=180
    
    export function activarMotor(parameter: any, block: any) {
        let motors = parameter.MOTORS.code
        let giro = parameter.GIRO.code
        let vel = parameter.VEL.code
        Generator.addInclude('motorL293D', '#include <AFMotor.h>');
        Generator.addObject(`motor${motors} `, `AF_DCMotor`, `motor${motors}(${motors});`);
        Generator.addSetup(`motor${motors}`, `motor${motors}.run(RELEASE);`);
        Generator.addCode(`motor${motors}.setSpeed(${vel});\n\tmotor${motors}.run(${giro});`);        
    }

    //% block="Detener [MOTORS]" blockType="command"
    //% MOTORS.shadow="dropdownRound" MOTORS.options="MOTORS" MOTORS.defl="MOTORS.1"
    export function detenerMotor(parameter: any, block: any) {
        let motors = parameter.MOTORS.code
        Generator.addCode(`motor${motors}.setSpeed(0);\n\tmotor${motors}.run(RELEASE);`); 
    }


}


