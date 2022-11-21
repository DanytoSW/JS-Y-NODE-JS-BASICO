function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cuánto tarda en degradarse una bolsa de plástico común?",
      respuesta: "500 años",
      distractores: ["250 años", "270 años", "800 años"],
    },
    {
      pregunta: "Los dispositivos electrónicos conectados a la corriente eléctrica consumen energía",
      respuesta: "verdadero",
      distractores: ["falso", "tal vez si", "tal vez no"],
    },
    {
      pregunta: "¿Qué material se usa como alternativa para producir papel?",
      respuesta: "todas las anteriores",
      distractores: ["carbonato calcico mas resina", "papel de hierba", "ninguna de las anteriores"],
    },
    {
      pregunta: "Aparte de los contenedores azules (papel y cartón), amarillos (plásticos y latas), blancos (envases y residuos de medicamentos), verde (vidrio)... ¿sabes para qué se usa el contenedor rojo",
      respuesta: "para insecticidas y desechos peligrosos",
      distractores: ["ninguna de las anteriores", "ropa", "materiales no reciclables"],
    },
    {
      pregunta: "¿Cuánto debería durar un Teléfono inteligente para compensar su daño ambiental?",
      respuesta: "232 años",
      distractores: ["250 años", "500 años", "328 años"],
    },
    {
      pregunta: "¿Que tanto se esta calentando el planeta?",
      respuesta: "En realidad mucho",
      distractores: ["muy poco", "ni mucho ni poco", "no se esta calentando"],
    },
    {
      pregunta: "¿Estamos en problemas",
      respuesta: "si, los riesgos aumentan cada vez mas a largo plazo",
      distractores: ["no tanto como para preocuparnos", "los riesgos son muy graves", "no hay riesgos"],
    },
    {
      pregunta: "¿Que tanto subiran los mares?",
      respuesta: "Tanto que hasta se perderan costas terrenales",
      distractores: ["no subiran los niveles", "subiran pero sin riesgo", "subiran un poco"],
    },
    {
      pregunta: "¿La humanidad son los mayores causantes?",
      respuesta: "no todos, ya que hay personas que toman medidas para no alterar el clima",
      distractores: ["nadie, es normal el cambio climatico", "si, toda la humanidad", "son los animales"],
    },
    {
      pregunta: "¿Cómo ha estado el medio ambiente ultimamente?",
      respuesta: "mal",
      distractores: ["perfecto", "bien", "preocupante"],
    },
    {
      pregunta: "¿Es necesario clasificar la basura?",
      respuesta: "si",
      distractores: ["no", "mas o menos", "ninguna de las anteriores"],
    },
    {
      pregunta: "¿Cuando se deberian implementar las medidas de proteccion al medio ambiente?",
      respuesta: "inmediato",
      distractores: ["a medio plazo", "a corto plazo", "a largo plazo"],
    },
    {
      pregunta: "¿Quén es el causante de daños y consecuencias al planeta?",
      respuesta: "todas las anteriores",
      distractores: ["la deforestacion", "el dioxido de carbono", "el ser humano"],
    },
    {
      pregunta: "¿En que lugar debemos a empezar a cuidar nuestro entorno?",
      respuesta: "todas las amteriores",
      distractores: ["en nuestro hogar", "en nuestra comunidad", "en entidades externas"],
    },
    {
      pregunta: "¿Que tan importante es el medio ambiente para los humanos?",
      respuesta: "Fundamental",
      distractores: ["mas o menos", "casi no es importante", "no es importante"],
    },
    {
      pregunta: "¿Cual es la principal fuente de contaminación?",
      respuesta: "procesos industriales",
      distractores: ["plastico", "combustibles fosiles", "petroleo"],
    },
    {
      pregunta: "¿Como puede contribuir una empresa para mitigar el impacto ambiental?",
      respuesta: "todas las anteriores",
      distractores: ["reciclar", "hacer procesos amigables con el medio ambiente", "capacitar sobre la problematica ecologica"],
    },
    {
      pregunta: "¿Que son los gases de efecto invernadero?",
      respuesta: "Gases que forman parte de la atmósfera natural y antropogenica",
      distractores: ["Gases que forman de la atmósfera antropogenica ", "Gases que forman parte de la atmósfera natural", "ninguna de las anteriores"],
    },
    {
      pregunta: "¿Qué porcentaje de responsabilidad tiene el ser humano en el cambio climático?",
      respuesta: "95%",
      distractores: ["85%", "75%", "65%"],
    },
    {
      pregunta: "¿Qué sector genera más cantidad de gases de efecto invernadero?",
      respuesta: "la produccion energetica",
      distractores: ["la agricultura", "el transporte", "la educacion"],
    },
  ];
  