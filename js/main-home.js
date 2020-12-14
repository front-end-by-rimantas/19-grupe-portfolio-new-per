/***************
ALL IMPORTS
****************/
/* navigation bar */
/* hero */
/* about me */
/* skills */
/* resume */
/* client counter */
/* services */
import { servicesData } from "./data/servicesData.js";
import { renderMyServices } from "./components/myServices/renderMyServices.js";
/* portfolio */
/* testimonials */
/* blog */
/* contact */
import { contactsValidator } from "./components/myServices/contacts-validator/contactsValidator.js";


/* footer */

/***************
EXECUTION
****************/
/* navigation bar */
/* hero */
/* about me */
/* skills */
/* resume */
/* client counter */
/* services */
renderMyServices('#services-block', servicesData);
/* portfolio */
/* testimonials */
/* blog */
/* contact */
contactsValidator('form .cont-row .cont-input');

/* footer */