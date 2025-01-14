<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Publicidad en redes sociales y motores de búsqueda'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-1
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La publicidad digital se refiere a un grupo de estrategias y tácticas utilizadas para la promoción de productos o servicios, mediante medios en línea o digitales, tales como páginas web, redes sociales y buscadores. Esta modalidad de publicidad permite que las compañías alcancen de forma más exacta y eficaz, a su público objetivo, utilizando las herramientas de segmentación y análisis, que brindan dichas plataformas.
        p(data-aos="fade-left") Según Medina (2016), la publicidad digital se caracteriza por su capacidad para interactuar directamente con el consumidor, ofreciendo experiencias personalizadas y medibles. Además, destaca la importancia de adaptarse a las tendencias tecnológicas y de consumo, como el uso de dispositivos móviles y la integración de la inteligencia artificial en las estrategias publicitarias.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La publicidad digital, representa una evolución significativa en las prácticas publicitarias tradicionales, incorporando herramientas y técnicas que permiten una comunicación más directa, personalizada y efectiva con el público objetivo.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Publicidad en redes sociales

    p(data-aos="fade-left").mb-5 Conforme a lo indicado por Marqués & Fresno (2015), una red  social es un conjunto de individuos dentro de una estructura de relaciones. Esa estructura es un soporte casi “virtual”, un tejido, una net que se origina entre los individuos interrelacionados por vínculos de amistad, de colaboración, o de otro tipo de interés. De aquí se pueden extraer sus elementos fundamentales: 

    .bg-full-width.bg-fondo-6
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center El nodo o vértice
              p.mb-0.text-center Los actores o individuos (N).
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Las interrelaciones o relaciones
              p.mb-0.text-center El vínculo o link entre dos actores (L). 
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center El sustrato o sistema
              p.mb-0.text-center La red (<em>network</em>).
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center La representación gráfica de la red
              p.mb-0.text-center El gráfico.
    
    p.mb-5 Es así como el intercambio de recursos que tiene lugar dentro de la red, genera un comportamiento social y no solo personal, es decir, que el usuario está inmerso en una estructura de relaciones. Dentro de los diferentes tipos de publicidad en redes sociales, se deben considerar:

    h2.mb-5(data-aos="flip-up") a. Plataformas populares

    .row.mb-5
      .col-lg-8
        p Son aquellas plataformas en línea, ampliamente utilizadas por los usuarios, donde los anunciantes pueden crear y distribuir campañas. Estas plataformas proporcionan herramientas para segmentar audiencias, gestionar presupuestos y medir resultados. Algunas de las plataformas más populares incluyen: Facebook Ads, Instagram Ads, Twitter Ads, LinkedIn Ads.
      .col-lg-4 
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7
              h5.mb-4 Facebook

              p Con más de 2.8 mil millones de usuarios activos, tiene herramientas avanzadas de segmentación por edad, ubicación, intereses y comportamiento. Los anuncios pueden ser imágenes, videos, carruseles, entre otros.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7
              h5.mb-4 Instagram

              p Promociona productos de manera creativa, mediante imágenes y videos. Incluye anuncios en el <em>feed</em>, en las historias y en la sección de explorar.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7
              h5.mb-4 Twitter ahora X

              p Comparte contenido en tiempo real, son publicaciones breves para campañas de concientización o promociones rápidas. Incluye anuncios de <em>tweets</em> promocionados, tendencias patrocinadas, y cuentas promovidas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7
              h5.mb-4 LinkedIn

              p Ofrece anuncios dirigidos a profesionales, según industria, cargo, y otros datos laborales. Es especialmente efectiva para empresas que desean conectarse con otras empresas, o reclutar personal.  

    

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8.order-1
        h2.mb-4(data-aos="flip-up") b. Segmentación de público o audiencia
        p Los anunciantes pueden segmentar sus campañas, según datos demográficos, comportamientos de los usuarios, ubicación geográfica, entre otros.
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Giráldez, (2020), indica que la marca debe entender a quién se dirige. Es fundamental si quiere garantizar el éxito de cualquier estrategia de <em>marketing</em> digital. Si quiere que los consumidores la quieran, tiene que conocerlos. Y no es suficiente con la definición tradicional del target, que no es más que una forma fría y anticuada de segmentar a la audiencia, en función de criterios sociodemográficos.
        h2.mb-4(data-aos="flip-up") c. Métricas claves
        p Alcance, interacción, clics, conversiones, retorno sobre inversión (ROI).
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Publicidad en motores de búsqueda
    
    .row.mb-5
      .col-lg-8.order-2
        p Estudiemos la diferencia entre optimización de motores de búsqueda (SEO) y marketing en motores de búsqueda (SEM). 
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Según Solis (2017), el SEO (<em>Search Engine Optimization</em>) es el conjunto de estrategias y prácticas que buscan mejorar la visibilidad y el posicionamiento de un sitio web, en los resultados de los motores de búsqueda, como Google, Bing, y Yahoo. El objetivo principal del SEO es asegurar que un sitio web sea fácilmente encontrado por los usuarios que buscan información relacionada con los productos, servicios o temas que el sitio ofrece.

        p(data-aos="fade-left").mb-4  Solis detalla cómo el SEO abarca varios aspectos claves:

      .col-lg-4.order-1
          figure
            img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in").mt-4.mt-lg-0
    
    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src="@/assets/curso/tema1/16.svg", alt="", style="max-width: 812px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="29%" y="78%" numero="+")
                  h5 Investigación de palabras claves

                  p Selección de términos de búsqueda relevantes para el negocio o contenido.

                .bg-color-white.box-shadow.p-3(x="29%" y="19%" numero="+")
                  h5 Optimización técnica

                  p Mejoras en la estructura del sitio web, velocidad de carga, adaptabilidad a dispositivos móviles y optimización de URLs.

                .bg-color-white.box-shadow.p-3(x="71%" y="19%" numero="+")
                  h5 Contenido relevante

                  p Creación de contenido que responda a las preguntas y necesidades de los usuarios.
                  
                .bg-color-white.box-shadow.p-3(x="74%" y="78%" numero="+")
                  h5 <em>Link building</em>

                  p Estrategias para aumentar la cantidad y calidad de los enlaces externos, que apuntan al sitio, mejorando su autoridad.
    
    p.mb-5 El SEM (Search Engine Marketing) utiliza herramientas que los buscadores ofrecen para el desarrollo de estrategias de posicionamiento a través de anuncios publicitarios pagos, como es el caso de Google Adwords; esto requiere la selección de palabras claves, creación de anuncios y gestión de pauta. Se pueden realizar a través de PPC (Pago Por Clic) y PCP (Costo Por Clic):

    .bg-full-width.bg-fondo-7.mb-4

      .row.justify-content-center.align-items-center
        .col-lg-6(data-aos="zoom-in")
          img.img-fluid(src='@/assets/curso/tema1/17.svg', style="max-width:610px", alt="").mx-auto.mx-lg-0.me-lg-auto.mb-4.mb-lg-0

        .col-lg-5(data-aos="fade-left")
          .pt-5.pe-5
            ul.lista-ul
              li.mb-2.d-flex
                i.fas.fa-check-circle
                | PPC (Pago por Clic). Es un modelo de publicidad digital, en el que los anunciantes pagan cada vez que un usuario hace clic en uno de sus anuncios. Este modelo se utiliza principalmente en motores de búsqueda y en plataformas de publicidad en línea, como Google Ads, Bing Ads, y las redes sociales (por ejemplo, Facebook Ads e Instagram Ads).
              li.mb-2.d-flex
                i.fas.fa-check-circle
                | Análisis de ROI. Es el retorno sobre la inversión, es una medición utilizada para evaluar la eficacia y la rentabilidad de una inversión en publicidad digital. En el ámbito de la publicidad digital, el análisis ROI permite medir el beneficio obtenido por cada unidad monetaria invertida en una campaña publicitaria.
          
           	 
    
    p.mb-5 El SEM tiene las siguientes:

    .row.align-items-center.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/18.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Ventajas") 
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | Permite que un producto o servicio sea reconocido rápidamente.
              li.mb-2
                i.fas.fa-check-circle
                | Permite competir con empresas grandes y con alto posicionamiento en el mercado.
              li.mb-2
                i.fas.fa-check-circle
                | El ROI es más rápido.
              li.mb-2
                i.fas.fa-check-circle
                | Permite llegar a mercados muy específicos, porque permite un alto nivel de segmentación.
          div(numero="2" titulo="Desventajas") 
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | La compra de palabras claves para el desarrollo de la publicidad suele ser costosa.
              li.mb-2
                i.fas.fa-check-circle
                | Es un tipo de comunicación invasiva que el mercado no ha buscado y, por lo tanto, puede generar rechazo.
              li.mb-2
                i.fas.fa-check-circle
                | Requiere compromiso en el desarrollo de la gestión y optimización.
              


        


                  
                
  
  //
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Según Medina (2016), una agencia de publicidad es una organización especializada en diseñar, planificar y ejecutar estrategias de comunicación publicitaria, para sus clientes. Estas estrategias buscan captar la atención del público objetivo, transmitir mensajes persuasivos y, en última instancia, generar un impacto positivo en las ventas y el posicionamiento de marca.

    h2.mb-5(data-aos="fade-up") Características principales de una agencia de publicidad

    .row.mb-5

      .col-lg-8

        p(data-aos="fade-left").mb-4 Creatividad. Proponen ideas innovadoras para diferenciar a sus clientes en el mercado. 
        
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          p.mb-0  De acuerdo con Gutiérrez Colmener (2014), la creatividad se define como la capacidad humana para generar ideas originales, útiles y valiosas, que permiten resolver problemas o desarrollar nuevas oportunidades, en diversos contextos. La creatividad no es un don exclusivo de ciertos individuos, sino una habilidad que puede ser fomentada y desarrollada mediante la práctica, la apertura a nuevas experiencias y la disposición para asumir riesgos.
        
        p(data-aos="fade-left").mb-4 Además, el autor identifica algunos factores claves que fomentan la creatividad, como son:

      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/2.png', data-aos='zoom-in')

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src='@/assets/curso/tema1/3.png', alt='')
              .custom-image-card__text.p-4
                h5.mb-2.text-center Curiosidad y exploración
                p.mb-0 La disposición para cuestionar y buscar nuevas perspectivas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Flexibilidad mental
                p.mb-0 La capacidad de considerar múltiples enfoques para un mismo problema.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Persistencia
                p.mb-0 El esfuerzo constante para superar obstáculos y perfeccionar ideas.


    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En el entorno empresarial, la creatividad se convierte en un recurso estratégico para adaptarse a los cambios del mercado, diseñar productos innovadores y establecer conexiones significativas con los clientes. Según Gutiérrez Colmener (2014), su desarrollo es esencial, tanto a nivel individual como organizacional.


    .row.mb-5
      .col-lg-8

        p(data-aos="fade-left").mb-4 Estrategia. Diseñan planes basados en el análisis del público objetivo, la competencia y las tendencias del mercado.

        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Palacios Acero (2012), la estrategia se define como un conjunto de decisiones y acciones planificadas, que permiten a una organización alcanzar sus objetivos, adaptarse a los cambios del entorno, y mantenerse competitiva. Estas decisiones están fundamentadas en el análisis de los recursos disponibles, las oportunidades del mercado, y los retos del entorno.

        p(data-aos="fade-left") En el contexto empresarial, la estrategia se enfoca en:

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")


    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Definir la dirección de la empresa") Establecer metas claras y el camino para lograrlas.
          p(numero="2" titulo="Asignar recursos") Determinar cómo distribuir los recursos financieros, humanos y materiales, para maximizar resultados.
          p(numero="3" titulo="Crear ventajas competitivas") Identificar aquello que diferencia a la empresa y la hace única frente a sus competidores.
          p(numero="4" titulo="Adaptarse al entorno") Responder eficazmente a las dinámicas del mercado, como tendencias, tecnología y competencia.


    p(data-aos="fade-left").mb-4 De manera general, la estrategia proporciona una hoja de ruta para el éxito sostenible, ayudando a las empresas a alinearse con su visión y su misión.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Versatilidad
              p.mb-0 Se adaptan a distintos formatos y canales, desde medios tradicionales hasta digitales. Es la capacidad de adecuarse a diferentes tipos de textos, medios de comunicación, distintos objetivos, públicos, estilos, etc.).

      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Ejecución
              p.mb-0 Garantizan la implementación efectiva de las campañas en los tiempos y plazos establecidos.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Estructura organizativa

    p(data-aos="fade-left").mb-5 Según Selva Ruiz (2019), algunos de los roles destacados en las agencias publicitarias, son:
    

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src="@/assets/curso/tema1/info1.svg", alt="", style="max-width: 812px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="65%" y="3%" numero="+")
                  h5 Creativos publicitarios
                  p Redactores y directores de arte que trabajan en la concepción y diseño de campañas publicitarias. Su función principal es la de transformar el mensaje, en piezas creativas impactantes.

                .bg-color-white.box-shadow.p-3(x="-3%" y="25%" numero="+")
                  h5 Cuentas
                  p Actúan como intermediarios entre la agencia y el cliente, garantizando que las expectativas del cliente se traduzcan en resultados concretos. Tienen un papel estratégico y de comunicación.

                .bg-color-white.box-shadow.p-3(x="103%" y="25%" numero="+")
                  h5 Planificadores de medios
                  p Se encargan de analizar y seleccionar los medios más adecuados para las campañas, asegurando la máxima efectividad en el alcance del público objetivo.
                  
                .bg-color-white.box-shadow.p-3(x="-3%" y="70%" numero="+")
                  h5 Planificación estratégica
                  p Este perfil conecta la investigación de mercado con la creatividad, desarrollando estrategias que guíen las campañas hacia el cumplimiento de los objetivos comerciales y de comunicación.
                  
                .bg-color-white.box-shadow.p-3(x="103%" y="70%" numero="+")
                  h5 Producción
                  p Aseguran que las ideas creativas se ejecuten con calidad, gestionando recursos y tiempos para la entrega final.
                  

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Agencias y marcas

    p(data-aos="fade-left").mb-5 Comencemos el estudio de esta temática, observando el siguiente video.


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8c6tdN8r0M8?si=Xd8yHHXCFWKPQaSS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p(data-aos="fade-left").mb-5 A continuación, se detalla una comparación entre los tipos de agencias publicitarias, así como también las ventajas y desventajas.

    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Según su propósito.
    .tabla-a.mb-5
      table
        thead
          tr
            th Tipo de agencia
            th Enfoque
            th Tamaño del cliente
            th Alcance
            th Ventajas
            th Descripción

        tbody
          tr
            td Grandes redes
            td Soluciones integrales
            td Multinacionales
            td Global
            td 
              | - Acceso a recursos globales.
              br
              | - Consistencia en mercados diversos.
              br
              | - Experiencia comprobada
            td
              | - Costos elevados.
              br
              | - Falta de personalización.
              br
              | - Procesos burocráticos.
          tr
            td Boutiques creativas
            td Creatividad personalizada
            td Empresas medianas y pequeñas
            td Local o específico
            td
              | - Creatividad y originalidad
              br
              | - Relación cercana con clientes
              br
              | - Mayor flexibilidad
            td
              | - Limitaciones en servicios integrales.
              br
              | - Alcance reducido.
              br
              | - Recursos limitados.
          tr
            td Agencias digitales
            td Estrategias digitales
            td Startups y tecnológicas
            td Digital
            td
              | - Adaptación a tendencias digitales
              br
              | - Acceso a herramientas avanzadas.
              br
              | - Rapidez en ejecución.
            td
              | - Enfoque limitado al entorno online.
              br
              | - Dificultad para integrar campañas offline.
              br
              | - Competencia creciente.



    h2(data-aos="fade-left").mb-5 Marcas

    h3(data-aos="fade-left").mb-3 Marcas internacionales

    p(data-aos="fade-left").mb-4 A continuación, se enuncian algunos ejemplos de agencias publicitarias, de acuerdo al tipo.


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Grandes redes

              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Ogilvy & Mather
                li.mb-2
                  i.fas.fa-check-circle
                  | McCann Worldgroup
                li.mb-2
                  i.fas.fa-check-circle
                  | BBDO

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Boutiques creativas

              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Droga5
                li.mb-2
                  i.fas.fa-check-circle
                  | Wieden+Kennedy
                li.mb-2
                  i.fas.fa-check-circle
                  | David The Agency

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Agencias digitales

              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | VMLY&R
                li.mb-2
                  i.fas.fa-check-circle
                  | R/GA
                li.mb-2
                  i.fas.fa-check-circle
                  | Accenture Interactive

    h3(data-aos="fade-left").mb-3 Marcas nacionales

    p(data-aos="fade-left").mb-4 En Colombia, las grandes redes de agencias publicitarias se destacan por su creatividad y cumplimiento. Algunas de las principales agencias son:


    .row.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="DDB Colombia") Reconocida como la agencia más efectiva en Colombia, según los Effie Awards. DDB es una red internacional que trabaja con clientes de alto perfil como Bavaria y Claro, destacándose por campañas innovadoras y efectivas. 
          p(numero="2" titulo="Sancho BBDO") Es parte de la red internacional BBDO. Su experiencia abarca campañas publicitarias integrales que incluyen medios tradicionales y digitales. 
          p(numero="3" titulo="Tribal Colombia") Pertenece al grupo DDB y se especializa en estrategias digitales, demostrando liderazgo en la implementación de campañas de #[em marketing] online.
          p(numero="4" titulo="OMD y Zenith Media") Estas agencias se centran en la planificación de medios y estrategias de comunicación, ofreciendo servicios especializados en la optimización de la inversión publicitaria.
          p(numero="5" titulo="MullenLowe") Parte del grupo MullenLowe, esta agencia es conocida por su creatividad disruptiva y enfoque en campañas que generan impacto social, además de éxito comercial.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/12.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
