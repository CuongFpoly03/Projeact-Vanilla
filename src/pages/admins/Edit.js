import { editProduct, getProduct } from "@/api/products";
import { router, useEffect, useState } from "../../utilities";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
// console.log(getProduct);
const Create = ({ id }) => {
  console.log(id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    async () => {
      if (id) {
        try {
          setProduct(await getProduct(id));
        } catch (error) {
          console.log(error);
        }
      }
    };
  }, [id]);
  useEffect(() => {
    const editform = document.getElementById("edit-product");
    const name = document.getElementById("name");
    const image = document.getElementById("image");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    const description = document.getElementById("description");
    editform.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        await editProduct({
          id,
          name_pr: name.value,
          image_pr: image.value,
          price_pr: price.value,
          quantity_pr: quantity.value,
          description_pr: description.value,
        });
        // console.log(Newpro);
        router.navigate("/admin/product");
      } catch (error) {
        console.log(error);
      }
    });
  });

  return `
  <div class="">
  <h3
    class=" tw-font-bold tw-text-2xl tw-text-white tw-rounded tw-border-2 tw-border-solid tw-border-blue-800 tw-mb-6 tw-ml-5 tw-p-1 tw-w-64 tw-bg-blue-800"
  >
    Thêm sản phẩm
  </h3>
  <form action="" id="edit-product" class="tw-ml-10">
    <div>
      <input
        class="tw-p-1 tw-border-2 tw-border-solid tw-border-black"
        type="text"
        placeholder="name"
        id="name"
        value="${product.name_pr}"
      />
    </div>
    <div>
      <input
        class="tw-p-1 tw-border-2 tw-border-solid tw-border-black tw-w-44"
        type="file"
        placeholder="image"
        name="image"
        id="image"
        value="${product.image_pr ?? ""}"
      />
    </div>
    <div>
      <input
        class="tw-p-1 tw-border-2 tw-border-solid tw-border-black"
        type="number"
        placeholder="price"
        name="price"
        id="price"
        value="${product.price_pr ?? ""}"
      />
    </div>
    <div>
    <input
      class="tw-p-1 tw-border-2 tw-border-solid tw-border-black"
      type="number"
      placeholder="quantity"
      name="qauntity"
      id="quantity"
      value="${product.quantity_pr ?? ""}"
    />
  </div>
    <div>
      <input
        class="tw-p-1 tw-border-2 tw-border-solid tw-border-black"
        type=""
        placeholder="description"
        name="description"
        id="description"
        value="${product.description_pr ?? ""}"
      />
    </div>
    <div>
      <button
        type="submit"
        class="tw-p-1 tw-font-bold tw-border-2 tw-border-solid tw-hover:tw-bg-red-800 hover:tw-border-red-800 tw-border-blue-800 tw-rounded-full tw-bg-blue-800 tw-text-white tw-ml-6 mt-5"
      >
        update product
      </button>
    </div>
  </form>
  `;
};

export default Create;
