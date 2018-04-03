import React from 'react'
import styles from './Cockpit.css';

const  cockpit = (props) => {
    let classesAssigned = [];
    let btnClass = '';
    if(props.showPerson) {
        btnClass = styles.Red;
    }
    if (props.persons.length <= 2) {
        classesAssigned.push(styles.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classesAssigned.push(styles.bold);  
    }
    console.log(styles.Red);
    
    return (
        <div className={btnClass}>
            <h1>Hi, I'm a React App</h1>
            <p className={classesAssigned.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;