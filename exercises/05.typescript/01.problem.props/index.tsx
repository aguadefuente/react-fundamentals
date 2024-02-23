import * as ReactDOM from 'react-dom/client'

/* 
const operations = {
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
}
*/
//como usamos typescript tenemos que poner el valor del argumento 
//dentro de los parámetros y que devuelve por eso los dos puntitos
//después de left:number, right:number, y :number
const operations = {
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

// 🦺 create a type called CalculatorProps
type CalculatorProps = {
	left: number
	operator: string
	right: number
}

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({ left, operator, right }:CalculatorProps) {
	// @ts-expect-error we'll fix this one later
	const result = operations[operator](left, right)
	return (
		<div>
			<code>
				{left} {operator} {right} = <output>{result}</output>
			</code>
		</div>
	)
}

function App() {
	return (
		<div>
			<h1>Calculator</h1>
			<Calculator left={1} operator="+" right={2} />
			<Calculator left={1} operator="-" right={2} />
			<Calculator left={1} operator="*" right={2} />
			<Calculator left={1} operator="/" right={2} />
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
