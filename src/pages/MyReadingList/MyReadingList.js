import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import './MyReadingList.scss'

function MyReadingList() {
  useEffect(() => document.title = 'Personal Reading List | My Reading List')
  return (
    <div className='px-3 px-sm-4 px-md-5'>
      <h1 className='text-center mt-5 mb-0'>User's Reading List</h1>
      <div className='reading-list mt-5'>
        <Card className='reading-list__book'>
          <Card.Img variant="top" src="/src/assets/unsplash-stack-of-books.avif" />
          <Card.Body>
            <Card.Title>Book Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officiis! Omnis repudiandae dignissimos incidunt assumenda nostrum, exercitationem eaque ducimus nihil, atque magnam distinctio, vero reprehenderit possimus. Temporibus alias ut illum.
            </Card.Text>
            <Button variant="primary">View on Amazon</Button>
            <Button variant="primary">View on Goodreads</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default MyReadingList;