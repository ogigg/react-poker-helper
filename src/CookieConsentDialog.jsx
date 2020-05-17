import MUICookieConsent from 'material-ui-cookie-consent';
import React, { useState, useEffect ,setState, useRef } from 'react';
// ....


export default function CookieConsentDialog (props) {

    const [open, setOpen] = React.useState(props.open)
  
    useEffect(() => {
      setOpen(props.open);
    }, [props.open]);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <MUICookieConsent 
        cookieName="acceptCookie"
        componentType="Snackbar" // default value is Snackbar
        message="Ta strona wykorzystuje pliki cookies w celu prawidłowego działania strony.
         Czy zgadzasz się na wykorzystywanie plików cookies?"
        />
      </div>
    );
  }