import classes from './HomePage.module.css'

export function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quidem quisquam nihil itaque molestias amet,
				laudantium dolore sequi nulla earum dolor sint velit nesciunt corporis, nobis minus ab magni accusamus.
			</p>
			<button className={classes.btn}>Scoped Styled Btn</button>
			<button className="btn">Global Styled Btn</button>
		</div>
	)
}
