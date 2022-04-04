export default function Box(props){
    return(
        <div className="box col-sm-3 col-6">
            <div style={{fontSize:100, color:props.color,textAlign:"center"}} class="material-icons">
                {props.icon}
            </div>
            <div>
            <p>{props.value} {props.unit}</p>
            </div>
            {
                props.icon !== "local_drink"
                ?
                <input type="range" min={props.min} max={props.max} value={props.value} onInput={(e)=>{
                    props.changeVal(e.target.value)
                    props.change()
                }}/>
                :
                null
            }
        </div>

    )
}