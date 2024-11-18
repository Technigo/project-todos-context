import '../Styles/Filters.css'

export const Filters = ({ setFilter, uncompletedTasksCount, filter }) => {
  return (
    <section className="filters">
      <div className="filtersWrapper">
        <button onClick={() => setFilter('all')}>All Tasks</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed Tasks</button>
      </div>
      {/* show the counter only when displaying all tasks */}
      {filter === 'all' && (
        <span>Tasks to complete: {uncompletedTasksCount}</span>
      )}
    </section>
  )
}
