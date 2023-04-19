/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import { registerVueControllerComponents } from '@symfony/ux-vue';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
registerVueControllerComponents(require.context('./controllers', true, /\.vue$/));
