import Receipt from "./Receipt";

function Receipts(props){
        const {Records} = props

    return(
        <div className="Container">
           { Records.map((record, index)=> {
             return <Receipt recordData={record} key={index} />
            })  }
        </div>
    )
}

export default Receipts;