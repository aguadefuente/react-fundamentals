import * as ReactDOM from 'react-dom/client'

function App() {
	// 🐨 render a form
	//   🐨 render a "Username" label
	//   🐨 render an input with the name "username"
	// 💯 associate the label to the input using htmlFor and id attributes
	// 💯 explicitly set the button type appropriately
	
	return (
	<form>
		<div>
		   <label htmlFor="usernamelabel">Username:</label>
		   <input type="text" id="usernamelabel" name="username" value="Laura"/>
		</div>
		<button type="submit">submit</button>
	</form>
	)
}
	

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
