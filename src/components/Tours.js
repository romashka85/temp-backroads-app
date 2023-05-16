import { tours } from "../data"
import Title from "./Title"

const Tours = () => {
  return (
	<section className="section" id="tours">
	<Title title="featured" subTitle="tours" />
	<div className="section-center featured-center">
		{tours.map(({id, image, date, title, info, icon, location, duration, cost})=> {
			return <article className="tour-card" key={id}>
			<div className="tour-img-container">
			  <img src={image} className="tour-img" alt="" />
			  <p className="tour-date">{date}</p>
			</div>
			<div className="tour-info">
			  <div className="tour-title">
				<h4>{title}</h4>
			  </div>
			  <p>
				{info}
			  </p>
			  <div className="tour-footer">
				<p>
				  <span><i className={icon}></i></span> {location}
				</p>
				<p>{duration} days</p>
				<p>{cost}</p>
			  </div>
			</div>
		  </article>
		})}
	</div>
  </section>
  )
}
export default Tours