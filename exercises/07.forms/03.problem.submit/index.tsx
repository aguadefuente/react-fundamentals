import * as ReactDOM from 'react-dom/client'

function submitHandler(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault()
	const formData = new FormData(event.currentTarget)
	console.log(Object.fromEntries(formData))
}

function App() {
	return (
		<form
			// 🐨 set the method to "POST" - NOTA: por defecto es "GET", pero este hace que lo ingresemos se vea en la url como query parameters después del ?.
			//Post en cambio envía los datos al servidor y no se ve en la url, esto evita que veamos passwords e información sensible quede públicas
			method="POST"
			// 🐨 set the encType to "multipart/form-data" //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype
			encType="multipart/form-data"
			// 🐨 add an onSubmit handler that calls event.preventDefault()
			// 🐨 create a FormData object from the the form (💰 event.currentTarget)
			// 🐨 log the result of Object.fromEntries(formData)
			onSubmit={submitHandler}
		>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			<div>
				<label htmlFor="passwordInput">Password:</label>
				<input id="passwordInput" name="password" type="password" />
			</div>
			<div>
				<label htmlFor="ageInput">Age:</label>
				<input id="ageInput" name="age" type="number" min="0" max="200" />
			</div>
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input id="photoInput" name="photo" type="file" accept="image/*" />
			</div>
			<div>
				<label htmlFor="colorInput">Favorite Color:</label>
				<input id="colorInput" name="color" type="color" />
			</div>
			<div>
				<label htmlFor="startDateInput">Start Date:</label>
				<input id="startDateInput" name="startDate" type="date" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)

/*Notas: Tutorial sin type-script

function handleSubmit(event) {
	event.preventDefault()
	const value = event.target[0].value
	console.log(event.target)
}
//event es una especie de objeto de react que dentro tiene muchas properties
, entre ellas .target .value 
//event.target[0] nos traería el valor del primer elemento, en nuestro ejemplo el input username
//tb podemos acceder al valor haciendo referencia al name o id property
//eg: event.target.element.usernameInput.value (id) o event.target.element.username.value (name)

<form onSubmit={handleSubmit}>
	<label htmlFor="usernameInput">Username:</label>
	<input id="usernameInput" name="username" />	
</form>

//es importante darle un name al input, it will be used as a key in the form data, for example { firstName: "Taylor" }
//sino cuando submitted el form no se asignará ninguna key value a ese input
//lo mismo si usamos un label ponerle el id

//CON PROPERTY
function UsernameForm({onSubmitUsername}) {

	function handlerSubmit(event) {
	event.preventDefault()
	const value = event.target[0].value
	onSubmitUsername(value)
} 

return (
	<form onSubmit={handleSubmit}>
	<label htmlFor="usernameInput">Username:</label>
	<input id="usernameInput" name="username" />
	<button type="submit">Submit</button>
</form>
)
}

function App() {
	const onSubmitUsername = username => alert(`Wellcome ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername}>
}

//USEREF HOOK nos devolverá un objet para acceder al valor del input
function UsernameForm({onSubmitUsername}) {

    /////Usamos el hook
	cosnt usernameInputRef = useRef() 

	function handlerSubmit(event) {
	event.preventDefault()

	/////Agarramos el valor de ese objeto useRef
	const value = usernameInputRef.current.value 
	onSubmitUsername(value)
} 

return (
	<form onSubmit={handleSubmit}>
	<label htmlFor="usernameInput">Username:</label>

	/////Agregamos el ref al input al que se refiere!!
	<input ref={usernameInputRef} id="usernameInput" name="username" /> 
	<button type="submit">Submit</button>
</form>
)
}

*/
