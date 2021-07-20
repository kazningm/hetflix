import React from "react";
import popcorn from "./../../popcorn.png";
import style from "./Error.module.css";

// class Error extends React.Component {
//     constructor(props) {
//         super(props);        
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//       }
    
//       componentDidCatch(error, errorInfo) {
//       }

//     render() {
//         if (this.state.hasError) {
//             return (
//                 <div className={ style.errorDiv }>
//                     <img src={ popcorn } alt="" className={ style.popcornImg } />
//                     <div className={ style.errorMessage } >
//                         SOMETHING WENT WRONG...
//                     </div>
//                 </div>
//             )
//         }
//         return this.props.children;
//     }
// }
const Error = () => {
    return (
        <div className={ style.errorDiv }>
            <img src={ popcorn } alt="" className={ style.popcornImg } />
            <div className={ style.errorMessage } >
                SOMETHING WENT WRONG...
            </div>
        </div>
    )
}

export default Error;