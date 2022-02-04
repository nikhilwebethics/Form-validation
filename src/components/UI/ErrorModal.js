import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props)=>{
    return  <div className={classes.backdrop} onClick={props.cancelModel}/>;
}



const ErrorModal = (props) => {
  return (
    <Fragment>
     {ReactDOM.createPortal(
       <Backdrop onClick={props.cancelModel}/>,
       document.getElementById('warning-header')
      )}
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.cancelModel}>Okay</Button>
        </footer>
      </Card>


    </Fragment>
  );
};

export default ErrorModal;