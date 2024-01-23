const login = () => {
  return `
  <div class="tw-h-100%  tw-bg-white tw-w-8/12 tw-m-auto tw-border-solid tw-border-2 border-white tw-rounded">
    <div class="tw-w-96 tw-float-left ">
        <h3 class="tw-mt-4 tw-font-bold tw-text-center tw-text-3xl">Plese Login</h3>
        <form action="/" id="form-login" class="tw-ml-16">
        <div class="tw-mt-10">
        <label class="tw-font-bold">Username:</label><br>
        <input class="tw-w-72 tw-border-solid tw-border-2 border-black tw-p-2 tw-font-bold rounded" type="text" name="username"  id="username">
        </div>
        <div class="tw-my-6">
        <label  class="tw-font-bold">PassWord:</label><br>
        <input class="tw-w-72 tw-border-solid tw-border-2 border-black tw-p-2 tw-font-bold rounded" type="password" name="password"  id="password">
        </div>
        <button class="tw-my-2 tw-w-72 tw-border-solid tw-border-2 tw-border-red-300 tw-p-2 tw-bg-red-500 tw-text-white tw-font-bold tw-rounded-full" type="submit">Log in</button><br>
        <button class="tw-w-72 tw-border-solid tw-border-2 tw-border-blue-300 tw-p-2 tw-bg-blue-500 tw-text-white tw-font-bold tw-rounded-full">Connect with facebook</button>
        </form>
    </div>
    <div >
    <img src="./public/imgs/login.jpg"  class="tw-rounded-xl tw-shadow-2xl tw-w-96 tw-h-96"</div>
    </div>
  `;
};

export default login;
