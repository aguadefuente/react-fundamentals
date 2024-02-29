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
			<input type="hidden" name="orgId" value="123" />
			<div>
				<label htmlFor="accountTypeSelection">Account Type:</label>
				{/* 🐨 set the default value to "student" */}
				<select
					defaultValue="student"
					id="accountTypeSelection"
					name="accountType"
				>
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
				{/* 🐨 set the default value to 18 */}
				<input
					defaultValue={18}
					id="ageInput"
					name="age"
					type="number"
					min="0"
					max="200"
				/>
			</div>
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input id="photoInput" name="photo" type="file" accept="image/*" />
			</div>
			<div>
				<label htmlFor="colorInput">Favorite Color:</label>
				{/* 🐨 set the default value to #002E5D */}
				<input
					defaultValue="#002E5D"
					id="colorInput"
					name="color"
					type="color"
				/>
			</div>
			<fieldset>
				<legend>Visibility:</legend>
				<label>
					{/* 🐨 set the default value to "Public" */}
					<input defaultChecked name="visibility" type="radio" value="public" />
					Public
				</label>
				<label>
					<input name="visibility" type="radio" value="private" />
					Private
				</label>
			</fieldset>
			<div>
				<label>
					{/* 🐨 set the default value to checked */}
					<input defaultChecked name="waiver" type="checkbox" />
					Waiver Signed
				</label>
			</div>
			<div>
				{/* 🐨 set the default value to today */}
				<label htmlFor="startDateInput">Start Date:</label>
				<input
					defaultValue={new Date().toISOString().slice(0, 10)}
					id="startDateInput"
					name="startDate"
					type="date"
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)

/*Nota:
In React, you use the `defaultValue` prop to set the default value of an input
and the `defaultChecked` prop to set the default value of a checkbox or radio.
The `defaultValue` should be a string (or it will be coerced to a string) that
matches the format of the input.

<input type="text" defaultValue="Hello World" />

If it's a date, you need to use a string, but it needs to be in the format
`YYYY-MM-DD` (because that's the format of the value when the user selects a
date). You can use the `toISOString` method on a `Date` object which gives a
string with the format `YYYY-MM-DDTHH:mm:ss.sssZ`, so we can use `slice` to get
the first 10 characters:

```tsx
<input type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
```

- to `select` as well
```tsx
<select defaultValue="pineapple">
	<option value="apple">Apple</option>
	<option value="banana">Banana</option>
	<option value="pineapple">Pineapple</option>
</select>

- Checkboxes and Radios are special cases. For these, you set the `defaultChecked`
prop:

```tsx
<input type="checkbox" defaultChecked />

- for the radio, just set defaultChecked on the one you want selected:
<input type="radio" name="fruit" value="apple" defaultChecked />
<input type="radio" name="fruit" value="banana" />
<input type="radio" name="fruit" value="pineapple" />

 */
