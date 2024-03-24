import { connect } from "react-redux"
import { Home } from "../Components/Home"
import { addtocart, removecart } from "../Services/Actions/action"

const mapStateToProps = state => ({
    data: state.carditem

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addtocart(data)),
    removeHandler:data=>dispatch(removecart(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)