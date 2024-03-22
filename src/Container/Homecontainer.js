import { connect } from "react-redux"
import { Home } from "../Components/Home"
import { addtocart } from "../Services/Actions/action"

const mapStateToProps = state => ({
    cardData:state

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addtocart(data))

})

export default connect(mapStateToProps , mapDispatchToProps)(Home)