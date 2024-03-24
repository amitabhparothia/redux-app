import { connect } from "react-redux";
import { navbar } from "../Components/NavBar";


const mapStateToProp = state => ({
    data:state.carditem
})

// const mapdispatchToProp = dispatch => ({

// })

export default connect(mapStateToProp )(navbar)

