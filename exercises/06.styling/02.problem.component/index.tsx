import * as ReactDOM from 'react-dom/client'

// 🐨 create a component called "Box" which accepts style (defaults to {}), className (defaults to ''), and children props.
// 🐨 Make it render a div with the style, className, and children applied.
// 🐨 Also automatically add the fontStyle: 'italic' style to the style prop so consumers don't have to provide that
// 🐨 And automatically add the "box" className to the className prop so consumers don't have to provide that as well.
// 💯 as a bonus, have this accept any number of additional props (typed as React.HTMLAttributes<HTMLDivElement>)
function Box({
	style = {},
	className = "",
	...childrenProps
}:React.HTMLAttributes<HTMLDivElement>){
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
			
			<Box 
			className="box--small"
		    style={{ backgroundColor: 'lightblue' }}
			>
			small lightblue box
			</Box>
			<Box 
			className="box--medium"
		    style={{ backgroundColor: 'pink' }}
			>
			medium pink box
			</Box>
			<Box 
			className="box--large"
		    style={{ backgroundColor: 'orange' }}
			>
			orange large box
			</Box>
			<Box>
			sizeless colorless box
			</Box>
		</>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
