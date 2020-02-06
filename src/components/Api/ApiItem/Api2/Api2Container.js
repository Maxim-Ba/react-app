import { connect } from "react-redux";
import { Api2 } from "./Api2";
import { getWetherThunk, getWetherCityThunk } from "../../../../redux/wetherApiReducer";
import { getWetherSelector, getWetherInCitySelector } from "../../../../selectors/selectorWetherApi";
const mapStateToProps = (state) => {
  return {
    wether: getWetherSelector(state),
    wetherInCity: getWetherInCitySelector(state),
    isFetchingWether: state.wether.wether.isFetching,
    isFetchingCity: state.wether.wetherInCity.isFetching,
    queryInProgressCity: state.wether.wetherInCity.queryInProgress,
    errCity: state.wether.wetherInCity.err,
    err: state.wether.wether.err
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getWetherThunk: () => {
      dispatch(getWetherThunk())
    },
    getWetherCityThunk: (value) => {
      dispatch(getWetherCityThunk(value))
    }
  }
};

const Api2Container = connect(mapStateToProps, mapDispatchToProps)(Api2)
export { Api2Container }