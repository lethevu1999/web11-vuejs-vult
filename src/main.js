import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import TheEmployeeList from '../src/views/employees/TheEmployeeList'
import ReportForm from '../src/views/reports/TheReportList'

const app = createApp(App);
const routes = [
    { path: "/", component: TheEmployeeList },
    { path: "/report", component: ReportForm },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

app.use(router);
app.mount('#app')
