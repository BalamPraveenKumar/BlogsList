import {Component} from 'react'

import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import './index.css'



class BlogsList extends Component {
    state={blogsData:[],isLoading:true}
    componentDidMount(){
        this.getBlogsData()
    }
    getBlogsData=async()=>{
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        const updateddata = data.map(each=>({
            id:each.id,
            author:each.author,
            avatarUrl:each.avatar_url,
            imageUrl:each.image_url,
            title:each.title,
            topic:each.topic,
            
        }))
        this.setState({blogsData:updateddata,isLoading:false})
        
        console.log(updateddata)
    }


  render() {
    const {blogsData,isLoading}=this.state
    return (
      <div className="blog-list-container">
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
        ) : (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )

        
    }
      
  
}

export default BlogsList
