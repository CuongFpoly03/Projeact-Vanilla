import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = document.querySelector('#app');
import {render, router} from './utilities/index';
import Product from './pages/Product';
import Home from './pages/Home';
import Detailproduct from "./pages/Detailproduct"
import Notfound from './pages/Notfound';
import Listproduct from './pages/admins/Index';
import Create from './pages/admins/Create';
import Edit from './pages/admins/Edit';
import login from './pages/login';


router.on("/", ()=> render(Home, app))
router.on("/product", ()=> render(Product, app));
router.on("/product/:id",({data}) => render(()=> Detailproduct(data), app));

// admin
router.on("/admin/product", () => render(Listproduct, app))
router.on("admin/product/create", () => render(Create, app))
router.on("admin/product/:id/edit", ({data}) => render(() => Edit(data), app));
router.notFound(() => render(Notfound, app))

//login
router.on("/login",() => render(login, app));
router.resolve()//bắt đầu