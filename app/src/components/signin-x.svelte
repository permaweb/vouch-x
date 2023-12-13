<script>
  import { address } from "../store.js";

  function login() {
    globalThis.location.href =
      "https://4000-permaweb-vouchx-2zoe05600qn.ws-us106.gitpod.io/x?callback=" +
      encodeURI("https://5173-permaweb-vouchx-2zoe05600qn.ws-us106.gitpod.io") +
      "&address=" +
      $address;
  }
</script>

<div class="flex-col justify-start items-start gap-[37px] flex">
  <div class="flex-col justify-start items-start gap-[25px] flex">
    <div class="w-12 h-12 relative">
      <svg
        width="29"
        height="26"
        viewBox="0 0 29 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.8392 0H27.2861L17.571 11.0133L29 26H20.0512L13.0421 16.9107L5.0222 26H0.57266L10.9639 14.22L0 0H9.17601L15.5116 8.308L22.8392 0ZM21.2785 23.36H23.7425L7.83711 2.50133H5.19293L21.2785 23.36Z"
          fill="#1E1D22"
        />
      </svg>
    </div>
    <div class="w-[912px] pb-[23px] justify-center items-center inline-flex">
      <div
        class="w-[912px] text-zinc-400 text-[17px] font-normal font-['Satoshi'] tracking-tight"
      >
        Now that you connected your wallet, verify your X account to prove your
        online public identity and get vouched on the permaweb.
      </div>
    </div>
  </div>
  <div
    class="w-[701px] h-[175px] px-6 bg-gradient-to-b from-violet-50 to-white rounded-[18px] shadow-inner border-2 border-indigo-500 border-opacity-50 flex-col justify-center items-start gap-[49px] flex"
  >
    <div class="justify-center items-start gap-2.5 inline-flex">
      <div
        class="text-zinc-900 text-[19px] font-medium font-['Satoshi'] tracking-tight"
      >
        Connect your X Account.
      </div>
    </div>
    <button
      on:click={login}
      class="flex-col justify-center items-start gap-[7px] flex"
    >
      <div
        class="px-[22px] py-3 bg-indigo-500 rounded-xl shadow border justify-start items-start inline-flex"
      >
        <div class="justify-start items-center gap-1.5 flex">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8134 7H14.1135L9.08844 12.5067L15 20H10.3713L6.74593 15.4553L2.59769 20H0.296204L5.67098 14.11L0 7H4.74621L8.02322 11.154L11.8134 7ZM11.0061 18.68H12.2806L4.05368 8.25067H2.686L11.0061 18.68Z"
              fill="white"
            />
            <path
              d="M22.0705 17.7944L19.4537 19.9813C19.3263 20.0874 19.2316 20.2247 19.1797 20.3785C19.1277 20.5323 19.1206 20.6968 19.1589 20.8542L19.9452 24.1123L16.9819 22.3899C16.8374 22.3056 16.6713 22.261 16.5021 22.261C16.3328 22.261 16.1668 22.3056 16.0222 22.3899L13.063 24.1123L13.844 20.8564C13.8824 20.699 13.8753 20.5345 13.8233 20.3807C13.7714 20.2269 13.6766 20.0896 13.5493 19.9835L10.9313 17.7977C10.9311 17.796 10.9311 17.7943 10.9313 17.7927L14.3802 17.5071C14.5486 17.4929 14.7097 17.4349 14.8462 17.3394C14.9827 17.244 15.0894 17.1146 15.1548 16.9654L16.5015 13.8933L17.8476 16.9654C17.913 17.1146 18.0197 17.244 18.1562 17.3394C18.2927 17.4349 18.4538 17.4929 18.6222 17.5071L22.0717 17.7927V17.7966L22.0705 17.7944Z"
              fill="#FCC500"
            />
          </svg>

          <div class="text-white text-[17px] font-medium font-['Satoshi']">
            Connect
          </div>
          <div class="w-[25px] h-[25px] relative">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.94788 17.7708L13.7187 13L8.94788 8.21875L10.4166 6.75L16.6666 13L10.4166 19.25L8.94788 17.7708Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  </div>
</div>
