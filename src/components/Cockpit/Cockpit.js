import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const cockpit = props => {

  useEffect(() => {
    setTimeout(() => {
      console.log('[Cockpit.js] useEffect')
      alert('Saved data to cloud')
    }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  const assignedClasses = []

  let btnClass = ''
  
  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        onClick={props.clicked}
        className={btnClass}>
        Toggle Persons
    </button>
    </div>
  )
}

export default cockpit