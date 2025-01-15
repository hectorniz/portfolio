import PropTypes from 'prop-types'

const PillButton = ({url, children}) => {
  return (
    <a href={url} className="bg-orange-500 text-gray-200 font-bold py-2 px-4 rounded-full text-center 
    mt-6 hover:bg-orange-600 hover:py-3 hover:px-5 text-md hover:text-xl transition-all" target='blank'>{children}</a>
  )
}

PillButton.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default PillButton