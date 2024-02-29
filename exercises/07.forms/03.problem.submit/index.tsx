import * as ReactDOM from 'react-dom/client'

function submitHandler(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault()
	const formData = new FormData(event.currentTarget)
	console.log(Object.fromEntries(formData))
}

function App() {
	return (
		<form
			// 🐨 set the method to "POST" - NOTA: por defecto es "GET", pero este hace que lo ingresemos se vea en la url. Post en cambio envía los datos al servidor y no se ve en la url, esto evita que veamos passwords e información sensible quede públicas
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
