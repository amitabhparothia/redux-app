import { connect } from "react-redux"
import { Home } from "../Components/Home"
import { addtocart } from "../Services/Actions/action"

const mapStateToProps = state => ({
    data: state.carditem

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addtocart(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)