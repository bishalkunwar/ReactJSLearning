// // function App() {
// //   return (
// //     <p>Hello world</p>
  
// //     );
// // }

// // export default App;
// import Profile from "./Components/Try1";

// const profile1 = {
//   name: "Bishal Kunwar",
//   theme: {
//     backgroundColor: "black",
//     color: "red",
//   }
// }

// export default function TryNow(){
//   return(
//     <section>
//       <div style={profile1.theme}>
//         <h1>{profile1.name}'s data</h1>
//         <img src="https://www.facebook.com/photo/?fbid=1288301378464399&set=a.103785856915963" alt="photoframe"/>
        
//         <ul>
//           <li>Bishal is hero</li>
//           <li>Bishal is boss</li>
//           <li>Bishal rocks</li>
//         </ul>
//       </div>

//       <div>
//         <h1>Amazing hero list</h1>
//           <Profile/>
//           <Profile/>
//         </div>

//     </section>
//   );
// };


// // -----------------------------------------------
// // JS in JSX with the Curly Braces

// const person = {
//   name: "Bishal",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   }
// };


// export default function myApp(){
//   return(
//     <section>
//       <div style={person.theme} >
//         <h1>{person.name}</h1>
//         <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Bishal"/>

//           <ul>
//             <li>Study</li>
//             <li>Expirement</li>
//             <li>Explore</li>
//           </ul>
//       </div>
//     </section>
//   );
// }


// --------------------------------------------------
// From here everything starts

// Creating the 1st component:


// Importing and Exporting the Component;
// Components Rendering in React JS

import Profile from "./Components/componentRendering/Profile";
import Gallery from "./Components/componentRendering/Gallery";
export default function App(){
    return(
      <div>
        <Profile/>
        <Gallery/>
      </div>
    );
}