import "./Button.css"
import ButtonItem from "../ButtonItem/ButtonItem"
function ButtonWrapper(){
const ArrayOfobject=[
    {ButtonName:"GitHub"},
    {ButtonName:"Frontend Montor"},
    {ButtonName:"LinkedIn"},
    {ButtonName:"Twitter"},
    {ButtonName:"Instagram"},
]
return(
    <div id="ButtonWrapper">
        {ArrayOfobject.map((item) =>{
            return(
                <ButtonItem
                    ButtonName={item.ButtonName}>
                </ButtonItem>
            )
        })}

    </div>
)
}
export default ButtonWrapper




     
    /*return(
        <div id="ButtonWrapper" >
            
<ButtonItem ButtonName="GitHub" ></ButtonItem>

<ButtonItem ButtonName="Frontend Montor" ></ButtonItem>

<ButtonItem ButtonName="LinkedIn" ></ButtonItem>

<ButtonItem ButtonName="Twitter" ></ButtonItem>

<ButtonItem ButtonName="Instagram" ></ButtonItem>

        </div>


    )*/




