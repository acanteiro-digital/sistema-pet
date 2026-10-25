import { mount } from './runtime.js';
import Component from './logic.js';
import template from './template.html';

mount(document.getElementById('app'), template, Component);
