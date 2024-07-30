function mostrarExplicacion(valor) {
    const explicacionDiv = document.getElementById("explicacion");

    switch (valor) {
      case "conciliación en derecho":
        explicacionDiv.innerHTML = "<p><strong>Conciliación:</strong> El conflicto en las relaciones interpersonales, es connatural con la vida misma. Por ello Ius Populi utiliza y promueve los MASC, ello permite que el conflicto no solamente no escale a uno de mayor identidad, sino que las relaciones no se destruyan en mayor grado, y a su vez se obtenga beneficios de alto impacto como son menores costos, mayor agilidad en la resolución del conflicto y alta confiabilidad, con efectos de tránsito a cosa juzgada y mérito ejecutivo. <br> <em>a) Conciliación en derecho.</em> <br> Contamos con profesionales abogados con alta experiencia, que podrán representar sus intereses ante conciliadores de un centro autorizado de conciliación o ante autoridades en cumplimiento de funciones conciliatorias o jurisdiccionales. Siendo la conciliación en Derecho una herramienta para que las partes puedan encontrar una solución efectiva para sus controversias por medio de un acuerdo pronto, efectivo y autogestionado por las partes. <br> <em> b) Conciliación en Equidad. </em> <br> Mecanismo autocompositivo de resolución de conflictos por medio del cual dos o más personas gestionan por sí mismas la solución de sus diferencias con la ayuda de un tercero calificado, denominado conciliador cuya acta debidamente aceptada, presta mérito ejecutivo y hace tránsito a cosa juzgada. Ley 2220 de 2022.</p>";
         break;
      case "civil":
        explicacionDiv.innerHTML = "<p><strong>Derecho Civil:</strong> Nuestro equipo cuenta con abogados expertos en disputas relativas a sus controversias patrimoniales en donde estén en discusión sus derechos particulares relativos a la persona, a sus bienes, sus contratos, sucesiones, obligaciones y derechos.</p>";
        break;
      case "laboral":
        explicacionDiv.innerHTML = "<p><strong>Derecho Laboral:</strong> Asistimos a nuestros usuarios en aquellos aspectos relacionados con sus condiciones de trabajo, sus  derechos y obligaciones como trabajador o empleador, salario, prestaciones sociales, seguridad social integral, horario de trabajo y derecho laboral colectivo. así como sobre las sanciones por incumplimiento. </p>";
        break;
      case "penal":
        explicacionDiv.innerHTML = "<p><strong>Derecho Penal:</strong> Nuestro equipo calificado de abogados expertos en derecho penal, brinda asesoría personalizada para cada caso presentado, garantizando la confidencialidad de la información suministrada. Realizamos un análisis detallado del caso y generamos un plan jurídico, si es denunciado o denunciante, con el fin único de defender los derechos de los usuarios, indistintamente de su condición ante la ley. </p>";
        break;
      case "administrativo y constitucional":
        explicacionDiv.innerHTML = "<p><strong>Derecho Administrativo y Constitucional:</strong> Al ser un derecho regulador de las relaciones entre la Administración pública con los ciudadanos, gestionamos, tramitamos y reclamamos ante las administraciones, cualquier problemática que pueda surgir con los ciudadanos, así como ejercemos la Defensa de los derechos de los ciudadanos. Igual lo asesoramos en  licitaciones públicas, y reclamaciones de pagos pendientes por parte de la administración.</p>";
        break;
      case "derecho en propiedad horizontal":
        explicacionDiv.innerHTML = "<p><strong>Derecho en Propiedad Horizontal:</strong> Con una debida planeación y una organización, unida a nuestra experiencia y conocimiento específico, Gerenciamos su copropiedad a través de profesionales en el área, con base en la ley 675 de 2001, reglamento de propiedad y jurisprudencia vigente. Donde identificamos las necesidades y deficiencias en las áreas comunes y privadas. Elaboramos y orientamos reglamentos internos y manuales de convivencia Revisamos y elaboramos legalmente contratos y documentos. Efectuamos el cobro prejurídico y jurídico de la cartera morosa, en donde realizamos, una localización física del deudor, una comunicación directa con él o sus garantes, presentamos unas opciones de pago para la normalización de la deuda, realizamos investigaciones de bienes muebles e inmuebles para eventuales embargos y secuestros. <br> Realizamos un Recibo Técnico y Legal de Propiedades nuevas con profesionales en cada área con un estudio y análisis normativo, urbanístico, arquitectónico, documental, estructural, hidráulico y eléctrico de los bienes comunes de la propiedad, de conformidad con la Ley 1480 de 2011 y Decreto 735 de 2013.</p>";
        break;
      default:
    }
  }
  