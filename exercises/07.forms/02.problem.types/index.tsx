import * as ReactDOM from 'react-dom/client'

function App() {
	return (
		<form>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- photo
				- color
				- startDate
			 */}
			<div>
				<label htmlFor="passwordInput">Password:</label>
				<input type="password" id="passwordInput" name="password" />
			</div>
			<div>
				<label htmlFor="ageInput">Age:</label>
				<input id="ageInput" name="age" type="number" min="0" max="200" />
			</div>
			{/*https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file */}
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input type="file" accept="image/*" id="photoInput" name="photo" />
			</div>
			<div>
				<label htmlFor="colorInput">Favourite Colour:</label>
				<input type="color" id="colorInput" name="color" />
			</div>
			<div>
				<label htmlFor="dateInput">Start Date:</label>
				<input type="date" id="dateInput" name="date" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
