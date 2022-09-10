import { Link } from 'react-router-dom'

function PageNotFound() {
  const isLoggedIn = false;

  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center px-3'
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <h1
        className='fw-bold'
        style={{ fontSize: '60px' }}
      >
        404
      </h1>

      <p
        className='text-center m-0'
        style={{ fontSize: '18px' }}
      >
        The page you are looking for cannot be found.
      </p>

      <Link
        className='mt-3'
        to={isLoggedIn ? '/my-reading-list' : '/'}
      >
        Take me back
      </Link>
    </div>
  )

}

export default PageNotFound;