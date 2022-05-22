(function () {

    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function (e) {
        if (formulario.nombre.value == 0) {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };

    var validarFecha = function (e) {
        if (formulario.fecha.value == 0) {
            alert("Completa el campo Fecha de Nacimiento");
            e.preventDefault();
        }
    };

    var validarRadio = function (e) {
        if (formulario.sexo[0].checked == true ||
            formulario.sexo[1].checked == true) {
        } else {
            alert("Completa el campo sexo");
            e.preventDefault();
        }
    };
    var validarProvincia = function (e) {
        if (formulario.prov.value == 0) {
            alert("Elegí una provincia de la lista");
            e.preventDefault();
        }
    };

    var validarEmail = function (e) {
        if (formulario.correo.value == 0) {
            alert("Completa el campo email");
            e.preventDefault();
        }
    };

    var validarTelefono = function (e) {
        if (formulario.phone.value == 0) {
            alert("Completa el campo Teléfono");
            e.preventDefault();
        }
    };


    var validar = function (e) {
        validarNombre(e);
        validarFecha(e);
        validarRadio(e);
        validarProvincia(e);
        validarEmail(e);
        validarTelefono(e)
    };


    formulario.addEventListener("submit", validar);




}())
