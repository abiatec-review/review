

//https://codesandbox.io/s/new

// import {useState,useEffect} from 'react'
//
// export default function App() {
//     const [status,setStatus] = useState(false)
//     const [timer,setTimer] = useState(0)
//
//     useEffect(() => {
//         let id
//         if(status) {
//             id = setTimeout(() => {
//                 setTimer(prev => prev + 1)
//             }, 1000);
//         }
//
//         return () => {
//             clearTimeout(id)
//
//         }
//     },[status,timer])
//
//     return (
//         <div>
//             <div>
//                 {timer}
//             </div>
//
//             <button onClick={() => {
//                 setStatus(!status)
//             }}>
//                 {status ? 'start' : 'stop'}
//             </button>
//         </div>
//     );
// }

// const [sec, setSec] = React.useState(0)
// const [status, setStatus] = React.useState(false)
// React.useEffect(() => {
//     let timerID
//     if (status) {
//         timerID = setTimeout(() => {
//             if (sec === 59) {
//                 setSec(prev => prev + 1)
//
//             } else {
//                 setSec(prev => prev+1)
//             }
//         }, 1000)
//     }
//     return () => clearTimeout(timerID)
// }, [sec, status])
// const toggle = () => setStatus(!status)
// return (
//     <>
//         <div>
//             <span>{sec < 10 ? '0' + sec : sec}</span>
//         </div>
//         <div>
//             <button onClick={toggle}>Run</button>
//             <button onClick={toggle}>Stop</button>
//         </div>
//     </>
// )

