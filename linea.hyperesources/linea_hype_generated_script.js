//	HYPE.documents["linea"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="linea.hyperesources",f="linea",g="linea_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/linea_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_768F||null!=window.HYPE_dtl_768F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-768.full.min.js":"HYPE-768.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_768"+c,"HYPE_dtl_768"+c,a,d),false==!0&&(a=a||k("HYPE_w_768","HYPE_wdtl_768","HYPE-768.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_768","HYPE-768.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"jumpToOne",source:"function(hypeDocument, element, event) {\n\tdestTime = window.keep_time;  //variable global que indica la posici\u00f3n donde la timeline fue movida por \u00faltima vez, indicado en el script que controla la timeline.\n\thypeDocument.showSceneNamed('escena_zonas', hypeDocument.kSceneTransitionInstant); // modificar el nombre de la escena de destino, el tipo de animaci\u00f3n y la duraci\u00f3n.\n}",identifier:"91"},{name:"jumpToTwo",source:"function(hypeDocument, element, event) {\n\tdestTime = window.keep_time;   //variable global que indica la posici\u00f3n donde la timeline fue movida por \u00faltima vez, indicado en el script que controla la timeline\n\thypeDocument.showSceneNamed('escena_rutas', hypeDocument.kSceneTransitionInstant);   // modificar el nombre de la escena de destino, el tipo de animaci\u00f3n y la duraci\u00f3n.\n\n}",identifier:"92"},{name:"jumpToThree",source:"function(hypeDocument, element, event) {\tdestTime = window.keep_time;  //variable global que indica la posici\u00f3n donde la timeline fue movida por \u00faltima vez, indicado en el script que controla la timeline.\n\thypeDocument.showSceneNamed('escena_eventos', hypeDocument.kSceneTransitionInstant); // modificar el nombre de la escena de destino, el tipo de animaci\u00f3n y la duraci\u00f3n.\n}",identifier:"93"},{name:"control_timeline",source:"function(hypeDocument, element, event) {//funci\u00f3n que controla una timeline con par\u00e1metros espec\u00edficos como la velocidad o la cantidad de veces que se llama a la funci\u00f3n \"controlar\". Se deben importar las librer\u00edas: jquery, jquery UI y Jquery touch.\n    var millis = new Date().getTime();\n    var max = 900; //longitud de la timeline (en pixeles)\n    var duration = 12; //duraci\u00f3n de la timeline a controlar\n    var tiempo_minimo = 100; // el tiempo minimo que tiene que pasar para que se llame la funcion de moverse en el timeline (esta en milisegundos)\n    if(typeof window.millis === \"undefined\"){\n        window.millis = millis;\n        destTime = (parseInt(element.style.left)/max)*duration;\n        window.keep_time = destTime;\n         //controla las timelines dentro del s\u00edmbolo\n        var symbols = hypeDocument.getSymbolInstancesByName('control_tiempo'); //obtiene un arreglo de simbolos con ese nombre\n        var symbol_tiempo = symbols[0]; //obtiene el primer s\u00edmbolo del arreglo\n\t\tsymbol_tiempo.goToTimeInTimelineNamed(destTime, 'tiempo');//ajusta el timeline dentro del s\u00edmbolo que quieres mover\n\t\t //controla las timelines fuera del s\u00edmbolo\n        hypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_zonas'); //ajusta el nombre de la Timeline que quieres manipular.\n        hypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_rutas'); //ajusta el nombre de la Timeline que quieres manipular.\n        hypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_eventos'); //ajusta el nombre de la Timeline que quieres manipular.\n    }else{\n        if(millis - window.millis > tiempo_minimo){\n            window.millis = millis;\n            destTime = (parseInt(element.style.left)/max)*duration;\n\t        window.keep_time = destTime;  //guarda el tiempo actual de la timeline en una variable global\n\t        //controla las timelines dentro del s\u00edmbolo\n\t        var symbols = hypeDocument.getSymbolInstancesByName('control_tiempo'); //obtiene un arreglo de simbolos con ese nombre\n            var symbol_tiempo = symbols[0]; //obtiene el primer s\u00edmbolo del arreglo\n\t\t    symbol_tiempo.goToTimeInTimelineNamed(destTime, 'tiempo');//ajusta el timeline dentro del s\u00edmbolo que quieres mover\n            //controla las timelines fuera del s\u00edmbolo}\n\t\t\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_zonas'); //ajusta el nombre de la Timeline que quieres manipular.\n\t\t\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_rutas'); //ajusta el nombre de la Timeline que quieres manipular.\n\t\t\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_eventos');//ajusta el nombre de la Timeline que quieres manipular.\n\n\t     }\n    }\n\n}",identifier:"117"},{name:"dragable_element",source:"function(hypeDocument, element, event) {\t//funci\u00f3n que utiliza la librer\u00eda Jquery para convertir un elemento en arrastable, la direfencia con la funci\u00f3n nativa de hype es que puedes elegir un contenedor para el arrastre. Se deben importar las librer\u00edas: jquery, jquery UI y Jquery touch.\n\t//Adem\u00e1s hay que modificar el \"alias\" de los elementos en la pesta\u00f1a \"identidad\" de la interfaz de hype.\n\t$( \"#lupa\" ).draggable({containment: \"#contenedor_lupa\",  scroll: false}); //primer elemento el que arrastras, segundo elemento el contenedor.\n}",identifier:"118"},{name:"retroceder_tiempo",source:"function(hypeDocument, element, event) {\ttiempo_actual = hypeDocument.currentTimeInTimelineNamed('tiempo') //ajustar el nombre de la Timeline que quieres manipular.\n\tdiferencia = 0.16  // ajusta la diferencia de tiempo que necesitas avanzar.\n\ttiempo_nuevo = tiempo_actual - diferencia\n\thypeDocument.goToTimeInTimelineNamed(tiempo_nuevo, 'tiempo') //ajusta el nombre de la Timeline que quieres manipular.\n}",identifier:"407"},{name:"avanzarTiempo",source:"function(hypeDocument, element, event) {\ttiempo_actual = hypeDocument.currentTimeInTimelineNamed('tiempo') //ajustar el nombre de la Timeline que quieres manipular.\n\tdiferencia = 0.16  // ajusta la diferencia de tiempo que necesitas avanzar.\n\ttiempo_nuevo = tiempo_actual + diferencia\n\thypeDocument.goToTimeInTimelineNamed(tiempo_nuevo, 'tiempo') //ajusta el nombre de la Timeline que quieres manipular.\n}",identifier:"408"},{name:"jumpToTimeRutas",source:"function(hypeDocument, element, event) {\tdestTime = window.keep_time;\n\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_rutas');\n\twindow.scene_to_go_back_to = hypeDocument.currentSceneName();\n}",identifier:"1725"},{name:"jumpToTimeEventos",source:"function(hypeDocument, element, event) {\tdestTime = window.keep_time;\n\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_eventos');\n\twindow.scene_to_go_back_to = hypeDocument.currentSceneName();\n}",identifier:"1726"},{name:"jumpToTimeZonas",source:"function(hypeDocument, element, event) {\tdestTime = window.keep_time;\n\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_zonas');\n\n}",identifier:"1727"},{name:"goBackFromCard",source:"function(hypeDocument, element, event) {\tif(\twindow.scene_to_go_back_to === \"escena_eventos\"){\n\t\tdestTime = window.keep_time;\n\t\thypeDocument.showSceneNamed('escena_eventos', hypeDocument.kSceneTransitionPushBottomToTop, 0.6);\n\t}\n\tif(\twindow.scene_to_go_back_to === \"escena_rutas\"){\n\t\tdestTime = window.keep_time;\n\t\thypeDocument.showSceneNamed('escena_rutas', hypeDocument.kSceneTransitionPushBottomToTop, 0.6);\n\t}\n\n}",identifier:"1857"},{name:"control_timeline",source:"function(hypeDocument, element, event) {//funci\u00f3n que controla una timeline con par\u00e1metros espec\u00edficos como la velocidad o la cantidad de veces que se llama a la funci\u00f3n \"controlar\". Se deben importar las librer\u00edas: jquery, jquery UI y Jquery touch.\n    var millis = new Date().getTime();\n    var max = 900; //longitud de la timeline (en pixeles)\n    var duration = 12; //duraci\u00f3n de la timeline a controlar\n    var tiempo_minimo = 100; // el tiempo minimo que tiene que pasar para que se llame la funcion de moverse en el timeline (esta en milisegundos)\n    if(typeof window.millis === \"undefined\"){\n        window.millis = millis;\n        destTime = (parseInt(element.style.left)/max)*duration;\n        window.keep_time = destTime;\n         //controla las timelines dentro del s\u00edmbolo\n        var symbols = hypeDocument.getSymbolInstancesByName('control_tiempo'); //obtiene un arreglo de simbolos con ese nombre\n        var symbol_tiempo = symbols[0]; //obtiene el primer s\u00edmbolo del arreglo\n\t\tsymbol_tiempo.goToTimeInTimelineNamed(destTime, 'tiempo');//ajusta el timeline dentro del s\u00edmbolo que quieres mover\n\t\t //controla las timelines fuera del s\u00edmbolo\n        hypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_zonas'); //ajusta el nombre de la Timeline que quieres manipular.\n        hypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_rutas'); //ajusta el nombre de la Timeline que quieres manipular.\n        hypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_eventos'); //ajusta el nombre de la Timeline que quieres manipular.\n    }else{\n        if(millis - window.millis > tiempo_minimo){\n            window.millis = millis;\n            destTime = (parseInt(element.style.left)/max)*duration;\n\t        window.keep_time = destTime;  //guarda el tiempo actual de la timeline en una variable global\n\t        //controla las timelines dentro del s\u00edmbolo\n\t        var symbols = hypeDocument.getSymbolInstancesByName('control_tiempo'); //obtiene un arreglo de simbolos con ese nombre\n            var symbol_tiempo = symbols[0]; //obtiene el primer s\u00edmbolo del arreglo\n\t\t    symbol_tiempo.goToTimeInTimelineNamed(destTime, 'tiempo');//ajusta el timeline dentro del s\u00edmbolo que quieres mover\n            //controla las timelines fuera del s\u00edmbolo}\n\t\t\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_zonas'); //ajusta el nombre de la Timeline que quieres manipular.\n\t\t\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_rutas'); //ajusta el nombre de la Timeline que quieres manipular.\n\t\t\thypeDocument.goToTimeInTimelineNamed(destTime, 'tiempo_eventos');//ajusta el nombre de la Timeline que quieres manipular.\n\n\t     }\n    }\n\n}",identifier:"6794"},{name:"dragable_element",source:"function(hypeDocument, element, event) {\t//funci\u00f3n que utiliza la librer\u00eda Jquery para convertir un elemento en arrastable, la direfencia con la funci\u00f3n nativa de hype es que puedes elegir un contenedor para el arrastre. Se deben importar las librer\u00edas: jquery, jquery UI y Jquery touch.\n\t//Adem\u00e1s hay que modificar el \"alias\" de los elementos en la pesta\u00f1a \"identidad\" de la interfaz de hype.\n\t$( \"#lupa\" ).draggable({containment: \"#contenedor_lupa\",  scroll: false}); //primer elemento el que arrastras, segundo elemento el contenedor.\n}",identifier:"6795"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_768"+c](f,g,{"28":{p:1,n:"victoria%20copia_2x.png",g:"1229",o:true,t:"@2x"},"172":{p:1,n:"campana-2.png",g:"5249",t:"@1x"},"34":{p:1,n:"hidalgo%20copia_2x.png",g:"1193",o:true,t:"@2x"},"142":{p:1,n:"mina%20copia-2_2x.png",g:"4569",o:true,t:"@2x"},"29":{p:1,n:"iturbide%20copia.png",g:"1233",o:true,t:"@1x"},"40":{p:1,n:"catedral3_2x.png",g:"28",o:true,t:"@2x"},"112":{p:1,n:"fondo-10_2x.jpg",g:"3081",o:true,t:"@2x"},"35":{p:1,n:"cruz.png",g:"1247",o:true,t:"@1x"},"173":{p:1,n:"campana_2x-1.png",g:"5249",t:"@1x"},"41":{p:1,n:"ancla_2.png",g:"32",o:true,t:"@1x"},"143":{p:1,n:"hidalgo%20copia-1.png",g:"4698",o:true,t:"@1x"},"36":{p:1,n:"cruz_2x.png",g:"1247",o:true,t:"@2x"},"113":{p:1,n:"allende%20copia-1-1.png",g:"3082",o:true,t:"@1x"},"42":{p:1,n:"ancla_2_2x.png",g:"32",o:true,t:"@2x"},"37":{p:1,n:"catedral4.png",g:"24",o:true,t:"@1x"},"174":{p:1,n:"hidalgo%20copia-3.png",g:"5250",o:true,t:"@1x"},"43":{p:1,n:"catedral1.png",g:"44",o:true,t:"@1x"},"144":{p:1,n:"hidalgo%20copia-1_2x.png",g:"4698",o:true,t:"@2x"},"38":{p:1,n:"catedral4_2x.png",g:"24",o:true,t:"@2x"},"114":{p:1,n:"allende%20copia-1-1_2x.png",g:"3082",o:true,t:"@2x"},"240":{p:1,n:"canion_verde-4.png",g:"6874",o:true,t:"@1x"},"44":{p:1,n:"catedral1_2x.png",g:"44",o:true,t:"@2x"},"210":{p:1,n:"icono-linea-01-01.png",g:"6616",t:"@1x"},"39":{p:1,n:"catedral3.png",g:"28",o:true,t:"@1x"},"175":{p:1,n:"hidalgo%20copia-3_2x.png",g:"5250",o:true,t:"@2x"},"145":{p:1,n:"victoria%20copia-1.png",g:"4784",o:true,t:"@1x"},"45":{p:1,n:"casa_colonial.png",g:"40",o:true,t:"@1x"},"115":{p:1,n:"aldama%20copia-1-1.png",g:"3083",o:true,t:"@1x"},"50":{p:1,n:"catedral2_2x.png",g:"48",o:true,t:"@2x"},"51":{p:1,n:"mapa_modificado.png",g:"1478",o:true,t:"@1x"},"211":{p:1,n:"Back-1-1.png",g:"6657",o:true,t:"@1x"},"46":{p:1,n:"casa_colonial_2x.png",g:"40",o:true,t:"@2x"},"176":{p:1,n:"cruz-2.png",g:"5251",o:true,t:"@1x"},"241":{p:1,n:"canion_verde-4_2x.png",g:"6874",o:true,t:"@2x"},"146":{p:1,n:"victoria%20copia-1_2x.png",g:"4784",o:true,t:"@2x"},"52":{p:1,n:"mapa_modificado_2x.png",g:"1478",o:true,t:"@2x"},"47":{p:1,n:"ancla_uno.png",g:"36",o:true,t:"@1x"},"116":{p:1,n:"aldama%20copia-1-1_2x.png",g:"3083",o:true,t:"@2x"},"53":{p:1,n:"MTLLqX7zc-1.png",g:"1744",o:true,t:"@1x"},"212":{p:1,n:"Back-1-1_2x.png",g:"6657",o:true,t:"@2x"},"48":{p:1,n:"ancla_uno_2x.png",g:"36",o:true,t:"@2x"},"177":{p:1,n:"cruz-2_2x.png",g:"5251",o:true,t:"@2x"},"147":{p:1,n:"bravo%20copia-2.png",g:"4785",o:true,t:"@1x"},"54":{p:1,n:"MTLLqX7zc-1_2x.png",g:"1744",o:true,t:"@2x"},"117":{p:1,n:"Guanajuato.png",g:"3441",o:true,t:"@1x"},"49":{p:1,n:"catedral2.png",g:"48",o:true,t:"@1x"},"60":{p:1,n:"fondo-07_2x.jpg",g:"2185",o:true,t:"@2x"},"213":{p:1,n:"CATEDRAL.png",g:"6700",t:"@1x"},"55":{p:1,n:"MTLLqX7zc-1tri.png",g:"1803",o:true,t:"@1x"},"178":{p:1,n:"aldama%20copia-2.png",g:"5353",o:true,t:"@1x"},"61":{p:1,n:"Back-1.png",g:"2186",o:true,t:"@1x"},"148":{p:1,n:"bravo%20copia-2_2x.png",g:"4785",o:true,t:"@2x"},"56":{p:1,n:"MTLLqX7zc-1tri_2x.png",g:"1803",o:true,t:"@2x"},"118":{p:1,n:"Guanajuato_2x.png",g:"3441",o:true,t:"@2x"},"62":{p:1,n:"Back-1_2x.png",g:"2186",o:true,t:"@2x"},"214":{p:1,n:"WTC.png",g:"6701",t:"@1x"},"179":{p:1,n:"aldama%20copia-2_2x.png",g:"5353",o:true,t:"@2x"},"57":{p:1,n:"flecha-1.png",g:"2184",o:true,t:"@1x"},"149":{p:1,n:"iturbide%20copia-1.png",g:"4897",o:true,t:"@1x"},"63":{p:1,n:"restart-1.png",g:"2187",o:true,t:"@1x"},"119":{p:1,n:"mina%20copia-1.png",g:"3741",o:true,t:"@1x"},"58":{p:1,n:"flecha-1_2x.png",g:"2184",o:true,t:"@2x"},"215":{p:1,n:"UNAM.png",g:"6702",t:"@1x"},"64":{p:1,n:"restart-1_2x.png",g:"2187",o:true,t:"@2x"},"59":{p:1,n:"fondo-07.jpg",g:"2185",o:true,t:"@1x"},"70":{p:1,n:"campana_2x.png",g:"2190",t:"@2x"},"65":{p:1,n:"ancla_uno-1.png",g:"2188",o:true,t:"@1x"},"71":{p:1,n:"casa_colonial-1.png",g:"2231",o:true,t:"@1x"},"216":{p:1,n:"SANTA%20FE.png",g:"6703",t:"@1x"},"66":{p:1,n:"ancla_uno-1_2x.png",g:"2188",o:true,t:"@2x"},"72":{p:1,n:"casa_colonial-1_2x.png",g:"2231",o:true,t:"@2x"},"67":{p:1,n:"morelos%20copia-1.png",g:"2189",o:true,t:"@1x"},"217":{p:1,n:"SATELITE.png",g:"6704",t:"@1x"},"73":{p:1,n:"fondo-11.jpg",g:"2232",o:true,t:"@1x"},"68":{p:1,n:"morelos%20copia-1_2x.png",g:"2189",o:true,t:"@2x"},"74":{p:1,n:"fondo-11_2x.jpg",g:"2232",o:true,t:"@2x"},"69":{p:1,n:"campana-1.png",g:"2190",t:"@1x"},"80":{p:1,n:"catedral2-1.png",g:"2496",o:true,t:"@1x"},"218":{p:1,n:"BELLAS%20ARTES.png",g:"6705",t:"@1x"},"75":{p:1,n:"corona_2x.png",g:"2233",t:"@2x"},"81":{p:1,n:"catedral2-1_2x.png",g:"2496",o:true,t:"@2x"},"76":{p:1,n:"fondo-15.jpg",g:"2332",o:true,t:"@1x"},"219":{p:1,n:"REVOLUCION.png",g:"6706",t:"@1x"},"82":{p:1,n:"catedral1-1.png",g:"2497",o:true,t:"@1x"},"77":{p:1,n:"fondo-15_2x.jpg",g:"2332",o:true,t:"@2x"},"83":{p:1,n:"catedral1-1_2x.png",g:"2497",o:true,t:"@2x"},"78":{p:1,n:"catedral3-1.png",g:"2379",o:true,t:"@1x"},"84":{p:1,n:"aldama%20copia-1.png",g:"2548",o:true,t:"@1x"},"79":{p:1,n:"catedral3-1_2x.png",g:"2379",o:true,t:"@2x"},"90":{p:1,n:"allende%20copia-1.png",g:"2551",o:true,t:"@1x"},"85":{p:1,n:"aldama%20copia-1_2x.png",g:"2548",o:true,t:"@2x"},"91":{p:1,n:"allende%20copia-1_2x.png",g:"2551",o:true,t:"@2x"},"86":{p:1,n:"cruz-1.png",g:"2549",o:true,t:"@1x"},"92":{p:1,n:"calleja%20copia-1.png",g:"2643",o:true,t:"@1x"},"87":{p:1,n:"cruz-1_2x.png",g:"2549",o:true,t:"@2x"},"93":{p:1,n:"calleja%20copia-1_2x.png",g:"2643",o:true,t:"@2x"},"88":{p:1,n:"hidalgo%20copia-2.png",g:"2550",o:true,t:"@1x"},"94":{p:1,n:"catedral4-1.png",g:"2644",o:true,t:"@1x"},"89":{p:1,n:"hidalgo%20copia-2_2x.png",g:"2550",o:true,t:"@2x"},"95":{p:1,n:"catedral4-1_2x.png",g:"2644",o:true,t:"@2x"},"96":{p:1,n:"fondo-06-1.jpg",g:"2739",o:true,t:"@1x"},"97":{p:1,n:"fondo-06-1_2x.jpg",g:"2739",o:true,t:"@2x"},"98":{p:1,n:"flecha2.png",g:"2740",t:"@1x"},"99":{p:1,n:"casa_colonial-2.png",g:"2741",o:true,t:"@1x"},"190":{p:1,n:"allende%20copia-3.png",g:"5643",t:"@1x"},"160":{p:1,n:"calleja%20copia-1-1_2x.png",g:"5179",o:true,t:"@2x"},"130":{p:1,n:"fondo-17_2x.jpg",g:"4263",o:true,t:"@2x"},"100":{p:1,n:"casa_colonial-2_2x.png",g:"2741",o:true,t:"@2x"},"191":{p:1,n:"morelos%20copia-3.png",g:"5644",t:"@1x"},"161":{p:1,n:"fondo-12.jpg",g:"5180",o:true,t:"@1x"},"131":{p:1,n:"JuanODonoju.png",g:"4397",o:true,t:"@1x"},"101":{p:1,n:"fondo-09.jpg",g:"2799",o:true,t:"@1x"},"192":{p:1,n:"bravo%20copia-3.png",g:"5645",t:"@1x"},"162":{p:1,n:"fondo-12_2x.jpg",g:"5180",o:true,t:"@2x"},"132":{p:1,n:"JuanODonoju_2x.png",g:"4397",o:true,t:"@2x"},"102":{p:1,n:"fondo-09_2x.jpg",g:"2799",o:true,t:"@2x"},"193":{p:1,n:"iturbide%20copia-3.png",g:"5646",t:"@1x"},"163":{p:1,n:"Back.png",g:"5242",o:true,t:"@1x"},"133":{p:1,n:"CDMX.png",g:"4463",o:true,t:"@1x"},"103":{p:1,n:"Hermenegildo_galeana.png",g:"2934",o:true,t:"@1x"},"194":{p:1,n:"calleja%20copia-2.png",g:"5647",t:"@1x"},"164":{p:1,n:"Back_2x.png",g:"5242",o:true,t:"@2x"},"134":{p:1,n:"CDMX_2x.png",g:"4463",o:true,t:"@2x"},"104":{p:1,n:"Hermenegildo_galeana_2x.png",g:"2934",o:true,t:"@2x"},"230":{p:1,n:"LUPA-1_2x.png",g:"6773",o:true,t:"@2x"},"195":{p:1,n:"Back-2.png",g:"5736",t:"@1x"},"200":{p:1,n:"HUBOOKS.png",g:"6598",t:"@1x"},"165":{p:1,n:"flecha2-1.png",g:"5243",t:"@1x"},"135":{p:1,n:"Guadalajara.png",g:"4518",o:true,t:"@1x"},"105":{p:1,n:"bravo%20copia-1.png",g:"2935",o:true,t:"@1x"},"231":{p:1,n:"lineas-tiempo-1.png",g:"6816",o:true,t:"@1x"},"196":{p:1,n:"sable.png",g:"5737",t:"@1x"},"201":{p:1,n:"BY_HUMAN.png",g:"6599",t:"@1x"},"166":{p:1,n:"fondo-08-1.jpg",g:"5244",o:true,t:"@1x"},"136":{p:1,n:"Guadalajara_2x.png",g:"4518",o:true,t:"@2x"},"106":{p:1,n:"bravo%20copia-1_2x.png",g:"2935",o:true,t:"@2x"},"232":{p:1,n:"lineas-tiempo-1_2x.png",g:"6816",o:true,t:"@2x"},"197":{p:1,n:"estrella.png",g:"5738",t:"@1x"},"202":{p:1,n:"icono-quebuscar-01-01.png",g:"6607",t:"@1x"},"167":{p:1,n:"fondo-08-1_2x.jpg",g:"5244",o:true,t:"@2x"},"137":{p:1,n:"Fray_servando.png",g:"4567",o:true,t:"@1x"},"107":{p:1,n:"guerrero%20copia-1.png",g:"2936",o:true,t:"@1x"},"233":{p:1,n:"huin-birrete-circular.png",g:"6836",o:true,t:"@1x"},"198":{p:1,n:"campana-3.png",g:"5739",t:"@1x"},"203":{p:1,n:"icono-personajes-01-01.png",g:"6611",t:"@1x"},"168":{p:1,n:"restart.png",g:"5245",o:true,t:"@1x"},"138":{p:1,n:"Fray_servando_2x.png",g:"4567",o:true,t:"@2x"},"108":{p:1,n:"guerrero%20copia-1_2x.png",g:"2936",o:true,t:"@2x"},"234":{p:1,n:"huin-birrete-circular_2x.png",g:"6836",o:true,t:"@2x"},"199":{p:1,n:"corona.png",g:"2233",t:"@1x"},"204":{p:1,n:"en-tu-vida.png",g:"6612",o:true,t:"@1x"},"169":{p:1,n:"restart_2x.png",g:"5245",o:true,t:"@2x"},"139":{p:1,n:"fondo-08.jpg",g:"4568",o:true,t:"@1x"},"109":{p:1,n:"fondo-14.jpg",g:"2997",o:true,t:"@1x"},"235":{p:1,n:"canion_verde-1.png",g:"2547",t:"@1x"},"205":{p:1,n:"en-tu-vida_2x.png",g:"6612",o:true,t:"@2x"},"0":{n:"jquery-2.1.3.min.js"},"1":{n:"jquery-ui.min.js"},"236":{p:1,n:"canion_verde-2.png",g:"6872",o:true,t:"@1x"},"2":{n:"jquery.ui.touch-punch.min.js"},"206":{p:1,n:"icono-vida-01-01-01.png",g:"6613",t:"@1x"},"3":{p:1,n:"batallas.png",g:"82",t:"@1x"},"4":{p:1,n:"personajes.png",g:"84",t:"@1x"},"237":{p:1,n:"canion_verde-2_2x.png",g:"6872",o:true,t:"@2x"},"5":{p:1,n:"lineas-tiempo.png",g:"97",t:"@1x"},"207":{p:1,n:"que-buscar.png",g:"6614",o:true,t:"@1x"},"6":{p:1,n:"LUPA.png",g:"98",o:true,t:"@1x"},"7":{p:1,n:"LUPA_2x.png",g:"98",o:true,t:"@2x"},"8":{p:1,n:"canion_rojo.png",g:"888",o:true,t:"@1x"},"238":{p:1,n:"canion_verde-3.png",g:"6873",o:true,t:"@1x"},"208":{p:1,n:"que-buscar_2x.png",g:"6614",o:true,t:"@2x"},"9":{p:1,n:"canion_rojo_2x.png",g:"888",o:true,t:"@2x"},"239":{p:1,n:"canion_verde-3_2x.png",g:"6873",o:true,t:"@2x"},"209":{p:1,n:"el-camino-01.png",g:"6615",t:"@1x"},"180":{p:1,n:"CDMX-1.png",g:"5521",o:true,t:"@1x"},"150":{p:1,n:"iturbide%20copia-1_2x.png",g:"4897",o:true,t:"@2x"},"120":{p:1,n:"mina%20copia-1_2x.png",g:"3741",o:true,t:"@2x"},"181":{p:1,n:"CDMX-1_2x.png",g:"5521",o:true,t:"@2x"},"151":{p:1,n:"victoria%20copia-1-1.png",g:"4898",o:true,t:"@1x"},"121":{p:1,n:"Valladolid%20%28Morelia%29.png",g:"3911",o:true,t:"@1x"},"182":{p:1,n:"allende%20copia-2.png",g:"5522",o:true,t:"@1x"},"152":{p:1,n:"victoria%20copia-1-1_2x.png",g:"4898",o:true,t:"@2x"},"122":{p:1,n:"Valladolid%20%28Morelia%29_2x.png",g:"3911",o:true,t:"@2x"},"183":{p:1,n:"allende%20copia-2_2x.png",g:"5522",o:true,t:"@2x"},"153":{p:1,n:"Pedro_celestino.png",g:"4899",o:true,t:"@1x"},"123":{p:1,n:"Matamoros.png",g:"3989",o:true,t:"@1x"},"184":{p:1,n:"victoria%20copia-2.png",g:"5637",t:"@1x"},"154":{p:1,n:"Pedro_celestino_2x.png",g:"4899",o:true,t:"@2x"},"124":{p:1,n:"Matamoros_2x.png",g:"3989",o:true,t:"@2x"},"220":{p:1,n:"ESTADIO.png",g:"6707",t:"@1x"},"185":{p:1,n:"josefa%20copia.png",g:"5638",t:"@1x"},"155":{p:1,n:"iturbide%20copia-1-1.png",g:"4994",o:true,t:"@1x"},"125":{p:1,n:"cruz-1-1.png",g:"3990",o:true,t:"@1x"},"221":{p:1,n:"mapa%20df.jpg",g:"6708",o:true,t:"@1x"},"186":{p:1,n:"mina%20copia-3.png",g:"5639",t:"@1x"},"156":{p:1,n:"iturbide%20copia-1-1_2x.png",g:"4994",o:true,t:"@2x"},"126":{p:1,n:"cruz-1-1_2x.png",g:"3990",o:true,t:"@2x"},"222":{p:1,n:"mapa%20df_2x.jpg",g:"6708",o:true,t:"@2x"},"187":{p:1,n:"hidalgo%20copia-4.png",g:"5640",t:"@1x"},"157":{p:1,n:"fondo-16.jpg",g:"4995",o:true,t:"@1x"},"127":{p:1,n:"iturbide%20copia-2.png",g:"4197",o:true,t:"@1x"},"223":{p:1,n:"AUDITORIO.png",g:"6709",t:"@1x"},"188":{p:1,n:"aldama%20copia-3.png",g:"5641",t:"@1x"},"158":{p:1,n:"fondo-16_2x.jpg",g:"4995",o:true,t:"@2x"},"128":{p:1,n:"iturbide%20copia-2_2x.png",g:"4197",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"224":{p:1,n:"Angel.png",g:"6710",t:"@1x"},"189":{p:1,n:"guerrero%20copia-2.png",g:"5642",t:"@1x"},"159":{p:1,n:"calleja%20copia-1-1.png",g:"5179",o:true,t:"@1x"},"-2":{n:"blank.gif"},"129":{p:1,n:"fondo-17.jpg",g:"4263",o:true,t:"@1x"},"225":{p:1,n:"question.png",g:"6751",o:true,t:"@1x"},"226":{p:1,n:"question_2x.png",g:"6751",o:true,t:"@2x"},"227":{p:1,n:"question-1.png",g:"6764",o:true,t:"@1x"},"228":{p:1,n:"question-1_2x.png",g:"6764",o:true,t:"@2x"},"229":{p:1,n:"LUPA-1.png",g:"6773",o:true,t:"@1x"},"10":{p:1,n:"campana.png",g:"889",t:"@1x"},"11":{p:1,n:"canion_verde.png",g:"890",o:true,t:"@1x"},"12":{p:1,n:"canion_verde_2x.png",g:"890",o:true,t:"@2x"},"13":{p:1,n:"icono-documentos2.png",g:"891",o:true,t:"@1x"},"14":{p:1,n:"icono-documentos2_2x.png",g:"891",o:true,t:"@2x"},"20":{p:1,n:"guerrero%20copia_2x.png",g:"1211",o:true,t:"@2x"},"15":{p:1,n:"morelos%20copia.png",g:"1201",o:true,t:"@1x"},"21":{p:1,n:"allende%20copia.png",g:"1220",o:true,t:"@1x"},"16":{p:1,n:"morelos%20copia_2x.png",g:"1201",o:true,t:"@2x"},"22":{p:1,n:"allende%20copia_2x.png",g:"1220",o:true,t:"@2x"},"17":{p:1,n:"mina%20copia.png",g:"1206",o:true,t:"@1x"},"23":{p:1,n:"aldama%20copia.png",g:"1221",o:true,t:"@1x"},"18":{p:1,n:"mina%20copia_2x.png",g:"1206",o:true,t:"@2x"},"24":{p:1,n:"aldama%20copia_2x.png",g:"1221",o:true,t:"@2x"},"19":{p:1,n:"guerrero%20copia.png",g:"1211",o:true,t:"@1x"},"30":{p:1,n:"iturbide%20copia_2x.png",g:"1233",o:true,t:"@2x"},"170":{p:1,n:"morelos%20copia-2.png",g:"5246",o:true,t:"@1x"},"140":{p:1,n:"fondo-08_2x.jpg",g:"4568",o:true,t:"@2x"},"25":{p:1,n:"bravo%20copia.png",g:"1225",o:true,t:"@1x"},"110":{p:1,n:"fondo-14_2x.jpg",g:"2997",o:true,t:"@2x"},"31":{p:1,n:"calleja%20copia.png",g:"1237",o:true,t:"@1x"},"26":{p:1,n:"bravo%20copia_2x.png",g:"1225",o:true,t:"@2x"},"171":{p:1,n:"morelos%20copia-2_2x.png",g:"5246",o:true,t:"@2x"},"32":{p:1,n:"calleja%20copia_2x.png",g:"1237",o:true,t:"@2x"},"141":{p:1,n:"mina%20copia-2.png",g:"4569",o:true,t:"@1x"},"27":{p:1,n:"victoria%20copia.png",g:"1229",o:true,t:"@1x"},"111":{p:1,n:"fondo-10.jpg",g:"3081",o:true,t:"@1x"},"33":{p:1,n:"hidalgo%20copia.png",g:"1193",o:true,t:"@1x"}},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Cargando";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,true,true,false);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();