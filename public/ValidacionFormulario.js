document.addEventListener('DOMContentLoaded', function (){
    const form =document.getElementById('contacForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
   
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        let errorMessage = '';

        if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
            isValid = false;
            errorMessage += 'El nombre solo debe contener letras y espacios.\n';
        }

        if (!emailInput.value.includes (@)) {
            isValid = false;
            errorMessage += 'El correo electrónico debe contener @.\n';
        }

        if (!/ˆ\d+$/.test(telefonoInput.value)){
            isValid = false;
            errorMessage += 'El télefono solo debe contener números.\n';
        }

        if (isValid) {
            alert('El formulario ha sido enviado correctamente. El equipo de IusPopuli te contactará pronto.');
            form.sumit();
        } else {
            alert('Por favor, corrija los siguientes errores:\n'+errorMessage);
        }
    });

    nombreInput.addEventListener ('input', funtion() {
        this.value = this.value.replace ([/[^a-zA-Z\s]/g, '');
    });

    telefonoInput.addEventListener ('input', function() {
        this.value = this.value.replace (/\D/g,'');
    });
});
