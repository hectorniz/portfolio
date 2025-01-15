import PropTypes from 'prop-types'
import PillButton from './PillButton'

function ProjectCard ({url, urlButton, image, title, children}){

  return (
    <article className='bg-slate-800 p-10 rounded-3xl flex flex-col items-center m-2 w-[22rem] mt-6'>
        <img src={image} className='w-64 h-64 object-cover overflow-hidden rounded-lg hover:scale-110 transition-all' alt='project'/>
        <a href={url}><h2 className='text-2xl text-orange-500 font-bold p-5 hover:text-orange-600 hover:scale-110 transition-all'>{title} <i className='bx bx-link-external'></i></h2></a>
        <p className='w-64 h-36 overflow-hidden'>{children}</p>
        <div className='mt-10 mb-2'>
          <PillButton url={urlButton}>GitHub Repository</PillButton>
        </div>
    </article>
  )
}

ProjectCard.propTypes = {
    url: PropTypes.string.isRequired,
    urlButton: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default ProjectCard