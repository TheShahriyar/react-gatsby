import React, { useState } from "react"
import Portfolio1 from "../images/portfolio/1.jpg"
import Portfolio2 from "../images/portfolio/2.jpg"
import Portfolio3 from "../images/portfolio/3.jpg"
import Portfolio4 from "../images/portfolio/4.jpg"
import Portfolio5 from "../images/portfolio/5.jpg"
import Portfolio6 from "../images/portfolio/6.jpg"
import Portfolio7 from "../images/portfolio/7.jpg"
import Portfolio8 from "../images/portfolio/8.jpg"
import Portfolio9 from "../images/portfolio/9.jpg"

const list = [
  {
    category: "cat1",
    id: "1",
    imgSource: Portfolio1,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat1",
    id: "2",
    imgSource: Portfolio2,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat2",
    id: "3",
    imgSource: Portfolio3,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat1",
    id: "4",
    imgSource: Portfolio7,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat2",
    id: "5",
    imgSource: Portfolio5,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat3",
    id: "6",
    imgSource: Portfolio6,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat3",
    id: "7",
    imgSource: Portfolio4,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat3",
    id: "8",
    imgSource: Portfolio8,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
  {
    category: "cat1",
    id: "9",
    imgSource: Portfolio9,
    title: "Portfolio Title",
    tag: "Business || Finance",
    link: "#",
  },
]

const Element = ({ imgSource, title, tag, link }) => (
  <div className="col-md-4 col-sm-6 html">
    <div className="portfolio-post mb30">
      <img src={imgSource} alt="theshahriyar" />
      <div className="hover-box">
        <div className="inner-hover">
          <div className="middle">
            <div className="portfolio-post-btn">
              <a href={link} className="link">
                View
              </a>
            </div>
            <h4>
              <a href={link}>{title}</a>
            </h4>
            <p>{tag}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Portfolio = () => {
  const [display, setDisplay] = useState(list)

  const handleDisplay = category => {
    const categoryToDisplay = list.filter(item => item.category === category)
    setDisplay(categoryToDisplay)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <ul className="filter">
            <li>
              <button onClick={() => setDisplay(list)}>Show All</button>
            </li>
            <li>
              <button onClick={() => handleDisplay("cat1")}>HTML</button>
            </li>
            <li>
              <button onClick={() => handleDisplay("cat2")}>WordPress</button>
            </li>
            <li>
              <button onClick={() => handleDisplay("cat3")}>Joomla</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row portfolio-box">
        {display.map(element => (
          <Element key={element.id} {...element} />
        ))}
      </div>
    </>
  )
}

export default Portfolio
