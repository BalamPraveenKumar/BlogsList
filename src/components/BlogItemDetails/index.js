import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {},isLoading:true}
  componentDidMount() {
    this.getBlogItemData()
  }


  getBlogItemData = async () => {
   
    const {id} =this.props
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateddata = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
      author: data.author,
    }
    this.setState({blogData: updateddata,isLoading:false})
  }
  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
        
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading}=this.state
    return(<div className="blog-container">
        {isLoading?(
            <div className="loader-container">
                       <Loader
                          type="TailSpin"
                          color="#0b69ff"
                          height={80}
                          width={80}
                          visible={true}
                        />
                      </div>
        )
        :
        (
            this.renderBlogItemDetails()

        )}
        
        </div>)
  }
}

export default BlogItemDetails
