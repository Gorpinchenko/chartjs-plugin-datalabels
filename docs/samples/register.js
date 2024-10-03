import {Chart, registerables} from 'chart-js-v4';
import plugin from '../../dist/chartjs-plugin-datalabels.js';

Chart.register(...registerables);
Chart.register(plugin);
