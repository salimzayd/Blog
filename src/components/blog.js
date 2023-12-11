import React,{useContext} from 'react';
import {Navbar} from 'react-bootstrap'
import { BlogContext } from '../App';
import {useParams} from 'react-router-dom'


const Blog = () => {


  const {post} = useContext(BlogContext)
  const {id} = useParams()
  const idGet = post.find((item) => item.id == parseInt(id));
  console.log(idGet)
  return (
    <div>
      <Navbar className="shadow p-3 mb-5 bg-white rounded" style={{height:"5.5rem"}}></Navbar>

      <div className="container shadow p-3 mb-5 bg-white rounded" style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>{idGet.title}</h1>
        <div className="w-5 h-5 container shadow p-3 mb-5 bg-white rounded m-3" style={{textAlign:"left",overflow:"auto"}}>
          <cite className="container">{idGet.content}</cite>
        </div>

      </div>
    </div>
  )
}

export default Blog;