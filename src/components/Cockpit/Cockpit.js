import React from 'react'
import styles from './Cockpit.css';

const  cockpit = (props) => {
    let classesAssigned = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.persons.length <= 2) {
        classesAssigned.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classesAssigned.push(styles.bold);  
    }
    
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesAssigned.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;