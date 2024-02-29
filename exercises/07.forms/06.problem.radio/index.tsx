import * as ReactDOM from 'react-dom/client'

function App() {
	return (
		<form
			method="POST"
			encType="multipart/form-data"
			onSubmit={event => {
				event.preventDefault()
				const formData = new FormData(event.currentTarget)
				console.log(Object.fromEntries(formData))
			}}
		>
			<div>
				<label htmlFor="accountTypeSelection">Account Type:</label>
				<select id="accountTypeSelection" name="accountType">
					<option value="">--Please select an option--</option>
					<option value="admin">Admin</option>
					<option value="teacher">Teacher</option>
					<option value="parent">Parent</option>
					<option value="student">Student</option>
				</select>
			</div>
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
			{/* 🐨 add a fieldset with the legend "Visibility" */}
			{/* 🐨 add two radio buttons for public/private options for the name "visibility" */}
			<fieldset>
				<legend>Visibility:</legend>
				<div>
					<input defaultChecked type="radio" value="public" name="visibility" />
					<label>Public</label>
				</div>
				<div>
					<input type="radio" value="private" name="visibility" />
					<label>Private</label>
				</div>
			</fieldset>

			<div>
				<label>
					<input name="waiver" type="checkbox" />
					Waiver Signed
				</label>
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

/*Nota:
A radio group is defined by giving each of radio buttons in the 
group the same name
ej) name="contact" pero uno con value="public" y otro con value="private"
*/
