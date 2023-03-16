import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux/cake/www'

function Icecream (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numberoficecream} </h2>
      <button onClick={props.buyIcecream}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberoficecream: state.icecream.numberoficecream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => dispatch(buyIcecream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Icecream)