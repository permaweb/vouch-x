<script>
  import { router } from "tinro";
</script>

{#if $router.path !== "/aos"}
  <div class="flex-col justify-start items-start gap-6 inline-flex">
    <div class="p-2.5 flex-col justify-start items-start gap-2.5 flex">
      <div
        class="text-zinc-900 text-[21px] font-medium font-['Satoshi'] tracking-wide"
      >
        Step 1:
      </div>
      <div class="p-2.5 justify-center items-center gap-6 inline-flex">
        <div
          class="w-12 h-12 p-2 {$router.path === '/'
            ? 'bg-indigo-500'
            : 'bg-zinc-100'} rounded-[9px] justify-start items-start gap-2.5 flex"
        >
          <div class="w-8 h-8 relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V23C3 23.7956 3.31607 24.5587 3.87868 25.1213C4.44129 25.6839 5.20435 26 6 26H26C26.7956 26 27.5587 25.6839 28.1213 25.1213C28.6839 24.5587 29 23.7956 29 23V9C29 8.20435 28.6839 7.44129 28.1213 6.87868C27.5587 6.31607 26.7956 6 26 6ZM5 12H27V14H20.8988C20.4377 14.0003 19.9909 14.1598 19.634 14.4516C19.2771 14.7433 19.0319 15.1495 18.94 15.6012C18.7999 16.2768 18.4313 16.8833 17.8962 17.3188C17.3612 17.7543 16.6924 17.9921 16.0025 17.9921C15.3126 17.9921 14.6438 17.7543 14.1088 17.3188C13.5737 16.8833 13.2051 16.2768 13.065 15.6012C12.9729 15.1486 12.727 14.7419 12.369 14.45C12.0111 14.1581 11.5631 13.9991 11.1012 14H5V12ZM6 8H26C26.2652 8 26.5196 8.10536 26.7071 8.29289C26.8946 8.48043 27 8.73478 27 9V10H5V9C5 8.73478 5.10536 8.48043 5.29289 8.29289C5.48043 8.10536 5.73478 8 6 8ZM26 24H6C5.73478 24 5.48043 23.8946 5.29289 23.7071C5.10536 23.5196 5 23.2652 5 23V16H11.1C11.3301 17.1296 11.9435 18.145 12.8363 18.8743C13.7292 19.6036 14.8466 20.0019 15.9994 20.0019C17.1522 20.0019 18.2696 19.6036 19.1624 18.8743C20.0552 18.145 20.6686 17.1296 20.8988 16H27V23C27 23.2652 26.8946 23.5196 26.7071 23.7071C26.5196 23.8946 26.2652 24 26 24Z"
                fill={$router.path === "/" ? "white" : "#73747A"}
              />
            </svg>
          </div>
        </div>

        <div
          class="{$router.path === '/'
            ? 'text-zinc-900'
            : 'text-zinc-500'} text-[21px] font-medium font-['Satoshi'] tracking-wide"
        >
          Connect Wallet
        </div>
      </div>
    </div>
    <div
      class="self-stretch h-[126px] p-2.5 flex-col justify-start items-start gap-2.5 flex"
    >
      <div
        class="text-zinc-500 text-[21px] font-medium font-['Satoshi'] tracking-wide"
      >
        Step 2:
      </div>

      <div class="p-2.5 justify-center items-center gap-6 inline-flex">
        <div
          class="w-12 h-12 p-2 {$router.path === '/signin'
            ? 'bg-indigo-500'
            : 'bg-zinc-100'} rounded-[9px] justify-center items-center gap-2.5 flex"
        >
          <div class="w-6 h-6 relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2439 2.25H21.5519L14.3249 10.51L22.8269 21.75H16.1699L10.9559 14.933L4.98991 21.75H1.67991L9.40991 12.915L1.25391 2.25H8.07991L12.7929 8.481L18.2439 2.25ZM17.0829 19.77H18.9159L7.08391 4.126H5.11691L17.0829 19.77Z"
                fill={$router.path === "/signin" ? "white" : "#73747A"}
              />
            </svg>
          </div>
        </div>
        <div
          class="{$router.path === '/signin'
            ? 'text-zinc-900'
            : 'text-zinc-500'}  text-[21px] font-medium font-['Satoshi'] tracking-wide"
        >
          Sign-In With X
        </div>
      </div>
    </div>
    <div class="p-2.5 flex-col justify-start items-start gap-2.5 flex">
      <div
        class="text-zinc-500 text-[21px] font-medium font-['Satoshi'] tracking-wide"
      >
        Step 3:
      </div>
      <div class="p-2.5 justify-center items-center gap-6 inline-flex">
        <div
          class="w-[46px] h-[46px] relative {$router.path === '/success'
            ? 'bg-indigo-500'
            : 'bg-zinc-100'} rounded-[9px]"
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 26.5H18.5C17.1044 26.5 16.4067 26.5 15.8389 26.6722C14.5605 27.06 13.56 28.0605 13.1722 29.3389C13 29.9067 13 30.6044 13 32M27 29L30 32L35 26M25.5 18.5C25.5 20.9853 23.4853 23 21 23C18.5147 23 16.5 20.9853 16.5 18.5C16.5 16.0147 18.5147 14 21 14C23.4853 14 25.5 16.0147 25.5 18.5Z"
              stroke={$router.path === "/success" ? "white" : "#73747A"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="{$router.path === '/success'
            ? 'text-zinc-900'
            : 'text-zinc-500'} text-[21px] font-medium font-['Satoshi'] tracking-wide"
        >
          Vouch Successful
        </div>
      </div>
    </div>
  </div>
{/if}
