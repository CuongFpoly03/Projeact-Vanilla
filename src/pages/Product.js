import { products } from "../data";
import ProducList from "../components/ProducList";
const Product = () => {
  // console.log(products)
  return /*html*/ `
<div>
<div>
<div class="tw-text-right tw-mr-20 tw-mt-5 tw-text-xl">
  <i class="tw-mr-4 fa-solid fa-toggle-off"></i>
  <i class="fa-solid fa-sliders"></i>
</div>
<div class="tw-flex"> 
  <div
    id="contentContainer"
    class=" tw-overflow-x-hidden tw-mt-8 tw-h-96 tw-w-72 tw-bg-zinc-100 tw-overflow-y-scroll"
  >
  
    <div class="tw-ml-10">
      <h5 class="tw-font-bold">Gender</h5>
      <input type="checkbox" /> Men <br />
      <input type="checkbox" /> Women <br />
      <input type="checkbox" /> Unisex <br />
    </div>
    <hr />
    <div class="tw-ml-10">
      <h5 class="tw-font-bold">Kids</h5>
      <input type="checkbox" /> Boys <br />
      <input type="checkbox" /> Girls <br />
    </div>
    <hr />
    <div class="tw-ml-10">
      <h5 class="tw-font-bold">Shop by price</h5>
      <input type="checkbox" /> Under- 1T <br />
      <input type="checkbox" /> 1triệu - 2triệu <br />
      <input type="checkbox" /> 2triệu - 3triệu <br />
      <input type="checkbox" /> 3triệu - 4triệu <br />
      <input type="checkbox" /> Over - 5triệu <br />
    </div>
    <hr />
    <div class="tw-ml-10">
      <h5 class="tw-font-bold">Colour</h5>
      <input type="color" />
    </div>
    <hr />
    <div class="tw-ml-10">
      <h5 class="tw-font-bold">Sports</h5>
      <input type="checkbox" /> Lifestyle<br />
      <input type="checkbox" /> Running <br />
      <input type="checkbox" /> Training & gym <br />
      <input type="checkbox" /> Basketball <br />
      <input type="checkbox" /> Over - 5triệu <br />
    </div>
  </div>

  <div class="tw-mb-6 tw-w-100% tw-w-70% tw-mt-1">
    ${ProducList({products})}
  </div>
</div>
</div>
  <div>
    <div class="footer tw-mt-14">
        <div class="tw-bg-black tw-text-white tw-w-11/12 tw-m-auto tw-h-80 tw-rounded"> 
          <div class="tw-columns-3 tw-ml-48 tw-pt-7 tw-pb-6">
            <div >
              <p class="tw-font-bold tw-text-xl">Air Max 90</p>
              <p>Nike Dunk Low Retro</p>
              <p>Air Max 90</p>
              <p>Nike Air Force 1 '07</p>
            </div>
            <div>
              <p class="tw-font-bold tw-text-xl">Custom Shoes</p>
              <p>Custom Shoes</p>
              <p>Nike Dunk Low Retro</p>
              <p>Custom Shoes</p>
            </div>
            <div>
              <p class="tw-font-bold tw-text-xl">Shirts & Tops</p>
              <p>Nike Air Force 1 '07</p>
              <p>Shirts & Tops</p>
              <p>Nike Dunk Low Retro</p>
            </div>
          </div>

          <div class="tw-text-center tw-pb-6 tw-text-2xl">
            <i class="fa-brands fa-facebook tw-text-white tw-ml-2"></i>
            <i class="fa-brands fa-discord tw-text-white tw-ml-2"></i>
            <i class="fa-brands fa-github tw-text-white tw-ml-2"></i>
            <i class="fa-brands fa-linkedin tw-text-white tw-ml-2"></i>
          </div>
          <div>
            <p class="tw-text-center tw-p-2 tw-text-base">Hello2024@asm.com</p>
          </div>
        </div>
      </div>
    </div>
</div>
  `;
};

export default Product;
