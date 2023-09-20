// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import { getImageUrl } from './utils';

// // // conditional rendering function prototype:

// // if (isPacked) {
// //   return null;
// // }
// // return <li className="item">{name}</li>; -- this gives 0 and 1 condition.

// // };

// // const ConditionRender = ({name, isPacked})=>{
// //   if(isPacked){
// //     return(
// //       <li className="item">{name}✔</li>
// //     )
// //   }return(
// //     <li className="item">{name}</li>
// //   ); // However this logic can be more simplified with the use of ternary operator as below:-

//   const ConditionRender = ({name, isPacked}) => {
//     return(
//     <li className="item">
//       {isPacked ? (name + '✔') : (name)}
//     </li>
//   )};



// function App() {
//   return (
//     <div className='navbar'>
//       <Navbar/>
//       <div className='content'>
//         <Home/>
//       </div>
//       <div className="scientists" style={{textAlign:"center"}}>
//           <h1>Notable Faces</h1>
//           <section className="profiles" style={{border:"1px solid black", borderRadious:0.5, textAlign: "center"}}>
//             <h2>Bishal</h2>
//             <img className="avatar" src={getImageUrl('szV5sdG')} alt="Bishal Img" width={70} height={70}/>
            
//             <ul>
//               <li><b>Profession:</b> Science and Computing</li>
//               <li><b>Awards: 4 </b> (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)</li>
//               <li><b>Discovered: </b>polonium (element)</li>
//             </ul>
//           </section>

//           <section className="profiles" style={{border:"1px solid black", borderRadious:0.5, textAlign: "center"}}>
//             <h2>Bishal</h2>
//             <img className="avatar" src={getImageUrl('YfeOqp2')} alt="Bishal Img" width={70} height={70}/>
            
//               <ul>
//               <li><b>Profession:</b> Science and Computing</li>
//                 <li><b>Awards: 4 </b> (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)</li>
//                 <li><b>Discovered: </b>polonium (element)</li>
//               </ul>

//           </section>
//       </div>

//       <div className="todos" style={{textAlign:"center"}}>
//         <h1>"What Bishal is Doing"</h1>
//         <ul>
//           <ConditionRender 
//             isPacked={true} name="Learning"
//           /> 
//           <ConditionRender 
//             isPacked={true} name="Doing"
//           />  
//           <ConditionRender 
//             isPacked={false} name="Having fun"
//           /> 
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;


// // Conditional Rendering in JS.
// const drink = "coffee";
// const CheckDrinks = ({dName})=> {
//   return(
//     <section>
//       <h1>Drink 1 VS Drink2</h1>
//       <hr/>
//       <h3>{dName}</h3>
//       <dl>
//         <dt>Part of Plant</dt>
//         <dd>{dName  === 'tea' ? 'leaf' : 'beans'}</dd>
//       </dl>
        
//       <dl>
//         <dl>Caffine level</dl>
//         <dt>{dName === 'tea' ? 'Low' : 'High'}</dt>
//       </dl>
        
//       <dl>
//         <dt>Amount per cups</dt>
//         <dd>{dName === 'tea' ? '100gm' : '200gm'}</dd>
//       </dl>
//     </section>
//   );
// };
  
// export default function App(){
//   return(
//     <div>
//       <CheckDrinks dName={drink}/>
//       <CheckDrinks dName= "tea"/>
//     </div>
//   );
// };


// // List Rendering.
// const people = [
//   'Bishal: Computer',
//   'Shreejan: Java',
//   'Nishant: AI Scientist',
//   'Alishan: Gamer',
//   'Rupak: Studies',
// ];



// export default function Lists(){
//   const listItems = people.map(persons=> 
//     <li>{persons}</li>
//     );
//     return <ul>{listItems}</ul>
// };


// //List Rendering with map() and Filter() Functions.

// import EventHandler from "./Components/EventHandle";
// import { Students } from "./Components/data";
// import { GetImageUrl } from "./utils";
// export default function App(){
  
//   // // filter function.
//   // const student = Students.filter(stud=>
//   // stud.sProfession === 'Student'
//   // );

//   // map function

// // const listStudents = Students.map(stud=> 
// //   <tr key={stud.sId}>
// //     <td>{stud.sId}</td>
// //     <td>{<img src={GetImageUrl(stud)} alt={stud.sName}/>}</td>
// //     <td>{stud.sName}</td>
// //     <td>{stud.sProfession}</td>
// //   </tr>
// //   );
// // //[sid,sName]
// //   const listKeys = Object.keys(Students[0]).map(item=><th key={item}>{item}</th>)

// //     // <li key={stud.sId}>
// //     //   <img src={GetImageUrl(stud)} alt={stud.sName}/>
// //     //   <p>
// //     //     <b>{stud.sName}: </b>
// //     //     {' ' + stud.sProfession + " "}
// //     //     known for {stud.sId}
// //     //   </p>
// //     // </li>
      
  

// //   return (<>
// //     <table>
// //     <thead>
// //       <tr>
// //         {listKeys}
// //       </tr>
// //       </thead>

// //       <tbody>
// //         {listStudents}
// //       </tbody>

// //     </table>
// //   </>) 
// return(
//   <div>
//     <h1>Students</h1>

//     {Students.map(stud=>
//       <div key={stud.sId}>
//         <img src={GetImageUrl(stud)} alt={stud.sName}/>
//         <h2>{stud.sName}</h2>
//         <h2>{stud.sProfession}</h2>
//         <ul>
//           {stud.sNobels.map(nobels=>
//             <li key={nobels}>{nobels}</li>
//           )}
//         </ul>
//       </div>
//     )}
//     <EventHandler/>
//   </div>
// ); 
// };


// // Keys: Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.
//         // File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

import Gallery from "./Components/HooksForComponentsState";
import Form from "./Components/formWithHooks";
import FormMSG from "./Components/formSubmissionMSG";
import StateSnap from "./Components/StateSnapshot";
import Batching from "./Components/StateBatching";
import ObjectState from "./Components/UpdatingObjectsState";
// import Main from "./Components/fixingMutation/Main";
import Todo from "./Components/updatingArrayInState/Todo";

export default function App(){
  return(
    <div>
      <Gallery/>
      <Form/>
      <FormMSG/>
      <hr/><br/><br/>
      <StateSnap/>
      <hr/><br/><br/>
      <Batching/>
      <hr/><br/><br/>
      <ObjectState/>
      <hr/><br/><br/>
      {/* <Main/>
      <hr/><br/><br/> */}
      <Todo/>
      <hr/><br/><br/>
    </div>
  )
};