import PropTypes from 'prop-types';

function WebSection ({title, children, id}) {
  return (
    <>
      <div id={id} className='bg-slate-900 mt-16 md:mt-24 lg:mt-36 mx-6 md:mx-10 lg:mx-32 rounded-3xl pt-10 lg:pt-16'>
        <h1 className="text-orange-500 text-4xl lg:text-5xl xl:text-6xl ml-5 lg:ml-24 mb-10 lg:mb-14 font-bold">{title}</h1>
        <section className='text-gray-200 text-lg pb-10 lg:pb-14 flex justify-center flex-col md:flex-row mx-6 lg:mx-32'>
          {children}
        </section>
      </div>
    </>
  )
}

WebSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.string
}

export default WebSection
