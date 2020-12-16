/***************
ALL IMPORTS
****************/
/* navigation bar */
/* hero */
import { heroIconData } from './data/heroIconData.js';
import { renderHeroIcons } from './components/heroIcons/renderHeroIcons.js';
import { typeWriterAllWords } from "./data/typewriterData.js"
import { RenderTypeWriter } from "./components/renderTypewriter/renderTypewriter.js"
/* about me */
/* skills */
import { skillsData } from "./data/skillsData.js";
import { renderMySkills } from "./components/mySkills/renderMySkills.js";
/* resume */
/* client counter */
import { clientCounterData } from './data/clientCounterData.js';
import { renderClientCounter } from './components/clientCounter/renderClientCounter.js';
/* services */
import { servicesData } from "./data/servicesData.js";
import { renderMyServices } from "./components/myServices/renderMyServices.js";
/* portfolio */
/* testimonials */
/* blog */
/* contact */
import { contactsValidator } from "./components/contacts/contactsValidator.js";


/* footer */

/***************
EXECUTION
****************/
/* navigation bar */
/* hero */
// hero-icon-render
renderHeroIcons('#hero-icons_block', heroIconData);
//typewriter
const typeEffect = new RenderTypeWriter(".typer", typeWriterAllWords);
typeEffect.typeWriting();
/* about me */
/* skills */
renderMySkills('#skillsLeft', skillsData);
renderMySkills('#skillsRight', skillsData);
/* resume */
/* client counter */
renderClientCounter('#clientCounterBlock', clientCounterData);
/* services */
renderMyServices('#services-block', servicesData);
/* portfolio */
/* testimonials */
/* blog */
/* contact */
contactsValidator('form');
/* footer */