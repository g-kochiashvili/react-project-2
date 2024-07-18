import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.npoint.io/44c1c313d40c0811ad19')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLearnMore = (item) => {
    setPopupData(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <h1 className='title'> Our post</h1>
      <div className="parent_div">
        <div className="line_div"> </div>
      </div>
      
      <p className='main_description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum assumenda voluptatibus amet ut? Illo placeat doloremque ipsam blanditiis possimus earum doloribus odio recusandae, dolorem eligendi reiciendis, iusto perspiciatis, laudantium sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi aliquam. Nesciunt in, nobis sapiente voluptate facere quod fugit amet natus voluptatibus vitae deleniti rem nam quam sint eius veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam ratione vel rem. Eaque sequi accusamus veniam! Totam nemo commodi libero perspiciatis debitis voluptas vitae, praesentium natus quibusdam! Nesciunt, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, maiores. Tempora esse quidem quaerat ratione, dignissimos velit? Debitis aliquid, optio vero, numquam tempora minima eos nesciunt cumque magnam aperiam ab!</p>
      <div className="card-container">
        {data.slice(0, 3).map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h1 className='title1'>{item.title}</h1>
            <p className='description'>{item.description.slice(0,20)+ "..."}</p>
            <button className='learn_more' onClick={() => handleLearnMore(item)}>Learn More</button>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <img src={popupData.image} alt={popupData.title} />
            <h1>{popupData.title}</h1>
            <p>{popupData.description}</p>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default App;








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   axios.get('https://api.npoint.io/44c1c313d40c0811ad19'){

//   }


//   return (
//     <>
//       <div className='mainDiv'>
//         <p>Our posts</p>
//         <div className="firstPost">
//           <img src='' alt="" />
//           <h1 className='title1'></h1>
//           <p className='description'></p>
//           <button className='learn_more'></button>
//         </div>
//         <div className="secondPost"></div>
//         <div className="thirdPost"></div>
//       </div>
//     </>
//   )
// }

// export default App
