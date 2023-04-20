import './App.css';
import Videotile from './Components/Videotile';

function App() {

  function handleSearch(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('search').value;
    window.open('https://www.youtube.com/results?search_query=' + searchTerm, '_self');
  }

  return (
    <>
      <div className="header" id="header">
        <div className="start" id="start">
          <span className="material-symbols-outlined">menu</span>
          <a href="/"><img src="yt-logo.png" alt="Logo" className="logo" /></a>
        </div>
        <div className="center" id="center">
          <form onSubmit={handleSearch}>
            <input type="text" className='search' id='search' />
            <button className='formSubmitButton' type='submit'><span className="material-symbols-outlined searchButton" >search</span></button>
          </form>
          <span className="material-symbols-outlined" >mic</span>
        </div>
        <div className="end" id="end">
          <span className="material-symbols-outlined">video_call</span>
          <span className="material-symbols-outlined">notification_add</span>
          <img src="profileIcon.png" alt="Profile icon" className='profileIcon' />
        </div>
      </div>
      <div className="aside" id="aside">
        <div className='sidebar'>
          <div>
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </div>
          <div>
            <span className="material-symbols-outlined">subscriptions</span>
            <span>Subscriptions</span>
          </div>
          <hr />
          <div>
            <span className="material-symbols-outlined">video_library</span>
            <span>Library</span>
          </div>
          <div>
            <span className="material-symbols-outlined">history</span>
            <span>History</span>
          </div>
          <div>
            <span className="material-symbols-outlined">slideshow</span>
            <span>Your Videos</span>
          </div>
          <div>
            <span className="material-symbols-outlined">update</span>
            <span>Watch Later</span>
          </div>
          <hr />
        </div>
      </div>
      <div className="main" id="main">
        <div className="topLinks">
          <span>All</span>
          <span>Remix</span>
          <span>Gaming</span>
          <span>Live</span>
          <span>Camera</span>
          <span>All</span>
          <span>Remix</span>
          <span>Gaming</span>
          <span>Live</span>
          <span>Camera</span>
          <span>All</span>
          <span>Remix</span>
          <span>Gaming</span>
          <span>Live</span>
          <span>Camera</span>
          <span>All</span>
          <span>Remix</span>
          <span>Gaming</span>
          <span>Live</span>
          <span>Camera</span>
        </div>
        <div className="videoTileContainer">
          <Videotile videoID='es4x5R-rV9s' />
          <Videotile videoID='JkaxUblCGz0' />
          <Videotile videoID='U9ux-VYKRDg' />
          <Videotile videoID='eoTpdTU8nTA' />
          <Videotile videoID='eNUpTV9BGac' />
          <Videotile videoID='cTQ3Ko9ZKg8' />
          <Videotile videoID='KJwYBJMSbPI' />
          <Videotile videoID='xEkUrqU3yCs' />
          <Videotile videoID='cTQ3Ko9ZKg8' />
          <Videotile videoID='es4x5R-rV9s' />
          <Videotile videoID='cTQ3Ko9ZKg8' />
          <Videotile videoID='es4x5R-rV9s' />
          <Videotile videoID='es4x5R-rV9s' />
          <Videotile videoID='es4x5R-rV9s' />
          <Videotile videoID='JkaxUblCGz0' />
          <Videotile videoID='U9ux-VYKRDg' />
          <Videotile videoID='eoTpdTU8nTA' />
          <Videotile videoID='eNUpTV9BGac' />
          <Videotile videoID='cTQ3Ko9ZKg8' />
          <Videotile videoID='KJwYBJMSbPI' />
          <Videotile videoID='xEkUrqU3yCs' />
          <Videotile videoID='cTQ3Ko9ZKg8' />
          <Videotile videoID='es4x5R-rV9s' />
          <Videotile videoID='cTQ3Ko9ZKg8' />
        </div>
      </div>
    </>
  );
}

export default App;
