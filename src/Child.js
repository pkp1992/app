import React, {PureComponent} from 'react';

class Child extends PureComponent {
    render() {
        console.log(this.props);
        return <div>
            this props: {this.props.condition && this.props.children}
        </div>
    }
}
 
export default Child;