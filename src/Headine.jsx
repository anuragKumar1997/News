import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Headine() {
    const [News, setNews] = useState([]);
    let fetchheadlines = async()=>{
let res= await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=2cddcc27f9e749d992e2730007b04131")
let Data=await res.json()
console.log(Data.articles)
setNews(Data.articles)
// setNews(Data.articales)
    }
    
  useEffect(() => {
    fetchheadlines();
  }, []);
  console.log(News);
  
  return (

    <div>

    {News.map((obj)=>{
      return  (         <Link  to={obj.url}

              className="card mt-3 "
              style={{
                width: "18rem",
                borderRadius: "40px",
                borderColor: "plum",
                borderWidth:"5px",
                textDecoration:"none"
              }}
            >
              <img
                style={{ borderRadius: "40%", height:"200px"}}
                src={obj.urlToImage}
                className="card-img-top"
                alt="jhjhb"
              />
              <div  className="card-body text-truncate">
               <marquee behavior="" direction="right"> <h5 className="card-title text-danger"> TITLE-{obj.title}</h5></marquee>
                <h5 className="card-title text-warning">Author-{obj.author}</h5>
                <Link
                  style={{ marginLeft: "50px",borderRadius:"40px",backgroundColor:"lightgreen" }}
                  to="/"
                  class="btn "
                >
                  see full news
                </Link>
              </div>
            </Link>
      )
          })}
    </div>
  )
}

export default Headine
