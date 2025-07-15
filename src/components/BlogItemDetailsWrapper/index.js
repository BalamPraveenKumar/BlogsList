import { useParams } from 'react-router-dom'
import BlogItemDetails from '../BlogItemDetails'

const BlogItemDetailsWrapper = (props) => {
  const {id} = useParams()
  
  return <BlogItemDetails id={id} />
}

export default BlogItemDetailsWrapper