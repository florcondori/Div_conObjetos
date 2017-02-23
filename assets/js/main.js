var estudiante = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
					{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" }, 
					{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 					{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 					{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

	
	
var pantalla = document.getElementById("pantalla");
var mensaje = "";
estudiante.forEach(function(elemento){
	mensaje += "<div>"+
					"<ul>"+
						"<li> Nombre: "+elemento.nombre+"</li>"+
						"<li> Apellido: "+elemento.apellido+"</li>"+
						"<li> Rol: "+elemento.rol+"</li>"+
						"<li> Cumpleaños: "+elemento.cumpleanios+"</li>"+
					"</ul>"+
				"</div>";
});

pantalla.innerHTML = mensaje;
