# Ita web


Página web de ita | General

```
    La web debe ejecutarse con una extensión como live server

```


Página web de ita | estilos

```
* Algunos estilos son de bootstrap otros son personalizados en css. 
* Los estilos se encuentran en static/css
* La mayoría de los estilos estan en style.css, pero algunos estan modularizados en archivos, fijarse en el head de cada página para 
    saber que archivos utiliza cada una, los archivos style y responsive estan presentas en todas  
* Algunos estilos responsive no se encuentran en el archivo responsive, si no en algunos archivos en específico de esas secciones o páginas y
    también en style.css, (en caso de no encontrarlos en responsive.css, buscarlos en otros css ctrl + h)
* Los archivos css.map, no son de utilidad pero vinieron en el proyecto
* Inspeccionar cada elemento para poder ver bien el origen de los estilos y sus clases
```

Página web de ita | Javascript

```
* La web utilizá Jquery
* Los archivos javascript se encuentran en static/js
* Los diferentes formularios de contacto tienen su propio javascript ya que en algunos casos la página poseía más de uno como en index.html
  donde hay form de contacto en el hero y en el sidebar, en caso de modificarlos revisar que archivos javascript de formularios tiene cada
  página, utilizan emailJs
* Cada selector de área en cada formulario tiene su propio Js y estilo, en caso de crear un nuevo formulario en una página que ya tenga un
* formulario debe crearse codigo Js y estilo css duplicado para el nuevo select, los archivos son selectCustom.js y selectSidebarCustom.js
* La funcionalidad del buscador del navBar que lo oculta y muestra esta en searchNav.js
* El archivo Javascript que se encarga de la rotación de la tierra es index.mjs
* El archivo que genera los íconos de WhatsApp y Email, se encuentra en main.js (Los estilos de estos botones están en style.css)
* La funcionalidad de cerrar y abrir el sidebar también se encuentra en main.js
```

