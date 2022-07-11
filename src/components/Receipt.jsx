import Receipts from "./Receipts";
import Records from "../Records";

function Receipt(props){
    const {Records} = props

    return (
        <div>
            { Records.map((record, index)=> {
                return <record recordData={record} key={index} />
            })  }
        </div>
    )
}

export default Receipt;