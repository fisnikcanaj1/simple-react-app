import React from 'react';
import styles from './Person.css'

const person = ( props ) => {
    return (
        <div className={styles.Person} >
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} year </p>
            <p>{props.children}</p>
            <input text="text" 
                onChange={props.changed}
                value={props.name} />
        </div>
    )
};

export default person;