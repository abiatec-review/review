// import React, { useEffect, useReducer } from "react";
// import "./styles.css";
//
// const initState = {
//     tick: 0,
//     timerStatus: false
// };
//
// const timerReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "START_TIMER": {
//             return {
//                 ...state,
//                 timerStatus: true,
//                 tick: state.tick + 1
//             };
//         }
//         case "STOP_TIMER": {
//             return {
//                 ...state,
//                 timerStatus: false,
//                 tick: 0
//             };
//         }
//         default:
//             return initState;
//     }
// };
//
// export default function App() {
//     const [state, dispatch] = useReducer(timerReducer, initState);
//     console.log(state);
//
//     const timerHandler = () => {
//         if (state.timerStatus) {
//             dispatch({ type: "STOP_TIMER" });
//         } else {
//             dispatch({ type: "START_TIMER" });
//         }
//     };
//
//     useEffect(() => {
//         let a;
//         if (state.timerStatus) {
//             a = setTimeout(() => {
//                 dispatch({ type: "START_TIMER" });
//             }, 1000);
//         }
//         return () => {
//             clearTimeout(a);
//         };
//     }, [state.tick, state.timerStatus]);
//
//     return (
//         <div className="App">
//             <h1>Timer</h1>
//             <p>{state.tick}</p>
//             <button onClick={timerHandler}>
//                 {state.timerStatus ? "start" : "stop"}
//             </button>
//         </div>
//     );
