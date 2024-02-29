import * as ReactDOM from 'react-dom/client'

// 🐨 create a component called "Box" which accepts style (defaults to {}), className (defaults to ''), and children props.
// 🐨 Make it render a div with the style, className, and children applied.
// 🐨 Also automatically add the fontStyle: 'italic' style to the style prop so consumers don't have to provide that
// 🐨 And automatically add the "box" className to the className prop so consumers don't have to provide that as well.
// 💯 as a bonus, have this accept any number of additional props (typed as React.HTMLAttributes<HTMLDivElement>)
function Box({
	style = {},
	className = '',
	...childrenProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={`box ${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...childrenProps}
		/> //no cerramos el div porque el children esta como property sino seria: <div>{childre}</div> aquí si lo cerramos
	)
}

// and apply those to the rendered div as well.

// 🐨 update all of these to use the <Box> component with the appropriate props.
/*const smallBox = (
	<div
		className="box box--small"
		style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}
	>
		small lightblue box
	</div>
)
const mediumBox = (
	<div
		className="box box--medium"
		style={{ fontStyle: 'italic', backgroundColor: 'pink' }}
	>
		medium pink box
	</div>
)
const largeBox = (
	<div
		className="box box--large"
		style={{ fontStyle: 'italic', backgroundColor: 'orange' }}
	>
		large orange box
	</div>
)
const sizelessColorlessBox = (
	<div className="box" style={{ fontStyle: 'italic' }}>
		sizeless colorless box
	</div>
)
*/

function App() {
	return (
		<>
			<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box className="box--large" style={{ backgroundColor: 'orange' }}>
				orange large box
			</Box>
			<Box>sizeless colorless box</Box>
		</>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)

/*NOTAS - lo siguiente es sin typescript
tener en cuenta cuando usamos spread ...props

function Box({...props}){
	return <div className="box" {...props}/>
}

1 - En este caso, {...props} va a sobreescribir la className box, por lo que no
se va a aplicar en smallBox

function Box({...props}){
	return <div className="box" {...props}/>
}

2 - En este caso, al estar {...props} antes, se va a aplicar la className box
pero no box--small

3- Debemos entonces agregar la className como una property para que no se sobreescriba
function Box({className, ...otherprops}){
	return <div className={`box ${className}`} {...otherprops}/>
}

const smallBox = (
	<div
		className="box--small"
		style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}
	>
		small lightblue box
	</div>
)

4- la misma sobreescritura sucede con style property y {...props} si no ponemos una property específica para ella
function Box({className, ...otherprops}){
	return <div className={`box ${className}`} style={{fontStyle:"italic"}} {...otherprops}/>
}

- si {...props} está después de style, no aplicará italic
- si {...props} está después, no aplicará los backgroundColors
- La solución:

function Box({className, style, ...otherprops}){
	return <div className={`box ${className}`} style={{fontStyle:"italic", ...style}} {...otherprops}/>
}

//OJO: El ORDEN DE ...style es importante
//style={{fontStyle:"italic", ...style}}
//ES MEJOR PONER LOS DEFAULT VALUES ANTES, FONTSTYLE EN NUESTRO CASO
//Y LUEGO LOS ...STYLE SPREAD. SINO SI ESTÁ ANTES 
//GENERA SOBREESCRITURA
//style={{...style, backgroundColor: "green", fontStyle:"italic", }}
//haría todas las boxes green

const smallBox = (
	<div
		className="box box--small"
		style={{backgroundColor: 'lightblue' }} //no es necesario pone fontStyle="italic"
	>
		small lightblue box
	</div>
)

*/
