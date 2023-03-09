// import logo from './logo.svg';
import './App.css';

import Card from "./Components/Card";
// import { useState } from "react";

// const arr = [
//   {
//     name : "Amit",
// 	  image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
// 	  designation : "Graphic Designer",
// 	  description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
//   },
//   {
//     name : "Ruhi",
//     image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.",
//     designation : "Singer"
//   }
// ]

const User1 = {
	name : "Amit",
	image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
	designation : "Graphic Designer",
	description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
}

const User2 = {
	name : "Ruhi",
	image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.",
	designation : "Singer"
}


function App() {
  // const [arr, setArr] = useState([
  //   {
  //     name : "Amit",
  //     image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
  //     designation : "Graphic Designer",
  //     description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
  //   },
  //   {
  //     name : "Ruhi",
  //     image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.",
  //     designation : "Singer"
  //   }
  // ])
  
  return (
    <>

      <div>
        <Card 
          name = {User1.name}
          image = {User1.image}
          designation = {User1.designation}
          description = {User1.description}
          />
      </div>

        <br></br><br></br>

      <div>
        <Card 
            name = {User2.name}
            image = {User2.image}
            designation = {User2.designation}
            description = {User2.description}
          />
      </div>

    </>
  );
}

export default App;
