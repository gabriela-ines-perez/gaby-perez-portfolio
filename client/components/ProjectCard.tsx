import { useState } from 'react'

interface Project {
  name: string
  url: string
  gitHub: string
  id: number
  description: string
  coverImage: string
  detail: string
}

export default function ProjectCard({
  name,
  coverImage,
  gitHub,
  description,
  detail,
}: Project) {
  const [details, setDetails] = useState(false)

  const handleClick = () => {
    setDetails(!details)
  }

  return (
    <>
      <div className="project-card">
        <img src={coverImage} className="card-cover-image" alt={description} />
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <img className="icon" src="/github.png" alt="github logo" />
        </a>
        <button className="purple-button" onClick={handleClick}>
          {details ? 'Hide' : 'Details'}
        </button>
        {details && (
          <div className="details">
            <p>{detail}</p>
          </div>
        )}
      </div>
    </>
  )
}
