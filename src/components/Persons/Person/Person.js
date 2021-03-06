import React, {Component} from 'react';
import styles from './Person.css'

class Person extends Component {
    render() {
        return (
            <div className={styles.Person} >
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} year </p>
                <p>{this.props.children}</p>
                <input text="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        )
    }
 }

export default Person;