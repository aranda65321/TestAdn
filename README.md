# Project TestAdn

Este proyecto se reanudó con [Angular CLI](https://github.com/angular/angular-cli) versión 12.2.11.

##

#Ejecucion projecto Angular y Aplicacion Rest

##Repositorios git con el codigo fuente:
- Proejecto Angular: https://github.com/aranda65321/TestAdn.git
- Proejecto Spring boot: https://github.com/aranda65321/AdnApiRest-SpringBoot.git

##Requisitos previos:
 - Tener instalado Node.js, npm y angular CLI
 - Java 11

##Manual de uso Web
Actualmente aloje en servidor tanto el projecto angular y servidor Rest, esto quiere decir que se puede usar sin tener que instalar nada en el computador, sigue estos pasos

- Abre un navegador
- Ve al siguiente enlace http://adn.spring-demo.angular.s3-website-us-east-1.amazonaws.com
- Crea un usuario 
- Una vez registrado inicias sesion
- Introduces el tamaño de la matrix
- Rellenas la matrix a validar y le das enviar
- Adicionalmente se muestra la estadistica de los Adn ingresados a la app

##Manual de uso Web - Usuarios pre-Definidos
username: test1
password: 1234

##Manual de despliegue Local:
Para poder Iniciar los proyectos debe ejecutar como administrador el archivo llamado ejecutar.bat dentro de la carpeta codigo fuente, el cual va instalar las librerias para el proyecto angular, iniciara el servidor angular y servidor Rest spring boot

##Uso projecto
Una vez iniciado el servidor angular en localhost:4200 y el servidor rest en localhost:8080, procedemos a hacer lo siguiente

- Abrir un navegador e ir al siguiente http://localhost:4200/ aqui se te cargara la pagina del proyecto
- Registras un usuario
- Una vez registrado inicias sesion
- Introduces el tamaño de la matrix
- Rellenas la matrix a validar y le das enviar
- Adicionalmente se muestra la estadistica de los Adn ingresados a la app


# Informacion Api Rest "AdnApiRest-SpringBoot"
AdnApiRest-SpringBoot Api rest para validacion de Adns

##Solicitudes permitidas por el servidor

#Solicitud Post Login usuario:

El puerto por defecto del servidor local es 8080 y el de aws es 80
  
Para esta solicitud es necesario enviarle un objeto usuario 
Servidor local: http://localhost:8080/login
Servidor aws: http://ec2-54-226-148-188.compute-1.amazonaws.com:80/login
    
##

#Solicitud Post Crear usuario:
  
Para esta solicitud es necesario enviarle un objeto usuario 
Servidor local: http://localhost:8080/create/user
Servidor aws: http://ec2-54-226-148-188.compute-1.amazonaws.com:80/create/user
    
##

#Solicitud Post Validar Matrix
  
Para esta solicitud es necesario enviarle un objeto matrix
Servidor local: http://localhost:8080/validMatrix
Servidor aws: http://ec2-54-226-148-188.compute-1.amazonaws.com:80/validMatrix
    
##

#Solicitud Get obtener estadisticas
  
Para esta solicitud es necesario enviarle un objeto matrix
Servidor local: http://localhost:8080/statistics
Servidor aws: http://ec2-54-226-148-188.compute-1.amazonaws.com:80/statistics
    


##

## Más ayuda

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI] (https://angular.io/cli).
