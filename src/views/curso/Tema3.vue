<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Tendencias y desafíos en la publicidad digital'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la publicidad digital, encontramos diferentes tendencias y desafíos, los cuales estudiaremos a continuación.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tendencias emergentes


    .row.mb-5.justify-content-center
      .col-lg-8.order-2
        p En las tendencias emergentes, encontramos:
        h2.mb-4(data-aos="flip-up") a. Publicidad programática.
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          p.mb-0 Uso de algoritmos para comprar y alojar anuncios en tiempo real, basado en el comportamiento del usuario.
        
        p(data-aos="fade-left") Los aspectos claves de la publicidad programática, son:
      .col-md-8.col-lg-4.d-none.d-sm-block.order-1
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Automatización de procedimientos")
          
            p La implementación de tecnología de punta, facilita la adquisición y comercialización de publicidad, sin necesidad de intervención humana, acelerando así las campañas de publicidad.
          div(numero="2" titulo="Segmentación")
          
            p A través del estudio de datos demográficos, conductuales y contextuales, es posible enfocar los anuncios a públicos específicos, incrementando así la pertinencia y eficacia de las campañas.
          div(numero="3" titulo="Interacción en tiempo real")
            
            p Los algoritmos modifican las campañas en función del desempeño e interacción de los usuarios, optimizando de manera constante los resultados.
    
    h2.mb-4(data-aos="flip-up") b. Inteligencia artificial y automatización.
    p.mb-5 Se utiliza la IA para mejorar la segmentación y personalización de anuncios. González, P. & López de Badia, R. (2017), la definen como: la disciplina que busca desarrollar sistemas capaces de realizar tareas que requieren inteligencia humana, como el aprendizaje, el razonamiento y la percepción y adicional los autores indican los siguientes aspectos claves: 

    .bg-full-width-2.bg-fondo-6
      .px-4.px-md-5.py-5
        .row.justify-content-center.mb-5
          .col-md-8.col-lg-4
            figure
              img(src="@/assets/curso/tema3/4.png", alt="").mx-auto
          .col-lg-8
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src="@/assets/curso/tema3/5.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aprendizaje automático
                p.text-center Permite a las máquinas aprender de datos y mejorar su rendimiento sin programación explícita.
              .bg-color-white.p-4.h-100.shadow-app
                img(src="@/assets/curso/tema3/6.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Procesamiento de lenguaje natural
                p.text-center Uno de los objetivos clásicos de la IA ha sido conseguir procesar el lenguaje natural (<em>Natural Language Processing</em>, NLP), es decir, el lenguaje de los humanos: español, inglés, etc.
              .bg-color-white.p-4.h-100.shadow-app
                img(src="@/assets/curso/tema3/7.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Visión por computador
                p.text-center Habilita a las máquinas para interpretar y comprender el mundo visual, permitiendo aplicaciones como el reconocimiento facial y la conducción autónoma. El objetivo principal es dotar de esta capacidad (visión), a las máquinas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src="@/assets/curso/tema3/8.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Robótica
                p.text-center Combina la IA con la ingeniería para crear robots que pueden realizar tareas físicas de manera autónoma o semiautónoma.
              .bg-color-white.p-4.h-100.shadow-app
                img(src="@/assets/curso/tema3/9.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ética y responsabilidad
                p.text-center Es esencial abordar las implicaciones éticas de la IA, incluyendo la privacidad, la transparencia y la toma de decisiones autónoma.
              
    h2.mb-4(data-aos="flip-up") c. Publicidad móvil. 
    p.mb-5 Crecimiento del consumo de contenido a través de dispositivos móviles, y cómo los anunciantes pueden optimizar sus campañas para este formato. Somalo (2017), destaca varios aspectos claves a considerar, al diseñar estrategias de marketing, para dispositivos móviles:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5.mb-4 Diseño responsivo

              p Es esencial que los sitios web y las aplicaciones, estén optimizados para adaptarse a diferentes tamaños de pantalla y resoluciones, garantizando una experiencia de usuario fluida en dispositivos móviles.

          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5.mb-4 Velocidad de carga

              p Los usuarios móviles valoran la rapidez; por lo tanto, es crucial que las páginas se carguen rápidamente para evitar la frustración y la posible pérdida de clientes potenciales.

          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5.mb-4 Interacción táctil

              p Las interfaces deben ser intuitivas y facilitar la navegación mediante gestos táctiles, como deslizamientos y toques, para mejorar la usabilidad.
          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7
              h5.mb-4 Contenido adaptado

              p El contenido debe ser conciso y relevante, teniendo en cuenta que los usuarios móviles suelen consumir información de manera más rápida y en sesiones más cortas. 
          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/14.png")
            .col-lg-7
              h5.mb-4 Integración de funcionalidades móviles

              p Aprovechar características específicas de los dispositivos, como la geolocalización, las notificaciones <em>push</em> y las cámaras, puede enriquecer la experiencia del usuario y ofrecer servicios personalizados. 
          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-md-8.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7
              h5.mb-4 Optimización para motores de búsqueda móviles

              p Es fundamental que el sitio esté optimizado para búsquedas realizadas desde dispositivos móviles, considerando factores como la velocidad de carga y la compatibilidad con las búsquedas por voz. 
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Al tener en cuenta estos aspectos, las empresas pueden mejorar la eficacia de sus estrategias en dispositivos móviles, ofreciendo una mayor experiencia de usuario y aumentando el retorno. 
    
    .row.mb-5.justify-content-center
      .col-lg-8
        h2.mb-4(data-aos="flip-up") d. <em>Influencer</em> marketing. 
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          p.mb-0 Colaboración con <em>influencers</em> para promocionar productos o servicios, de manera orgánica, en plataformas digitales.
        p Sanmiguel (2019), define a un <em>influencer</em> como una persona que posee la capacidad de afectar las decisiones de compra o las acciones de otros, mediante la creación y difusión de contenido original en plataformas de redes sociales. Estos individuos tienen un nivel reconocido de conocimiento o influencia social en su campo, lo que les permite recomendar productos o servicios a su audiencia, de manera efectiva. Asimismo, indica que las características claves de los <em>influencer</em>s en la publicidad, son: 
        
      .col-md-8.col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/18.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Credibilidad y confianza
              p.mb-0.text-center Los <em>influencers</em> han establecido una relación de confianza con su audiencia, lo que hace que sus recomendaciones sean percibidas como auténticas y confiables.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/19.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Alcance y audiencia específica
              p.mb-0.text-center Cuentan con una base de seguidores significativa y, a menudo, segmentada, lo que permite a las marcas llegar a públicos específicos, de manera más efectiva. 
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/20.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Capacidad de generar <em>engagement</em>
              p.mb-0.text-center Su contenido suele generar interacción activa, como comentarios, "me gusta" y compartidos, lo que amplifica el mensaje de la marca.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/21.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Adaptabilidad de contenido
              p.mb-0.text-center Son capaces de integrar productos o servicios en su contenido, de manera natural y creativa, manteniendo la coherencia con su estilo y con su audiencia.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/22.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Al colaborar con <em>influencers</em>, las empresas y marcas pueden aprovechar estas características para aumentar la visibilidad de sus productos o servicios y fomentar una conexión más profunda con su público objetivo. Sin embargo, se debe considerar que cumpla no solo con las características, sino que el público o mercado objetivo, se sienta identificado.  
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Desafíos en la publicidad digital 
    
    .bg-full-width.bg-fondo-7.mb-5
      .row.justify-content-center.align-items-center
        .col-md-8.col-lg-4.mb-3.mb-lg-0
          img.img-fluid(src='@/assets/curso/tema3/23.svg', style="max-width:610px", alt="", data-aos="zoom-in").mx-auto
        .col-lg-8(data-aos="fade-left")
          .pt-lg-5.pe-lg-5.p-4.ps-lg-0
            ul.lista-ul
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p <b>Privacidad y protección de datos.</b> Con la llegada de regulaciones como el GDPR, los anunciantes deben ser más transparentes y cuidadosos con la recolección y uso de datos.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p <b>Adblockers.</b> El aumento del uso de bloqueadores de anuncios, está afectando la visibilidad de los anuncios digitales, lo que obliga a los anunciantes a buscar nuevas formas de llegar a su audiencia.
              li.mb-2.d-flex
                i.fas.fa-check-circle
                p <b>Saturación de anuncios.</b> Los consumidores están cada vez más inmunizados ante los anuncios, lo que ha generado la necesidad de ser más creativos y relevantes en las campañas.
    
    p.mb-5 Rubio y Sanz (2018), identifican varios desafíos que enfrenta la publicidad digital, en la actualidad, como lo son:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/23.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0

        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Saturación de contenido")
          
            p La abundancia de información en línea, ha llevado a una sobrecarga de contenido, dificultando que los mensajes publicitarios destaquen y capten la atención del público objetivo.
          div(numero="2" titulo="<em>Adblockers</em>")
          
            p El uso creciente de bloqueadores de anuncios por parte de los usuarios, ha reducido la efectividad de las campañas publicitarias tradicionales, obligando a las marcas a buscar métodos alternativos para llegar a su audiencia.
          div(numero="3" titulo="Privacidad y regulaciones")
            
            p Las estrictas normativas sobre privacidad y protección de datos, como el Reglamento General de Protección de Datos (GDPR) en Europa, han impuesto restricciones en la recopilación y uso de información personal para fines publicitarios.
          div(numero="4" titulo="Medición del Retorno de Inversión (ROI)")
            
            p Evaluar el impacto real de las campañas digitales en términos de ventas y retorno de inversión sigue siendo un desafío, debido a la complejidad de atribuir conversiones a múltiples puntos de contacto en el recorrido del cliente.
    
          div(numero="5" titulo="Evolución tecnológica")
            
            p La rápida adopción de nuevas tecnologías, como la inteligencia artificial y la automatización, requiere que las estrategias publicitarias se adapten constantemente para mantenerse relevantes y efectivas.
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/269688?page=1" target="_blank" rel="noopener noreferrer") Somalo, N. (2017). Marketing digital que funciona: planifica tu estrategia e invierte con cabeza. LID Editorial España.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/270004") Sanmiguel, P. (2019). Influencer Marketing: conecta tu marca con tu público. LID Editorial España. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://elpais.com/proyecto-tendencias/2024-10-02/la-empresa-espanola-de-publicidad-que-huye-de-las-cookies.html" target="_blank" rel="noopener noreferrer") Olaizola, B. (2024). La empresa española de publicidad que huye de las ‘cookies.’ El País
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/marketing/que-es-publicidad-programatica?" target="_blank" rel="noopener noreferrer") Publicidad Programática. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://brand24.com/" target="_blank" rel="noopener noreferrer") Herramienta de monitorización de medios con funciones potenciadas por IA.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://4.hemingwayapp.com/" target="_blank" rel="noopener noreferrer") Editor de texto que indica cuándo el contenido es difícil de leer y adicional muestra cómo solucionarlo.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cVdwNQseq-c" target="_blank" rel="noopener noreferrer") America Digital News TV. (2018). Inteligencia Artificial y Machine Learning para generar valor en las empresas, Amazon Web Services.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=90Orq8GF-5U" target="_blank" rel="noopener noreferrer") Grupo DIRCOM. (2021). Relaciones Públicas & <em>Influencers</em>  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas y Metodologías de Desarrollo de <em>software</em>',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Los anuncios nativos suelen ser percibidos como menos intrusivos por los usuarios. ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'El SEO mejora el posicionamiento de una página web de forma orgánica.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'El SEM no requiere inversión económica para aparecer en buscadores. ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Los <em>banners</em> son el formato menos utilizado en publicidad digital. ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'LinkedIn <em>Ads</em> está orientado a campañas dirigidas a profesionales y empresas',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
