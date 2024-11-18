import moment from 'moment'
import '../Styles/CategoryFilters.css'

export const CategoryFilters = ({ setFilter }) => {
  return (
    <main>
      <div className="wrapper">
        <h2 className="nowDate">{moment().format('MMM YYYY')}</h2>
        <div className="filtersContainer">
          <button
            onClick={() => setFilter('work')}
            aria-label="Filter by work"
            className="accessible-btn"
          >
            <i className="fa-solid fa-briefcase icon "></i>
          </button>
          <button
            onClick={() => setFilter('personal')}
            aria-label="Filter by personal"
            className="accessible-btn"
          >
            <i className="fa-solid fa-house icon"></i>
          </button>
          <button
            onClick={() => setFilter('health')}
            aria-label="Filter by health"
            className="accessible-btn"
          >
            <i className="fa-solid fa-heart-pulse icon"></i>
          </button>
          <button
            onClick={() => setFilter('economy')}
            aria-label="Filter by economy"
            className="accessible-btn"
          >
            <i className="fa-solid fa-coins icon"></i>
          </button>
          <button
            onClick={() => setFilter('events')}
            aria-label="Filter by events"
            className="accessible-btn"
          >
            <i className="fa-solid fa-calendar-days icon"></i>
          </button>
        </div>
      </div>
    </main>
  )
}
