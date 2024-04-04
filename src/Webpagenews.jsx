import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Headine from "./Headine";

const Webpagenews = (props) => {
  console.log(props.ans)
  const [content, setContent] = useState([]);
  const [search, setsearch] = useState("wildlife");

  let fetchdata = async () => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${props.ans?props.ans:search}&apiKey=2cddcc27f9e749d992e2730007b04131`);
    let data = await res.json();
    // console.log(data.articles)
    setContent(data.articles);
  };

  useEffect(() => {
    fetchdata();
  }, [search,props.ans]);
  console.log(content);

let searchref=useRef()
const handleSubmit=(ele)=>{
  ele.preventDefault()

let searchnews=searchref.current.value
 setsearch(searchnews)
 console.log(searchnews)

}
  return (
   <div className="container-fluid">
   <form className="d-flex  w-50 m-auto mt-4" role="search">
  <input ref={searchref} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handleSubmit} className="btn btn-outline-success" type="submit">Search</button>
</form>
    <div className="container-fluid d-flex justify-content-center ">
      <div className="row row-cols-3 gap-3 col-md-9 d-flex justify-content-center">
        {content.map((obj) => {
          return (
            <div
              className="card mt-3 "
              style={{
                width: "18rem",
                borderRadius: "40px",
                borderColor: "plum",
                borderWidth:"5px"
              }}
            >
              <img
                style={{ borderRadius: "40px", height:"200px"}}
                src={obj.urlToImage}
                className="card-img-top"
                alt="jhjhb"
              />
              <div className="card-body text-truncate">
                <h5 className="card-title text-danger"> TITLE-{obj.title}</h5>
                <h5 className="card-title text-warning">Author-{obj.author}</h5>
                <Link
                  style={{marginLeft:"50px",borderRadius:"40px",backgroundColor:"lightgreen" }}
                  to={obj.url}
                  class="btn "
                >
                  see full news
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
    <div style={{width:"300px"}} className="text-center main bg-success col-md-3 mt-3">  
    <h3 className='bg-warning topheadline' style={{color:"#007"}}>TopHeadline</h3>
    <div className="main2 w-100">

    <Headine/>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Webpagenews;
