import Receipt from "./Receipt";

function Receipts(props){
        const {Records} = props

    return(
        <div>
            <Receipt Records = {Records}/>
        </div>
    )
}

export default Receipts;