export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Publicidad en el entorno digital',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Publicidad en redes sociales y motores de búsqueda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Publicidad en redes sociales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Publicidad en motores de búsqueda',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formatos publicitarios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Banners</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Videos publicitarios ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Anuncios nativos ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tendencias y desafíos en la publicidad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tendencias emergentes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Desafíos en la publicidad digital ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Medina, A. (2016). El futuro de la comunicación: píldoras de publicidad, marketing y medios digitales. Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115583',
    },
    {
      referencia:
        'Roig, F. A. (2022). La publicidad moderna: De Bretton Woods a la era digital, 1945-1995. Ediciones Infinito. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/218583?',
    },
    {
      referencia:
        'Giráldez, G. (2020). Marketing digital para los que no saben de marketing digital: descubre cómo el marketing y la comunicación digital ayudan a las marcas a diferenciarse. Madrid, LID Editorial España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/269741? ',
    },
    {
      referencia:
        'Estrade Nieto, J. M., Jordán Soro, D. & Hernández Dauder, M. Á. (2015). Marketing digital: marketing móvil, SEO y analítica web. Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49491?page=307',
    },
    {
      referencia:
        'Navarro-Güere, H., (2024). El video de formato vertical en dispositivos móviles. Estudio de caso en TikTok, Instagram Reels y YouTube Shorts. Revista de Comunicación, 23(1), pp. 377-393.',
      link: 'https://doi.org/10.26441/RC23.1-2024-3316',
    },
    {
      referencia:
        'Martínez Polo, J., Martínez Sánchez, J. & Parra Meroño, M. C. (2015). Marketing digital: guía básica para digitalizar tu empresa. Barcelona, Spain: Editorial UOC. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/57864?page=164',
    },
    {
      referencia:
        'Ábrego Rodríguez, A., Castillo C. F. & Mujica Chirinos, N. (2022). Estrategias de marketing digital y de e-commerce en tiempos de Covid-19. A - Editorial Universitaria Carlos Manuel Gasteazoro. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/23032',
    },
    {
      referencia:
        'Meseguer González, P. & López de Mántaras Badia, R. (2017). Inteligencia artificial. Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42319 ',
    },
    {
      referencia:
        'Ábrego Rodríguez, A. & Castillo C. F. (2022). Marketing digital e-commerce y las ventajas competitivas. A - Editorial Universitaria Carlos Manuel Gasteazoro. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/230320?page=1',
    },
    {
      referencia:
        'Coll Rubio, P. & Micó Sanz, J. L. (2018). Estrategias de publicidad y relaciones públicas en la era digital: los casos de estudio de Wallapop, Westwing y Fotocasa. Editorial UOC. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/105395?page=1 ',
    },
  ],
  glosario: [
    {
      termino: 'Anuncios <em>Ads</em>',
      significado:
        'Formato publicitario pagado, como anuncios en Google <em>Ads</em> o Facebook <em>Ads</em>, cuyo objetivo es generar clics o impresiones en una página web, o aplicación.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'Medida de la interacción que un usuario tiene con una marca o contenido, incluyendo <em>likes</em>, comentarios, compartidos y tiempo de visualización.',
    },
    {
      termino: 'Ética digital',
      significado:
        'Conjunto de principios y normas que guían el desarrollo y uso responsable de la tecnología, incluida la publicidad digital y la inteligencia artificial.',
    },
    {
      termino: '<em>Influencer</em>',
      significado:
        'Persona con una audiencia significativa en redes sociales que tiene la capacidad de influir en las decisiones de compra de sus seguidores.',
    },
    {
      termino: '<em>Mobile Marketing</em>',
      significado:
        'Estrategias de <em>marketing</em> diseñadas para dispositivos móviles, incluyendo anuncios en aplicaciones, notificaciones <em>push</em> y SMS.',
    },
    {
      termino: 'Notificaciones <em>Push</em>',
      significado:
        'Mensajes enviados a la pantalla del dispositivo móvil para notificar al usuario sobre una oferta, actualización o recordatorio.',
    },
    {
      termino: 'Plataformas programáticas',
      significado:
        'Herramientas tecnológicas que permiten la compra automatizada de espacios publicitarios en tiempo real, a través de plataformas como Google <em>Ads</em> y Facebook <em>Ads</em>.',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'Estrategia de promoción de productos o servicios utilizando plataformas en línea, como motores de búsqueda, redes sociales y sitios web.',
    },
    {
      termino: 'Publicidad interactiva',
      significado:
        'Anuncios que permiten al usuario participar activamente, como juegos o encuestas, mejorando el engagement y la retención.',
    },
    {
      termino: 'Publicidad nativa',
      significado:
        'Anuncios que se integran de manera orgánica en el contenido editorial de una página web o red social, pareciendo contenido regular.',
    },
    {
      termino: 'Publicidad programática',
      significado:
        'Uso de algoritmos y tecnología para comprar y colocar anuncios de manera automatizada, optimizando el proceso de compra en tiempo real.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir un público amplio en segmentos más específicos para personalizar los mensajes publicitarios según sus características.',
    },
  ],
}
