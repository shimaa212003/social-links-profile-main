import "./Tittle.css"
import  avatar from "../../assets/imags/avatar-jessica.jpeg"
function Tittle(){
return(

    <div id="title">
        <img id="imge"  src={avatar} alt="not found" />
        <h1 id="Jes">Jessica Randall</h1>
       <h1 id="Jess"> London, United Kingdom</h1>
        <p id="front">&quot;Front-end developer and avid reader.</p>
    </div>
)


}
export default Tittle