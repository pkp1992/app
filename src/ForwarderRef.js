import React, {
    Component,
    PureComponent
} from 'react';

export class ForwarderRef extends Component {
    constructor(props){
        super(props)
        this.greeting = React.createRef();
    }

    componentDidMount() {
        console.log(this.greeting.current)
        setTimeout(() => {
            this.greeting.current.toUpperCase();
        },3000)
    }
    render(){
        return(
            <PureGreeting ref={this.greeting} name="Kostia" />
        )
    }
}

class Greeting extends Component {
    state = {
        isUpper: false
    }
    toUpperCase = () => {
        this.setState(state => ({
            isUpper: !this.state.isUpper
        }))
    }
    render(){
        const {isUpper} = this.state
        const {name} = this.props
        return(
            <p>{isUpper ? 'HELLO' : 'hello'}, {name}</p>
        )
    }
}

const pure = WrappedComponent =>
class PureComponent extends PureComponent{
    render(){
        return(
            <WrappedComponent {...this.props} ref={this.props.forwaredRef}/>
            )
        }
    }

const PureGreeting = pure(Greeting);

export default ForwarderRef;