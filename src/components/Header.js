import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import youtubeLogo from '../assets/youtube-logo.png';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from "../utils/config.js";
import { cacheResults } from '../utils/SearchSlice'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  //console.log(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);
  const searchCache = useSelector((store) => store.search)

  // searchCache = {
  //   "iphone": ["iphone 11", "iphone 12"]
  // }
  //let searchQuery = iphone

  useEffect(() => {
    //console.log(searchQuery);
    //make an api call after every key press
    //but if the difference between 2 api calls is < 200ms decline the api call
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)

    return () => {
      clearTimeout(timer)
    }

  }, [searchQuery]);



  const getSearchSuggestions = async () => {
    console.log("API CALL " + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1])
     setSuggestions(json[1])

     //update cache
     dispatch(cacheResults({
      [searchQuery]: json[1],
     }));
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid grid-flow-col px-5 py-2.5 shadow h-14">
      <div className="flex">
        <AiOutlineMenu className='h-8 cursor-pointer' onClick={toggleMenuHandler} />
        <a href="/"> <img src={youtubeLogo} alt="youtube-logo" className='h-8 mx-2' /></a>
      </div>

      <div className='col-span-10 px-10'>
        <div>
          <input type="text" className='w-1/2 h-[36px] border border-gray-200 py-2 px-5 rounded-l-full' placeholder='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)} />
          <button className="border border-gray-200 px-5 h-[36px] rounded-r-full">
            <AiOutlineSearch className='' />
          </button>
        </div>
        {showSuggestions && <div className="fixed bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg border border-gray-200">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='px-2 py-2 shadow-sm hover:bg-gray-200'>{s}</li>
            ))}
          </ul>
        </div>}
      </div>

      <div className='col-span-1 py-2'>
        <FaUserCircle />
      </div>

    </div>
  )
}

export default Header;