<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Publicidad en redes sociales y motores de búsqueda'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
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

    .row.mb-5.justify-content-center
      .col-lg-8
        p Son aquellas plataformas en línea, ampliamente utilizadas por los usuarios, donde los anunciantes pueden crear y distribuir campañas. Estas plataformas proporcionan herramientas para segmentar audiencias, gestionar presupuestos y medir resultados. Algunas de las plataformas más populares incluyen: Facebook Ads, Instagram Ads, Twitter Ads, LinkedIn Ads.
      .col-md-8.col-lg-4 
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7
              h5.mb-4 Facebook

              p Con más de 2.8 mil millones de usuarios activos, tiene herramientas avanzadas de segmentación por edad, ubicación, intereses y comportamiento. Los anuncios pueden ser imágenes, videos, carruseles, entre otros.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7
              h5.mb-4 Instagram

              p Promociona productos de manera creativa, mediante imágenes y videos. Incluye anuncios en el <em>feed</em>, en las historias y en la sección de explorar.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7
              h5.mb-4 Twitter ahora X

              p Comparte contenido en tiempo real, son publicaciones breves para campañas de concientización o promociones rápidas. Incluye anuncios de <em>tweets</em> promocionados, tendencias patrocinadas, y cuentas promovidas.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7
              h5.mb-4 LinkedIn

              p Ofrece anuncios dirigidos a profesionales, según industria, cargo, y otros datos laborales. Es especialmente efectiva para empresas que desean conectarse con otras empresas, o reclutar personal.  

    

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
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
    
    .row.mb-5.justify-content-center
      .col-lg-8.order-2
        p Estudiemos la diferencia entre optimización de motores de búsqueda (SEO) y marketing en motores de búsqueda (SEM). 
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Según Solis (2017), el SEO (<em>Search Engine Optimization</em>) es el conjunto de estrategias y prácticas que buscan mejorar la visibilidad y el posicionamiento de un sitio web, en los resultados de los motores de búsqueda, como Google, Bing, y Yahoo. El objetivo principal del SEO es asegurar que un sitio web sea fácilmente encontrado por los usuarios que buscan información relacionada con los productos, servicios o temas que el sitio ofrece.

        p(data-aos="fade-left").mb-4  Solis detalla cómo el SEO abarca varios aspectos claves:

      .col-md-8.mb-3.mb-lg-o.col-lg-4.order-1
          figure
            img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in").mt-4.mt-lg-0
    
    .bg-full-width.bg-color-info.mb-5
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

    .bg-full-width.bg-fondo-7.mb-5

      .row.justify-content-center.align-items-center
        .col-11.col-md-8.col-lg-4
          img.img-fluid(src='@/assets/curso/tema1/17.svg', style="max-width:610px", alt="", data-aos="zoom-in").mx-auto
        .col-lg-8(data-aos="fade-left")
          .pt-lg-5.pe-lg-5.p-4.ps-lg-0
            ul.lista-ul
              li.mb-2.d-flex
                i.fas.fa-check-circle
                | PPC (Pago por Clic). Es un modelo de publicidad digital, en el que los anunciantes pagan cada vez que un usuario hace clic en uno de sus anuncios. Este modelo se utiliza principalmente en motores de búsqueda y en plataformas de publicidad en línea, como Google Ads, Bing Ads, y las redes sociales (por ejemplo, Facebook Ads e Instagram Ads).
              li.mb-2.d-flex
                i.fas.fa-check-circle
                | Análisis de ROI. Es el retorno sobre la inversión, es una medición utilizada para evaluar la eficacia y la rentabilidad de una inversión en publicidad digital. En el ámbito de la publicidad digital, el análisis ROI permite medir el beneficio obtenido por cada unidad monetaria invertida en una campaña publicitaria.
          
           	 
    
    p.mb-5 El SEM tiene las siguientes:

    .row.align-items-center.mb-5
      .col-lg-4.order-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/18.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Ventajas") 
            ul.lista-ul
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p Permite que un producto o servicio sea reconocido rápidamente.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p Permite competir con empresas grandes y con alto posicionamiento en el mercado.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p El ROI es más rápido.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p Permite llegar a mercados muy específicos, porque permite un alto nivel de segmentación.
          div(numero="2" titulo="Desventajas") 
            ul.lista-ul
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p La compra de palabras claves para el desarrollo de la publicidad suele ser costosa.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p Es un tipo de comunicación invasiva que el mercado no ha buscado y, por lo tanto, puede generar rechazo.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p Requiere compromiso en el desarrollo de la gestión y optimización.
    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/167260" target="_blank" rel="noopener noreferrer") Martin-Guart, R. & Botey López, J. (2020). Glosario de marketing digital. Editorial UOC.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/57768?" target="_blank" rel="noopener noreferrer") Marqués, P. y Fresno, M. D. (2015). Conectados por redes sociales: introducción al análisis de redes sociales y casos prácticos. Editorial UOC.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://estrategias-negocio.blogspot.com/2009/04/estrategia-marketing-distribucion.html " target="_blank" rel="noopener noreferrer") Cómo aplicar el Marketing. Estrategia de Marketing para Distribución.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elpais.com/smoda/2024-10-27/de-portador-de-historias-a-simbolo-de-estilo-asi-se-ha-convertido-el-libro-en-el-nuevo-objeto-de-culto.html" target="_blank" rel="noopener noreferrer") Otero, B. (2024). El libro como nuevo símbolo de estatus: el triunfo del papel gracias a las redes. El País
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.google.com/" target="_blank" rel="noopener noreferrer") El motor de búsqueda más reconocido y utilizado.
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=7oRGg7PLKcQ" target="_blank" rel="noopener noreferrer") BYTEC WEB & MKT AGENCY. (2020). ¿Es más efectivo el EmailMarketing o los anuncios en Redes Sociales?.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
              

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
