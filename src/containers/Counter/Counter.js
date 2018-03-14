import React, { Component } from 'react';
import { connect } from 'react-redux'; 

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
                
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
        ctr : state.counter,
        result : state.result
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type : 'INCREMENT'}),
        onDecrementCounter : () => dispatch({type : 'DECREMENT'}),
        onAddFiveCounter : () => dispatch({type : 'ADD_FIVE',payload : {addionalvalue : 5}}),
        onSubFiveCounter : () => dispatch({type : 'SUB_FIVE',payload : {subtractvalue : 5}}),
        onStoreResult : () => dispatch({type : 'STORE_RESULT'}),
        onDeleteResult : (id) => dispatch({type : 'DELETE_RESULT',payload : {id : id}})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);