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
			{/* 🐨 add a checkbox with the label "Waiver Signed" */}
			{/* 💰 put the <input> inside the <label> */}
			<label htmlFor="waiver">
				Waiver Signed:
				<input type="checkbox" id="waiver" name="waiver" />
			</label>
			<div>
				<label /*htmlFor="startDateInput"*/>Start Date:</label>
				<input /*id="startDateInput"*/ name="startDate" type="date" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

/*
Nota:
For checkboxes, typically they appear on the left side of the 
label and in this case we can even have the checkbox be inside 
the label which means we don't need to worry about the for and id 
attributes which is nice. 
Make sure to submit the form with the checkbox checked and without 
it checked so you can familiarize yourself with the difference in 
form data because it's kinda funny
- si submit con el checked veremos una key:value - waiver:"on"

Nota 2:
You may have also noticed that the `age` input is a string even 
though its `type` attribute is `number`. It's good to understand 
how values are submitted for different input types!
*/

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
