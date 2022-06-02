<div className="card m-5">
		<img alt="Card image cap" src={data.image} className="card-img-top" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a href={data.button.url} className="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>