import "./styles.scss";
import "./window";
import "@ionic/core/css/ionic.bundle.css";
import { defineCustomElements } from "@ionic/core/loader"; 

import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-button';

import "./firebase";

import './views/web-root/web-root';
import './views/web-register/web-register';
import './views/web-login/web-login';
import './views/web-loading/web-loading';
import './views/web-home/web-home';
import './views/web-tabs/web-tabs';
import './views/web-history/web-history';
import './views/web-profile/web-profile';

import './components/navbar/navbar';


defineCustomElements(window);