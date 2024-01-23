// import { products } from "../../data";
import { getProducts, deleteProduct } from "../../api/products";
import {useEffect , useState} from "../../utilities"
import axios from 'axios'
const Listproduct = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(() => {
       (async () => {
        try {
            setProducts(await getProducts());
        }catch(error) {
            console.log(error)
        }
       })();
    },[])
    useEffect(() => {
        const btn = document.querySelectorAll(".remove-pr");
        // console.log(btn)
        for(let btns of btn) {
            btns.addEventListener('click',async  function(){
                const id =  this.dataset.id;
                const conf = window.confirm("bạn có muốn xoá không")
                // console.log(id)
                if(conf) {
                    try {
                        await deleteProduct(id);
                        const newPro = products.filter((pro) => pro.id !== +id);
                        setProducts(newPro);
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        }
    })
  return `
    <div
        class="table-responsive"
    >
    <h1>LIST PRODUCT</h1>
        <table
            class="table table- "
        >
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name Product</th>
                    <th scope="col">Image Product</th>
                    <th scope="col">Price Product</th>
                    <th scope="col">Quantity Product</th>
                    <th scope="col">Description Product</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            ${products.map((pro, index) =>{
                return `
                <tr class="">
                    <td>${index+1}</td>
                    <td>${pro.name_pr}</td>
                    <td><img src="${pro.image_pr}"></td>
                    <td>${pro.price_pr}</td>
                    <td>${pro.quantity_pr}</td>
                    <td>${pro.description_pr}</td>
                    <td>
                    <button data-id="${pro.id}" class="btn btn-danger remove-pr">Del</button>
                    <a href="/admin/product/${pro.id}/edit" class="btn btn-success editpr">Edit</a>
                    </td>
                </tr>
                `;
            } ).join(" ")}
            </tbody>
        </table>
    </div>
  `;
};
export default Listproduct;
