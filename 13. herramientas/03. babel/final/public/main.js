"use strict";

var _alumno$domicilio2, _alumno$domicilio2$re;

const alumno = {
  nombre: 'Juan',
  domicilio: {
    calle: 'Colon',
    numero: 45,
    cp: 30110,
    referencias: [{
      id: 0,
      nombre: 'Cibeles'
    }, {
      id: 1,
      nombre: 'Nueva Italia'
    }]
  }
};
console.log(alumno.domicilio.referencias[0].nombre);

if (alumno.domicilio && alumno.domicilio.referencias && alumno.domicilio.referencias[0]) {
  var _alumno$domicilio, _alumno$domicilio$ref;

  console.log((_alumno$domicilio = alumno.domicilio) === null || _alumno$domicilio === void 0 ? void 0 : (_alumno$domicilio$ref = _alumno$domicilio.referencias[0]) === null || _alumno$domicilio$ref === void 0 ? void 0 : _alumno$domicilio$ref.nombre);
}

console.log((_alumno$domicilio2 = alumno.domicilio) === null || _alumno$domicilio2 === void 0 ? void 0 : (_alumno$domicilio2$re = _alumno$domicilio2.referencias[10]) === null || _alumno$domicilio2$re === void 0 ? void 0 : _alumno$domicilio2$re.nombre);