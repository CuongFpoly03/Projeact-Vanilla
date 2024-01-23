const ProducList = ({products}) => {
  return `
  ${products
    .map((pro) => {
      return `
      <div
      class="tw-w-33.33% tw-float-left tw-bg-zinc-100 tw-mx-4 tw-mb-6 tw-w-72 tw-text-center tw-rounded tw-shadow-2xl"
    >
      <a href="/product/${pro.id}"><img
        src="${pro.image_pr}"
        alt=""
        class="tw-ml-6 tw-mt-5 tw-w-58"
      /></a>
      <p class="tw-text-left tw-ml-6 tw-font-bold tw-w-58 tw-mt-5">
        Gear that leads to wild places his to ri omaon
      </p>
      <span class="tw-font-bold tw-text-red-800 tw-float-left tw-ml-6"
        >150.000 đ
        <i class="fa-solid fa-caravan tw-text-black tw-ml-32"></i
      ></span>
      <p class="tw-text-xs tw-float-left tw-ml-6 tw-mt-3 tw-font-bold">
        shopshoe2024.com
      </p>
      <h6
        class="tw-mt-24 tw-mr-5 tw-mb-5 tw-border-solid tw-border-2 tw-border-black tw-p-1 tw-font-bold tw-text-white tw-bg-black tw-rounded-full tw-ml-24 hover:tw-bg-white hover:tw-text-black"
      >
        show detail
      </h6>
    </div>
    `;
    })
    .join(" ")}
  `;
};

export default ProducList;
