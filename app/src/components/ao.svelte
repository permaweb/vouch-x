<script>
  import { router } from "tinro";
  import { message, result, createDataItemSigner } from "@permaweb/aoconnect";
  let pid = null;
  let error = null;
  const VOUCH_DAO = "L1CWfW_LAWA7UY_zf9CFwbnt3wLuVMEueylFi_1YACo";

  function doVouch() {
    error = null;
    console.log(arweaveWallet.address);
    // get list of process by address

    // if (pid.length === 43) {

    //   message({
    //     signer: createDataItemSigner(arweaveWallet),
    //     process: VOUCH_DAO,
    //     tags: [
    //       { name: "Action", value: "Add-ID" },
    //       { name: "ID", value: pid },
    //     ],
    //   }).then((id) => result({
    //       message: id,
    //       process: VOUCH_DAO,
    //   }).then((res) => {
    //     if (res.status === 200) {
    //       pid = "";
    //       router.goto("/success");
    //     } else {
    //       router.goto(`/error?msg=${encodeURI("Could not VOUCH ao Process!")}`);
    //     }
    //   });
    //   return;
    // }
    // error = "Valid ao Process ID is required!";
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
      <button
        on:click={doVouch}
        class="px-[22px] py-3 bg-indigo-500 rounded-xl shadow border justify-start items-start inline-flex text-white"
        >VOUCH PROCESSES</button
      >
    </div>

    {#if error && pid.length > 0}
      <div class="my-0 py0 text-red-400">{error}</div>
    {/if}
  </div>
</div>
