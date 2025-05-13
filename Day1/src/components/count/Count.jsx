import React, { Component, PureComponent } from 'react'
import style from './style.module.css'

class CountClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count,

        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1,

        })
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        return <>
            <div className={style['card']}>
                <h2>Counter from Class</h2>
                {<h3>{this.state.count < 0 ? this.state.count = 0 : this.state.count}</h3>}
                <button onClick={this.increase} > + </button>
                <button onClick={this.decrease} > - </button>
            </div>

        </>;
    }
}

export default CountClass;
