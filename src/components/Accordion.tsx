import React, { useState } from 'react'
import ac from './Accordion.module.css'

type AccordionProps = {
	title: string
	children: React.ReactNode
}
const Accordion = (props: AccordionProps) => {
	const { title, children } = props
	const [show, setShow] = useState(false)

	const onAccordionClick = () => {
		setShow(!show)
	}

	return (
		<div className={ac.accordion}>
			<div className={ac['accordion-title']}>
				<h3>{title}</h3>
				<button onClick={() => onAccordionClick()}>{!show ? 'Show' : 'Hide'}</button>
			</div>
			{show && <div>{children}</div>}
		</div>
	)
}

export default Accordion
