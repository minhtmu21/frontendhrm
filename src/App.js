// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import PreViewAvatar from './components/preViewAvatar';
import PostItem from './PostItem';
import Login from './components/login';

function App() {
  const [showPostItem, setShowPostItem] = useState(false)
  function show(){
    setShowPostItem(!showPostItem)
  }

  function backToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const [showBtnBackToTop, setShowBtnBackToTop] = useState(false) 

  useEffect(() => {
    const checkBtnBackToTop = () =>{
      if (window.pageYOffset > 300){
        setShowBtnBackToTop(true)
      } else {
        setShowBtnBackToTop(false)
      }
    }

    window.addEventListener('scroll', checkBtnBackToTop)
    return () =>{}
  },[])

  return (
    <div className="container">
      <Login></Login>
      <div className="row">
        <div className='col'>
          <button type="button" onClick={show} className={showPostItem ? 'btn btn-toggle active mt-3' : 'btn btn-toggle mt-3'}>
            <i className="fa-solid fa-angles-right d-flex align-items-center justify-content-center"></i>
          </button>
          <div className="col">
            <PreViewAvatar></PreViewAvatar>         
          </div>
          {showBtnBackToTop && <button type="button" onClick={backToTop} className="btn btn-default btn-back-to-top">
            <i className="fa-solid fa-circle-up"></i>
          </button>}
          {showPostItem && <PostItem />}
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
