<script>
  let pid = null;
  const VOUCH_DAO = "8qh1lX8dL-PjHZilwCy4kgwR7644IC6Z_gPfia-ij4E";
  function doVouch() {
    if (pid.length === 43) {
      fetch(
        `https://su-router.ao-testnet.xyz/?assign=${pid}&process-id=${VOUCH_DAO}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        },
      ).then((res) => {
        if (res.status === 200) {
          pid = "";
          alert("Successfully Vouched Process!");
        } else {
          alert("Something went wrong!");
        }
      });
      return;
    }
    alert("Valid Vouch Process ID is required!");
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
        Vouch your AOS Process!
      </div>
    </div>
    <div
      class="w-[701px] h-[175px] px-6 bg-gradient-to-b from-violet-50 to-white rounded-[18px] shadow-inner border-2 border-indigo-500 border-opacity-50 flex-col justify-center items-start gap-[49px] flex"
    >
      <div class="justify-center items-start gap-2.5 inline-flex">
        <label
          for="pid"
          class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            bind:value={pid}
            type="text"
            id="pid"
            class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[425px] font-mono px-1 py-2"
            placeholder="Process ID"
          />

          <span
            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gradient-to-b p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
          >
            Process ID
          </span>
        </label>
      </div>
      <button
        on:click={doVouch}
        class="px-[22px] py-3 bg-indigo-500 rounded-xl shadow border justify-start items-start inline-flex text-white"
        >VOUCH PROCESS</button
      >
    </div>
  </div>
</div>
