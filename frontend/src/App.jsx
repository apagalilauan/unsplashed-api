import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import axios from 'axios';
import SearchInput from './components/SearchInput';

const key = import.meta.env.VITE_UNSPLASH_API_KEY;
const random_photo_url = `https://api.unsplash.com/photos/?per_page=30&client_id=${key}`;

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchTerm ? `https://api.unsplash.com/search/photos?per_page=12&query=${searchTerm}&client_id=${key}` 
        : random_photo_url;
        const result = await axios.get(url);
        setData(result.data.results || result.data);
      } catch (error) {
        console.error(error);
      }
    };

    const timerId = setTimeout(() => {
      fetchData();
      console.log(data)
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="">
      <Navbar>
        <SearchInput searchTerm={searchTerm} handleInputChange={handleInputChange}/>
      </Navbar>
  
      <section className='justify-center py-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 mx-10 sm:mx-20 md:mx-30 lg:mx-40'>
        {data.map((item) => (
          <div className='' key={item.id}>
            <Card  
              key={item._id}
              pimg={item?.user?.profile_image?.large} 
              urls={item?.urls.regular} 
              likes={item?.likes}
              name={item.user.name} 
              username={item.user.username}
              userlink={item.links.self}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
