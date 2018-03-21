import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFiveCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                
                <ul>
                    {this.props.result.map((res) => { 
                            return <li onClick={() => this.props.onDeleteResult(res.id)}key={res.id}>{res.value}</li>  
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        result : state.res.result
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch(actionCreators.increment()),
        onDecrementCounter : () => dispatch(actionCreators.decrement()),
        onAddFiveCounter : () => dispatch(actionCreators.add({addionalvalue : 5})),
        onSubFiveCounter : () => dispatch(actionCreators.subtract({subtractvalue : 5})),
        onStoreResult : (result) => dispatch(actionCreators.storeres({result : result})),
        onDeleteResult : (id) => dispatch(actionCreators.delresult({id : id}))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);