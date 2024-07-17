import "./homepage.scss";
import SearchBar from "../../components/searchbar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place Today
          </h1>
          <p>
            dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non
            odio euismod lacinia at quis risus sed vulputate odio
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties listed</h2>
            </div> 
         </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
