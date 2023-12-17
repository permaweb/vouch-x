<script>
  import Confetti from "svelte-confetti";

  async function checkGateway(e) {
    e.preventDefault();
    const targetUrl = globalThis.location.origin.includes("vouch-twitter")
      ? globalThis.location.origin.replace("vouch-twitter", "now")
      : "https://now.g8way.io";

    fetch(targetUrl, { method: "HEAD" }).then((res) => {
      if (res.ok) {
        globalThis.location.href = targetUrl;
      } else {
        globalThis.location.href = "https://now.g8way.io";
      }
    });
    //globalThis.location.href = "https://now.g8way.io";
  }
</script>

<div
  style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
>
  <Confetti
    x={[-5, 5]}
    y={[0, 0.1]}
    delay={[500, 2000]}
    infinite
    duration="5000"
    amount="200"
    fallDistance="100vh"
  />
</div>

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
        Congrats! You are successfully vouched on the Permaweb!
      </div>
    </div>
    <div
      class="w-[701px] h-[175px] px-6 bg-gradient-to-b from-violet-50 to-white rounded-[18px] shadow-inner border-2 border-indigo-500 border-opacity-50 flex-col justify-center items-start gap-[49px] flex"
    >
      <div class="justify-center items-start gap-2.5 inline-flex">
        Check out ar://now and start exploring the Permaweb!
      </div>
      <a
        class="px-[22px] py-3 bg-indigo-500 rounded-xl shadow border justify-start items-start inline-flex text-white"
        href="https://now.g8way.io"
        on:click={checkGateway}>ar://now</a
      >
    </div>
  </div>
</div>
