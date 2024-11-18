import { Link } from 'react-router-dom'
import '../Styles/NotFoundPage.css'

export const NotFoundPage = () => {
  return (
    <div className="mainbox">
      <div className="fullError">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
      </div>
      <div class="msg">
        Maybe this page moved? Got deleted? Never existed in the first place?
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  )
}
