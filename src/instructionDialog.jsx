import React, { useState, useEffect ,setState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InstructionDialog (props) {

  const [open, setOpen] = React.useState(props.open)

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Instrukcja użytkowania"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Dodaj kartę używając przycisku z plusem, następnie przeciągnij ją ze stosu 
            na dowolną pozycję za pomocą myszki. Wszystkie układy karty na stole zobaczysz w prawym dolnym rogu.
            Możesz również poznać szczegółowe zasady gry klikając w na przycisk w prawym górnym rogu.
            Eksperymentuj i ucz się!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" >
            <b>Ok</b>
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}