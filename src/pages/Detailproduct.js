import {products} from '../data'
const Detailproduct = ({id}) => {
    // console.log(typeof id); kiem tr id xem 
    const product = products.find((product) => product.id === +id);
    if(!product) return null;
    return (
        /*html*/`
        <div class="tw-mt-10 tw-bg-white">
        <div class="tw-flex">
        <div class="tw-flex-1 tw-flex tw-ml-32 tw-mt-5" id="thumbnailContainer">
          <div class="thumbnail-container">
            <img src="./public/imgs/pr2.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr1.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr4.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr3.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr8.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr6.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr12.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr11.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr10.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
            <img src="./public/imgs/pr7.jpg" alt="" class="tw-w-14 tw-h-14 m-2" onmouseover="changeImage(this)"/>
          </div>
          <div class="">  
            <img src="./public/imgs/pr2.jpg" alt="" class="tw-w-12/12 tw-h-3/4 tw-m-2 tw-ml-4 default-image" id="defaultImage" />
          </div>
          
        </div>
        <div class="tw-ml-20 tw-flex-1 tw-mt-5">
          <h3 class="tw-text-2xl">HAIK MAII TERRLLA HDSJ</h3>
          <span class="tw-text-base tw-font-bold tw-opacity-80">Price: 100.53434.00 ₫</span>
          <img src="./public/imgs/pr2.jpg" alt="" class="tw-w-20 tw-rounded tw-h-20 m-2"/>
          <div>
            <div class="tw-flex tw-mt-5">
              <p class="tw-font-bold">Select Size</p>
              <p class="tw-ml-56 tw-italic tw-text-base tw-opacity-50 tw-border-b-black tw-border-b-2">Size Guide</p>
            </div>
            <div class="tw-flex">
              <div class="tw-mr-2">
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 40</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 41</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 43</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 46</div> 
              </div>
              <div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 44</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 45</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 46</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 55</div>
              </div>
              <div class="tw-ml-2">
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 44</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 45</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 46</div>
                <div class="tw-border-solid tw-border-2 tw-p-1 hover:tw-border-black tw-m-2 tw-pr-8 tw-pl-8">EU 77</div>
              </div>
            </div>
            <div>
              <button class="tw-my-3 tw-rounded-full tw-w-96 p-3 tw-bg-black tw-text-white tw-font-bold tw-border-2 tw-border-solid  tw-border-black hover:tw-bg-white hover:tw-text-black">Add to Bag</button> <br />
              <button class="hover:tw-bg-black hover:tw-text-white tw-rounded-full tw-w-96 p-3 tw-bg-white tw-text-black tw-font-bold tw-border-2 tw-border-solid  tw-border-wheate">Favorte <i class="fa-regular fa-heart "></i></button>
            </div>
            <div class="tw-my-5">
             <p class="tw-w-96">
              <strong>Description is:</strong> Celebrate MJ's legacy with this shout-out to
              Chicago's 312 area code. With elements from three iconic Jordans
              (the AJ3, AJ1 and Air Alpha Force), it's a modern mash-up that reps
              the best.
             </p>
            </div>
            <div>
              <button onclick="document.getElementById('id01').style.display='block' " style="width:auto;" class="tw-text-blue-900 tw-text-sx tw-border-b-2 tw-border-blue-900 tw-mb-5 tw-italic hover:tw-text-blue-950">Views buttonroduct Details</button>
              <div id="id01" class="modal">
                <div class="modal-contents animate tw-rounded">              
                <div class="closecontainer">
                  <span onclick="document.getElementById('id01').style.display='none'" class="closes" title="Close Modal">&times;</span>
                </div>
                <div class="tw-flex tw-p-4">
                  <img src="./public/imgs/pr1.jpg" alt="" class="tw-w-14 tw-h-14 m-2">
                  <div>
                    <h3>PJDSAD ĐI ĐANH DA</h3>
                    <span>123.3400 đ</span>
                  </div>
                </div>
                <div class="tw-p-4">
                  <h5>SHOUT-OUT TO THE 312.</h5>
                  <p>Celebrate MJ's legacy with this shout-out to Chicago's 312 area code. With elements from three iconic Jordans (the AJ3, AJ1 and Air Alpha Force), it's a modern mash-up that reps the best.</p>
                  <p>Benefits</p>
                  <li>Design combines iconic elements of the AJ3, AJ1 and Alpha Force.</li>
                  <li>The midfoot strap adds bold branding and secures your fit.</li>
                  <li>Visible Air-Sole unit at the heel enhances cushioning.</li>
                  <li>Colour Shown: Summit White/Varsity Red/Sail/Black</li>
                  <li>Style: CD7069-106</li>
                  <li>Country/Region of Origin: Indonesia,China</li>
                </div>
              </div>
              </div>
            </div>
            <div>
              <hr class="tw-w-96">
              <button type="button" class="collapsible">
                Free Delivery and Returns <i class="fa-solid fa-chevron-down tw-ml-28 tw-font-bold"></i>
              </button>
              <div class="content">
                <p>
                  + Your order of 5.000.000₫ or more gets free standard delivery.
                </p>
                <p>- Standard delivered 4-5 Business Days</p>
                <p>- Express delivered 2-4 Business Days</p>
                <p>
                  Orders are processed and delivered Monday-Friday (excluding
                  public holidays)
                </p>
              </div>
            </div>
            <div>
              <div>
                <hr class="tw-w-96">
                <button type="button" class="collapsible ">Reviews(3)
                  <i class="fa-solid fa-star tw-ml-32"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-solid fa-chevron-down tw-font-bold"></i>
                </button>
              <div class="content">
                <p class="tw-font-base tw-text-blue-700 tw-w-28 tw-itali">Write a Review</p>
                <div>
                  <h6>Le Phu Cuong</h6>
                  <p class="tw-text-xs"> <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star tw-mr-32"></i>
                  </i>EzraM554711776 - 29 Dec 2023
                </p>
                  <p>Best trainers I've had in a while to be honest</p>
                </div>
                <div>
                  <h6>Nguyen Phi Hoang</h6>
                  <p class="tw-text-xs"> <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star tw-mr-32"></i>
                  </i>EzraM554711776 - 29 Dec 2023</p>
                  <p>Best trainers I've had in a while to be honest</p>
                </div>
                <div>
                  <h6>Nguyen Van Dong</h6>
                  <p class="tw-text-xs"> <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star tw-mr-32"></i>
                  </i>EzraM554711776 - 29 Dec 2023</p>
                  <p>Best trainers I've had in a while to be honest</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div class="tw-ml-16">
          <h3>How Others Are Wearing It</h3>
          <p class="tw-mb-10">Upload your photo or mention @Nike on Instagram for a chance to be featured.</p>
          <div class="tw-flex">
            <div>
              <img id="myImg" src="./public/imgs/fb1.jpg" alt="Snow" class="tw-w-80 tw-h-96 tw-mr-10">
              <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01">
              </div>
            </div>
          <div>
            <input type="file" class="tw-h-4/4 tw-border-solid tw-border-black tw-border-2 tw-w-80 tw-h-96">
          </div>
        </div>
      </div>
      <div>
        <h3 class="tw-m-14">Related Products</h3>
        <div class="tw-flex">
          <div class="tw-h-full hover:tw-border-black hover:tw-border-2 tw-bg-zinc-100 tw-mx-8 tw-w-72 tw-text-center tw-rounded tw-shadow-2xl">
            <img src="./public/imgs/pr6.jpg" alt="" class="tw-ml-6 tw-mt-5 tw-w-48">
            <p class="tw-text-left tw-ml-6 tw-font-bold tw-mt-5">Gear that leads to wild places.</p>
            <span class="tw-font-bold tw-text-red-800 tw-float-left tw-ml-6">150.000 đ <i class="fa-solid fa-caravan tw-text-black tw-ml-20"></i></span>
            <p class="tw-text-xs tw-float-left tw-ml-6 tw-mt-3 tw-font-bold">shopshoe2024.com</p>
            <h6
          class="tw-mt-24 tw-mr-5 tw-mb-5 tw-border-solid tw-border-2 tw-border-black tw-p-1 tw-font-bold tw-text-white tw-bg-black tw-rounded-full tw-ml-24 hover:tw-bg-white hover:tw-text-black"
          >show detail</h6>
          </div>
          <div class="tw-h-full  hover:tw-border-black hover:tw-border-2 tw-bg-zinc-100 tw-mx-8 tw-w-72 tw-text-center tw-rounded tw-shadow-2xl">
            <img src="./public/imgs/pr10.jpg" alt="" class="tw-ml-6 tw-mt-5 tw-w-48">
            <p class="tw-text-left tw-ml-6 tw-font-bold tw-mt-5">Gear that leads to wild places.</p>
            <span class="tw-font-bold tw-text-red-800 tw-float-left tw-ml-6">150.000 đ <i class="fa-solid fa-caravan tw-text-black tw-ml-20"></i></span>
            <p class="tw-text-xs tw-float-left tw-ml-6 tw-mt-3 tw-font-bold">shopshoe2024.com</p>
            <h6
          class="tw-mt-24 tw-mr-5 tw-mb-5 tw-border-solid tw-border-2 tw-border-black tw-p-1 tw-font-bold tw-text-white tw-bg-black tw-rounded-full tw-ml-24 hover:tw-bg-white hover:tw-text-black"
          >show detail</h6>
          </div>
          <div class="tw-h-full hover:tw-border-black hover:tw-border-2 tw-bg-zinc-100 tw-mx-8 tw-w-72 tw-text-center tw-rounded tw-shadow-2xl">
            <img src="./public/imgs/pr7.jpg" alt="" class="tw-ml-6 tw-mt-5 tw-w-48">
            <p class="tw-text-left tw-ml-6 tw-font-bold tw-mt-5">Gear that leads to wild places.</p>
            <span class="tw-font-bold tw-text-red-800 tw-float-left tw-ml-6">150.000 đ <i class="fa-solid fa-caravan tw-text-black tw-ml-20"></i></span>
            <p class="tw-text-xs tw-float-left tw-ml-6 tw-mt-3 tw-font-bold">shopshoe2024.com</p>
            <h6
          class="tw-mt-24 tw-mr-5 tw-mb-5 tw-border-solid tw-border-2 tw-border-black tw-p-1 tw-font-bold tw-text-white tw-bg-black tw-rounded-full tw-ml-24 hover:tw-bg-white hover:tw-text-black"
          >show detail</h6>
          </div>
          <div class="tw-h-full hover:tw-border-black hover:tw-border-2 tw-bg-zinc-100 tw-mx-8 tw-w-72 tw-text-center tw-rounded tw-shadow-2xl">
            <img src="./public/imgs/pr8.jpg" alt="" class="tw-ml-6 tw-mt-5 tw-w-48">
            <p class="tw-text-left tw-ml-6 tw-font-bold tw-mt-5">Gear that leads to wild places.</p>
            <span class="tw-font-bold tw-text-red-800 tw-float-left tw-ml-6">150.000 đ <i class="fa-solid fa-caravan tw-text-black tw-ml-20"></i></span>
            <p class="tw-text-xs tw-float-left tw-ml-6 tw-mt-3 tw-font-bold">shopshoe2024.com</p>
            <h6
          class="tw-mt-24 tw-mr-5 tw-mb-5 tw-border-solid tw-border-2 tw-border-black tw-p-1 tw-font-bold tw-text-white tw-bg-black tw-rounded-full tw-ml-24 hover:tw-bg-white hover:tw-text-black"
          >show detail</h6>
          </div>
        </div>
      </div>
    </div>
        <div class="footer tw-mt-14">
        <div class="tw-bg-black tw-w-11/12 tw-m-auto tw-text-white tw-h-80 "> 
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
              <p>Nike Air Force 1 '07</p>
            </div>
            <div>
              <p class="tw-font-bold tw-text-xl">Shirts & Tops</p>
              <p>Nike Air Force 1 '07</p>
              <p>Shirts & Tops</p>
              <p>Nike Dunk Low Retro</p>
            </div>
          </div>

          <div class="tw-text-center tw-pb-6 tw-text-2xl">
            <i class="fa-brands fa-facebook tw-text-white tw-text-2xl tw-ml-2"></i>
            <i class="fa-brands fa-discord tw-text-white tw-text-2xl tw-ml-2"></i>
            <i class="fa-brands fa-github tw-text-white tw-text-2xl tw-ml-2"></i>
            <i class="fa-brands fa-linkedin tw-text-white tw-text-2xl tw-ml-2"></i>
          </div>
          <div>
            <p class="tw-text-center tw-p-2 tw-text-base">Hello2024@asm.com</p>
          </div>
        </div>
      </div>
    `
    )
}

export default Detailproduct
