
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Createblog from './components/createblog'
import Blog from './components/blog'
import Blogs from './components/blogs'
import { createContext,useState } from 'react';
import { Route,Routes } from 'react-router-dom';


import Usereducer from './components/usereducerapp';

import Typevalue from './components/input';


export const BlogContext = createContext(); 
function App() {

  const [post,setPost] = useState([])
  return(
    <div>
      
        {/* <BlogContext.Provider value={{post,setPost}}>
            <Routes>
                <Route path="/" element={<Createblog />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="blog" element={<Blog />} />
            </Routes>

        </BlogContext.Provider> */}

        <Usereducer />
        <Typevalue />


    </div>

  ); 
}

export default App;
