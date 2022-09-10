import { Link } from 'react-router-dom'

function PageNotFound() {
  const isLoggedIn = false;

  return (
    <div>
      <h1>404</h1>
      <p>The page you're looking for can't be found.</p>
      <Link to={isLoggedIn ? '/my-reading-list' : '/'}>Take me back</Link>
    </div>
  )

}

export default PageNotFound;