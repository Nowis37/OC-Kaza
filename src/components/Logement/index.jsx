import { Link } from 'react-router-dom'
import { logementList } from '../../datas/logement'
import PropTypes from 'prop-types'

function LocationList() {

	LocationList.propTypes = {
		id: PropTypes.node.isRequired,
		cover: PropTypes.node.isRequired,
		title: PropTypes.string.isRequired
	}

	return (
		<main className='logement'>
			<div className='logement__list'>
				{logementList.map(({ id, cover, title }) =>
					<article className='logement__list__content'>
						<Link to={`/location?id=${id}`}>
							<div className="logement__list__content__bg"></div>
							<img className='logement__list__content__cover' src={cover} alt={`Photo de ${title}`} />
							<p className="logement__list__content__name">{title}</p>
						</Link>
					</article>
				)}
			</div>
		</main>
	)
}

export default LocationList