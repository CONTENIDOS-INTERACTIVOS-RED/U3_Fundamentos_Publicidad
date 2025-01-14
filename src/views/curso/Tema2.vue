<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Formatos publicitarios digitales'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.overflow-hidden


    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Lo invitamos a conocer algunos de los principales formatos publicitarios digitales.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] #[em Banners] 
    
    p.mb-5 Se pueden considerar varias definiciones, entre las cuales se encuentran: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Guart, R. y López, J.")
          
            p De acuerdo a lo establecido por Guart y López (2020), es el formato estándar en la publicidad <em>online</em>, también denominada publicidad display. Es un anuncio publicitario que puede incluir imágenes, textos, audios y videos, y que, por lo general, aparece en la cabecera o el lateral de una página web o insertado entre sus contenidos. Existen diferentes tamaños: <em>banner, megabanner, skycrapers, robapáginas</em>, botones, entre otros, y normalmente enlazan a una página web del anunciante.
          div(numero="2" titulo="Estrade et al. ")
          
            p Según Estrade et al. (2015), los banners son una herramienta clave en las estrategias de publicidad en línea, dado que permiten a las marcas promocionar sus productos o servicios de manera visual y atractiva, aprovechando el tráfico web para aumentar la visibilidad y el reconocimiento de la marca.
          div(numero="3" titulo="Somalo, N.")
            
            p Somalo (2017), los define como elementos gráficos aunque, en algunos casos, se les puede agregar sonido, pero es una práctica en desuso por lo molesto e invasivo que le resulta al usuario. Adquiere denominaciones diferentes, según sea su forma, tamaño y presentación. Se suele llamar <em>banner</em> al formato de 468 x 60 horizontal, <em>skyscrapper</em> o <em>banner</em> vertical al formato 90 x 560 vertical, robapáginas al 300 x 300 que se incrusta en el centro, pastilla al 90 x 90 o 60 x 90, que se suele colocar en los laterales, entre otros. 
          div(numero="4" titulo="Martinez et al.")
          
            p Martinez et al. (2015), indica que un banner es un formato publicitario en Internet. Esta forma de publicidad <em>online</em>, consiste en incluir una pieza publicitaria dentro de una página web. Prácticamente en la totalidad de los casos, su objetivo es atraer tráfico hacia el sitio web del anunciante, que paga por su inclusión. La mayoría de los usuarios los miran aunque no suelen hacer clic. Aun así, se utilizan como una herramienta de <em>marketing</em>.
    
    p.mb-5 La efectividad de un <em>banner</em> depende de varios factores: 

    .row.mb-5
      .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-2.p-3.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-bold.mb-1 Primero
              p.mb-0 Diseño
      .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-2.p-3.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-bold.mb-1 Segundo
              p.mb-0 Ubicación en la página
      .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-2.p-3.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-bold.mb-1 Tercero
              p.mb-0 Relevancia del contenido
      .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-2.p-3.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-bold.mb-1 Cuarto
              p.mb-0 Acción u objetivo que incluye
    
    p.mb-5 Las ventajas de un <em>banner</em> son:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5.mb-4 Alta visibilidad y alcance

              p Los <em>banners</em>, debido a su ubicación estratégica en sitios web de alto tráfico, tienen una alta visibilidad. Son una herramienta eficaz para captar la atención de usuarios y generar tráfico hacia un sitio web o producto específico.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5.mb-4 Fácil integración con estrategias multicanal

              p Los <em>banners</em> se pueden integrar fácilmente con otras tácticas de <em>marketing</em> digital, como el <em>marketing</em> en redes sociales, la optimización en motores de búsqueda (SEO), y la analítica web, lo que ayuda a crear campañas publicitarias multicanal, consistentes.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5.mb-4 Segmentación y personalización

              p Con herramientas como Google Ads, los <em>banners</em> pueden ser segmentados, según diversos criterios (edad, ubicación, intereses), lo que permite llegar de manera más efectiva a unas audiencias específicas. Esto mejora la efectividad de la campaña y el retorno de la inversión.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5.mb-4 Medición precisa del rendimiento

              p Los <em>banners</em> permiten un seguimiento detallado de su rendimiento, a través de métricas como impresiones, clics, conversiones, y CTR (Click Through Rate). Esto facilita la optimización en tiempo real, de las campañas publicitarias.
    
    p.mb-5 Y sus desventajas son: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/11.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Ceguera del <em>banner</em>")
          
            p Los usuarios de internet se han acostumbrado tanto a los <em>banners</em> que muchos los ignoran inconscientemente, lo que reduce su efectividad. Este fenómeno se conoce como "ceguera al <em>banner</em>", y puede afectar negativamente las tasas de clics y conversiones.
          div(numero="2" titulo="Bloqueadores")
          
            p El uso de bloqueadores de anuncios está en aumento, lo que significa que una proporción significativa de usuarios no ve los <em>banners</em>, lo que limita la visibilidad de los anuncios y, por lo tanto, la efectividad de las campañas publicitarias.
          div(numero="3" titulo="Costos de implementación y mantenimiento")
            
            p Aunque los <em>banners</em> pueden ser efectivos, el costo de su implementación y mantenimiento puede ser elevado, especialmente si se usan plataformas populares con alta competencia. Además, la creación de <em>banners</em> visualmente atractivos puede requerir recursos significativos.
          div(numero="4" titulo="Baja tasa de conversión")
          
            p A pesar que los <em>banners</em> pueden generar una alta cantidad de clics, la conversión (la acción final que el anunciante busca, como una compra o suscripción) puede ser baja. Esto es especialmente cierto si el contenido del <em>banner</em> no es lo suficientemente relevante o atractivo.
    
    p.mb-5 Ejemplo de un banner: 

    .row.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/12.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/13.png", alt="", data-aos="zoom-out").mt-4.mt-lg-0

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Videos publicitarios 
    
    p.mb-5 Para conocer sobre los videos publicitarios, lo invitamos a escuchar el siguiente pódcast.


  
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
      .col-lg-6.order-1
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Fundamentos de la innovación estratégica"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )

    p.mb-5 Desde el año 2020, el formato de pantalla vertical está reemplazando al formato horizontal tradicional, para convertirse en el formato predeterminado para la producción y el consumo de video móvil. Sus ventajas son:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/15.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Alta capacidad de atracción")
          
            p Son efectivos para captar la atención del usuario, debido a su formato visual y dinámico.
          div(numero="2" titulo="Mayor compromiso y generación de interacciones")
          
            p Suelen generar un mayor nivel de interacción (me gusta, comentarios, compartidos) en comparación con otros tipos de contenido. Esto se debe a que los usuarios encuentran los videos más atractivos y fáciles de consumir.
          div(numero="3" titulo="Mejora la retención de información")
            
            p Son una excelente herramienta para transmitir información compleja, de manera clara y comprensible. Los usuarios tienden a recordar más el contenido audiovisual que el contenido escrito, lo que aumenta la eficacia de los mensajes.
          div(numero="4" titulo="Fomenta la conversión")
          
            p Son una herramienta que permite incitar a los usuarios a realizar una acción específica, como suscribirse a un canal, realizar una compra o visitar un sitio web. Esto se debe a que, al ser interactivos y emocionales, pueden motivar una respuesta más rápida del consumidor.
          div(numero="5" titulo="Aumento en el alcance orgánico")
          
            p En plataformas como Facebook e Instagram, tienen una mayor probabilidad de ser mostrados en los feeds de los usuarios, lo que aumenta el alcance orgánico de las publicaciones.
    
    p.mb-5 Y sus desventajas son:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.justify-content-center.p-4.p-md-5
            .col-md-8.mb-3.mb-lg-0.col-lg-5
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7
              h5.mb-4 Alta carga de producción

              p Requieren de una inversión significativa de tiempo, esfuerzo y recursos. Esto incluye la preproducción, grabación, edición y optimización del video.

          .row.align-items-center.justify-content-center.p-4.p-md-5
            .col-md-8.mb-3.mb-lg-0.col-lg-5
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7
              h5.mb-4 Desafíos en plataformas competitivas

              p La cantidad de videos publicados cada día en plataformas como Instagram o YouTube es muy alto, lo que aumenta la competencia y puede ocasionar que el video no se destaque.
          .row.align-items-center.justify-content-center.p-4.p-md-5
            .col-md-8.mb-3.mb-lg-0.col-lg-5
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7
              h5.mb-4 Necesitan Internet y pueden ser pesados

              p Requieren una conexión a Internet estable para ser visualizados, lo cual puede ser un inconveniente para usuarios en áreas con acceso limitado a Internet o con planes de datos móviles limitados.
          .row.align-items-center.justify-content-center.p-4.p-md-5
            .col-md-8.mb-3.mb-lg-0.col-lg-5
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7
              h5.mb-4 Desinterés

              p Si no es lo suficientemente atractivo o relevante para la audiencia, puede generar el efecto contrario al esperado, afectando negativamente la imagen de la marca.
          .row.align-items-center.justify-content-center.p-4.p-md-5
            .col-md-8.mb-3.mb-lg-0.col-lg-5
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7
              h5.mb-4 Dependencia de los algoritmos de las plataformas

              p Si el algoritmo no favorece el contenido o si la empresa no cuenta con una estrategia sólida de distribución, el alcance y la visibilidad de los videos pueden verse limitados.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los videos en redes sociales ofrecen grandes ventajas como la alta capacidad de atracción, compromiso y la posibilidad de generar conversiones rápidas. Sin embargo, también presentan desafíos como los altos costos de producción, la alta competencia y la dependencia de los algoritmos de visibilidad.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Anuncios nativos 


    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.mb-5.align-items-center.justify-content-center
          .col-lg-8.order-2.order-lg-1
            p Estrade et al. (2015), enseña que los anuncios nativos son una forma de publicidad digital que se integra de manera fluida dentro del contenido editorial de una página web o plataforma. A diferencia de los anuncios tradicionales que se ven claramente como "publicidad", los anuncios nativos se diseñan para que se asemejen al contenido de la página en la que aparecen, proporcionando una experiencia más orgánica y menos intrusiva para el usuario. Adicional, se presentan las siguientes características, ventajas y desventajas de los anuncios nativos. 
            p.text-bold Características:
          .col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/22.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
    
    

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src='@/assets/curso/tema2/23.png', alt='')
              .custom-image-card__text.p-4
                h5.mb-2.text-center Integración con el contenido
                p.mb-0 Los anuncios nativos están diseñados para adaptarse al estilo y formato del contenido en el que se publican, como artículos, videos o publicaciones en redes sociales.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/24.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Transparencia
                p.mb-0 Aunque los anuncios nativos se integran dentro del contenido, generalmente se marcan como "Patrocinado" o "Anuncio" para mantener la transparencia.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/25.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Experiencia menos intrusiva
                p.mb-0 Al estar alineados con el diseño y el tono del contenido, los anuncios nativos no interrumpen la experiencia del usuario y pueden ser percibidos como más atractivos.
    
    p.mb-5 Ventajas:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Mayor tasa de aceptación" :icon="require('@/assets/bullets/1.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Mayor tasa de aceptación
            p Debido a que los anuncios nativos no interrumpen la experiencia del usuario, es más probable que sean aceptados y que los usuarios interactúen con ellos.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/26.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Mejor rendimiento en plataformas móviles" :icon="require('@/assets/bullets/2.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Mejor rendimiento en plataformas móviles
            p Dado que los anuncios nativos se adaptan bien a los dispositivos móviles, tienen un mayor rendimiento en plataformas como Facebook, Instagram o Twitter.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/27.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="<em>Mejor engagement</em>" :icon="require('@/assets/bullets/3.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 <em>Mejor engagement</em>
            p Los usuarios tienden a interactuar más con los anuncios nativos, porque se sienten menos como una interrupción y más como una recomendación de contenido.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/28.png', alt='', style="width: 100%;")
    
    p.mb-5 Desventajas:

    .bg-full-width-2.bg-fondo-6
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src='@/assets/curso/tema2/29.png', alt='')
              .custom-image-card__text.p-4
                h5.mb-2.text-center Requiere más esfuerzo creativo
                p.mb-0 Los anuncios nativos deben diseñarse para integrarse perfectamente con el contenido, lo que requiere un mayor esfuerzo creativo y una comprensión profunda del contenido editorial.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/30.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Puede ser percibido como engañoso
                p.mb-0 Si los usuarios no identifican correctamente que se trata de un anuncio, puede generar desconfianza o rechazo hacia la marca.
    
    p.mb-5 Ahora, conozcamos los diferentes tipos de anuncios nativos:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/31.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Anuncios en redes sociales")
          
            p En plataformas como Facebook, Instagram y Twitter, los anuncios nativos se muestran directamente en el <em>feed</em> de los usuarios. Se presentan como publicaciones regulares de otros usuarios, pero son patrocinadas y tienen una etiqueta como "Promocionado" o "Patrocinado".
          div(numero="2" titulo="Anuncios en portales de noticias")
          
            p En sitios web de noticias, se integran directamente con los artículos. Con frecuencia, estos anuncios son artículos patrocinados o "historias" que aparecen de manera similar a los contenidos editoriales, pero están marcados como contenido patrocinado.
          div(numero="3" titulo="Anuncios en plataformas de video")
            
            p Regularmente, aparecen como videos promocionados que se insertan en el <em>feed</em> de recomendaciones o entre videos en los resultados de búsqueda. Estos anuncios se ven similares a otros videos de la plataforma y pueden contener información relevante sobre productos o servicios.
          div(numero="4" titulo="Anuncios en plataformas de contenido curado")
          
            p Taboola y Outbrain, son plataformas que colocan anuncios nativos en sitios web mediante "recomendaciones de contenido", al final de los artículos. Estos anuncios se presentan como artículos relacionados, pero son en realidad, enlaces patrocinados.
          div(numero="5" titulo="Anuncios en aplicaciones móviles")
          
            p En aplicaciones móviles como Candy Crush o Angry Birds, los anuncios nativos, frecuentemente se presentan como parte de la experiencia del juego, ya sea mediante contenido patrocinado que se muestra entre niveles, o mediante promociones que se integran de manera orgánica con el flujo del juego.
          

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/269688 " target="_blank" rel="noopener noreferrer") Marketing digital que funciona: planifica tu estrategia e invierte con cabeza. Madrid, LID Editorial España.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/167260" target="_blank" rel="noopener noreferrer") Martin-Guart, R. & Botey López, J. (2020). Glosario de marketing digital. Editorial UOC. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/269981?page=1" target="_blank" rel="noopener noreferrer") Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital. LID Editorial España.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://thevideovalley.com/video-marketing-para-pequenas-empresas" target="_blank" rel="noopener noreferrer") The video valley. Las mejores ideas de video marketing para pequeñas empresas. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://banner.fotor.com/" target="_blank" rel="noopener noreferrer") Herramienta para crear banner en línea, gratuitos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.canva.com/templates/?query=videos" target="_blank" rel="noopener noreferrer") Vídeos publicitarios.
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Fvn02zDUZrc" target="_blank" rel="noopener noreferrer") ONiAd - Publicidad Programática. (2019). ¿Qué es un BANNER? - ¡Te enseñamos a hacer un buen banner!. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Saw54mlKRwk" target="_blank" rel="noopener noreferrer") Jose Javy Ferrer. (2021). Nuno Gomez - Como distribuir tu dinero en videos.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=lDz4pjArwnY " target="_blank" rel="noopener noreferrer") Powerhouse Affiliate. (2021). Most Affiliates Fail With Native <em>Ads</em> - Here’s the Truth About Native <em>Ads</em>.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
              

  
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
