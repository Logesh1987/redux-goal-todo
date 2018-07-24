import React from 'react';
import {connect} from 'react-redux'
import {fetchInitialData} from '../actions/shared'
import ConnectedTodos from './Todo'
import ConnectedGoals from './Goal'

class App extends React.Component {
  componentDidMount() {
    const {dispatch } = this.props;    
    dispatch(fetchInitialData())
  }
  
  render () {
    const {loading} = this.props;
    if(loading) {
      return <h3>Loading</h3>
    }
    return (
      <div>
        <h1>React App</h1>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}


export default connect((state) => ({
  loading: state.loading
}))(App)