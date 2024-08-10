import PropTypes from 'prop-types'
import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';
const CategoryBox = ({ label, icon: Icon }) => {
  const navigate = useNavigate()
  const [params] = useSearchParams();
  const category = params.get('category');
  const handleCategory = () => {
    console.log(label)
    const category = { category: label}
    const str = queryString.stringify(category)
    console.log(str)
    navigate(`?${str}`)
  }
  return (
    <div
    onClick={handleCategory}
      className={`flex
        ${category === label && 'border-[#F43F5E] border-b-[3px]'}
        flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
