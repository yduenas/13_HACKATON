//const listado = document.getElementById('listado');
//const infoCarritos = [];
let infoCarrito = [];
window.onload = obtenerInfo();

async function obtenerInfo() {
	//alert('hola');

	/* inicio */
	try {
		const infoCarritos = await fetch('./js/perrito.js');
		//console.log(infoCarritos);
		//const infoCarrito = await infoCarritos.json();
		const infoCarrito = await infoCarritos.json();
		//console.log(infoCarrito);

		const listado = document.getElementById('listado');
		let template = '';
		infoCarrito.forEach((user) => {
			//console.log(user.title);
			//console.log(user);
			template += `

									<div id="${user.id}"class="item col-md-3 col-6 product-block">
										<div class="d-flex justify-content-between">
											<div>
												<a onclick=actualizar(${user.id})>
													<i class="bi bi-pencil-square"></i><br />
													edit
												</a>
											</div>
											<div>
												<a onclick=eliminar(${user.id})>
													<i class="bi bi-x-circle"></i><br />
													delete
												</a>
											</div>
										</div>

										<img class="img-fluid rounded-circle" src="${user.url}" alt="Perro1" />

										<div class="caption">
											<h4>${user.nombre}</h4>
											<h5>telefono:${user.telefono} | correo:${user.correo}</h5>
											<h6>${user.pais}</h6>
											<div>about:${user.about}</div>
										</div>
									</div>

									`;
		});
		listado.innerHTML = template;
		return infoCarrito;
		//console.log(infoCarrito);
	} catch (error) {
		console.log(error);
		/* fin */
	}
}

function actualizar(id) {
	alert('actualizando: ' + id);
}

function eliminar(id) {
	//alert('eliminando: ' + id);
	var elemento = document.getElementById(id);
	//alert(elemento);
	if (!elemento) {
		alert('El elemento selecionado no existe');
	} else {
		elemento.remove();
	}
}

async function agregarInfo() {
	try {
		const infoCarritos = await fetch('./js/perrito.js');
		//console.log(infoCarritos);
		//const infoCarrito = await infoCarritos.json();
		let infoCarrito = await infoCarritos.json();

		const infoCarritoMODAL = {
			//	id: document.getElementById('id').value,
			id: infoCarrito.length + 1,
			nombre: document.getElementById('nombre').value,
			url: document.getElementById('url').value,
			telefono: document.getElementById('telefono').value,
			correo: document.getElementById('correo').value,
			pais: document.getElementById('pais').value,
			about: document.getElementById('about').value,
		};
		//console.log(infoCarrito.length);
		//console.log(infoCarritos);
		//console.log(infoCarrito);
		//console.log(infoCarritoMODAL);
		infoCarrito = [...infoCarrito, infoCarritoMODAL];

		document.getElementById('nombre').value = '';
		//document.getElementById('url').value = '';
		document.getElementById('telefono').value = '';
		document.getElementById('correo').value = '';
		document.getElementById('pais').value = '';
		document.getElementById('about').value = '';
		//console.log(infoCarrito);

		let template = '';
		infoCarrito.forEach((user) => {
			//console.log(user.title);
			//console.log(user);
			template += `

									<div id="${user.id}"class="item col-md-3 col-6 product-block">
										<div class="d-flex justify-content-between">
											<div>
												<a onclick=actualizar(${user.id})>
													<i class="bi bi-pencil-square"></i><br />
													edit
												</a>
											</div>
											<div>
												<a onclick=eliminar(${user.id})>
													<i class="bi bi-x-circle"></i><br />
													delete
												</a>
											</div>
										</div>

										<img class="img-fluid rounded-circle" src="${user.url}" alt="Perro1" />

										<div class="caption">
											<h4>${user.nombre}</h4>
											<h5>telefono:${user.telefono} | correo:${user.correo}</h5>
											<h6>${user.pais}</h6>
											<div>about:${user.about}</div>
										</div>
									</div>

									`;
		});
		listado.innerHTML = template;
	} catch (error) {
		console.log(error);
		/* fin */
	}

	//console.log(infoCarrito2);
	//alert('hola');
	//alert(id + ' - ' + nombre + ' - ' + url + ' - ' + telefono + ' - ' + correo + ' - ' + pais + ' - ' + about);

	//infoCarritos = [...infoCarritos, infoCarrito2];
}
// console.log(infoCarrito);

const data = obtenerInfo().then();

console.log(data);
/*
class carrito {
	constructor(id, nombre, url, telefono, correo, pais, about) {
		this.id = id;
		this.nombre = nombre;
		this.url = url;
		this.telefono = telefono;
		this.correo = correo;
		this.pais = pais;
		this.about = about;
	}
	crearInfoCarrito() {
		const infoCarrito = {
			id: this.id,
			nombre: this.nombre,
			url: this.url,
			telefono: this.telefono,
			correo: this.correo,
			pais: this.pais,
			about: this.about,
		};

		infoCarritos = [...infoCarritos, infoCarrito];

		infoCarritos = infoCarrito.filter((item, index) => {
			return infoCarrito.indexOf(item) === index;
		});

	}
}
*/
/*
const nuevoArticulo = new carrito(1, 'nombre', 'url', 'telefono', 'correo', 'pais', 'about');
nuevoArticulo.crearInfoCarrito();
*/
/*
const btn = document.getElementById('btnGET');
const listado = document.getElementById('listado');

btn.addEventListener('click', obtenerInfo);
// async => await
async function obtenerInfo() {
	//console.log('hola');
	try {
		const users = await fetch('perrito.js');
		const user = await users.json();

		const listado = document.getElementById('listado');
		let template = '';
		user.forEach((user) => {
			//console.log(user.title);
			//console.log(user);
			template += `<tr>
											<td>${user.id}</td>
											<td>${user.name}</td>
											<td>${user.email}</td>
									</tr>`;
		});
		listado.innerHTML = template;

		console.log(user);
	} catch (error) {
		console.log(error);
	}
}
*/
