// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:3000");
//         const data = await res.json();
//         console.log(data); // Console log will still be visible in DevTools
//         setData(data.items); // Saving items array into state
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this runs once when the component mounts

//   return (
//     <>
//       <div className="App">
//         <h1>Fetched Data</h1>
//         {/* Render the fetched data as a list */}
//         <ul>
//           {data ? (
//             data.map((item) => (
//               <li key={item._id}>
//                 <h2>{item.name}</h2>
//                 <p>{item.description}</p>
//               </li>
//             ))
//           ) : (
//             <p>Loading...</p> // Show loading text until data is fetched
//           )}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
