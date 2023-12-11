import React,{useContext,useRef} from "react";
import { Navbar, NavbarCollapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Toast } from "react-bootstrap";
import { BlogContext } from "../App";

const Createblog = () =>{
  const {post,setPost} = useContext(BlogContext)
  const Title = useRef({})
  const Content = useRef({})
  const handlechange = () =>{
    if(Title.current.value === ""&& Content.current.value===""){
      Toast.error("please input the task");
      return;
    }

    const Newtitle = Title.current.value;
    const Newcontent = Content.current.value;
    const value = {title:Newtitle,content:Newcontent, id:Date.now()};
    setPost([...post,value]);

  };


  return(
    <div>
      <Navbar className="shadow p-3 mb-5bg-white rounded" style={{height:"5.5rem"}}>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="m-5">
            {/* <h6>write your thoughts here</h6> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <>
       <div className="shadow p-3 mb-0 bg-white rounded" style={{margin:"auto" , width:"50rem",background:"black",textAlign:"center", height:"80vh"}}>
        <h1 className="mt-3 ">create blog</h1>
        <input type="text" placeholder="Add Title.." className="mt-3 rounded" style={{width:"35rem" ,height:"3rem" ,textAlign:"center"}} ref={Title}/>
          <textarea className="mt-5 rounded " name="" id="" cols="80"  rows="12" placeholder="write.body..." ref={Content}></textarea>
          <br />
          <Link to={"/blogs"}>
            <button type="submit" className="btn btn-primary mt-2 h-10 w-25" onClick={handlechange}>SAVE </button>
            </Link>

       </div>
      </>
    </div>
  )


}
export default Createblog;