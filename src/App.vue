<template>
  <nav class="bg-white dark:bg-gray-900 shadow relative z-20">
    <div class="max-w-6xl px-2 lg:px-6 mx-auto">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <a class="flex-shrink-0 flex items-center" href="/dashboard"
            ><div class="block sm:hidden">
              <svg
                class="inline-block h-10 w-10"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <g>
                  <path
                    class="fill-current text-[#139] dark:text-blue-500"
                    d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5m0-5a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                  ></path>
                </g>
                <line
                  class="
                    stroke-current stroke-[7px]
                    text-[#001d4a]
                    dark:text-blue-600
                  "
                  style="stroke-miterlimit: 10"
                  x1="50"
                  y1="27"
                  x2="73.29"
                  y2="65.64"
                ></line>
                <line
                  class="
                    stroke-current stroke-[7px]
                    text-[#001d4a]
                    dark:text-blue-600
                  "
                  style="stroke-miterlimit: 10"
                  x1="50"
                  y1="27"
                  x2="28.56"
                  y2="67"
                ></line>
                <circle
                  class="fill-current text-[#139] dark:text-blue-500"
                  cx="50"
                  cy="27"
                  r="10"
                ></circle>
                <circle
                  class="fill-current text-[#139] dark:text-blue-500"
                  cx="28.56"
                  cy="67"
                  r="10"
                ></circle>
                <circle
                  class="fill-current text-[#139] dark:text-blue-500"
                  cx="73.29"
                  cy="65.64"
                  r="10"
                ></circle>
              </svg>
            </div>
            <div class="hidden sm:block h-9">
              <div
                class="
                  flex
                  items-center
                  space-x-2
                  whitespace-nowrap
                  flex-nowrap
                "
              >
                <div class="h-9 w-9 flex-shrink-0">
                  <svg
                    class="inline-block"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <g>
                      <path
                        class="fill-current text-[#139] dark:text-blue-500"
                        d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5m0-5a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                      ></path>
                    </g>
                    <line
                      class="
                        stroke-current stroke-[7px]
                        text-[#001d4a]
                        dark:text-blue-600
                      "
                      style="stroke-miterlimit: 10"
                      x1="50"
                      y1="27"
                      x2="73.29"
                      y2="65.64"
                    ></line>
                    <line
                      class="
                        stroke-current stroke-[7px]
                        text-[#001d4a]
                        dark:text-blue-600
                      "
                      style="stroke-miterlimit: 10"
                      x1="50"
                      y1="27"
                      x2="28.56"
                      y2="67"
                    ></line>
                    <circle
                      class="fill-current text-[#139] dark:text-blue-500"
                      cx="50"
                      cy="27"
                      r="10"
                    ></circle>
                    <circle
                      class="fill-current text-[#139] dark:text-blue-500"
                      cx="28.56"
                      cy="67"
                      r="10"
                    ></circle>
                    <circle
                      class="fill-current text-[#139] dark:text-blue-500"
                      cx="73.29"
                      cy="65.64"
                      r="10"
                    ></circle>
                  </svg>
                </div>
                <span class="font-bold text-xl tracking-tight"
                  >USACO Guide</span
                >
              </div>
            </div></a
          >
          <div class="hidden lg:ml-8 lg:flex space-x-8">
            <div>
              <div class="relative h-full">
                <button
                  class="
                    group
                    text-gray-500
                    inline-flex
                    items-center
                    h-full
                    space-x-2
                    border-b-2 border-transparent
                    text-base
                    leading-6
                    font-medium
                    hover:text-gray-900 hover:border-gray-300
                    focus:outline-none focus:text-gray-900 focus:border-gray-300
                    transition
                    ease-in-out
                    duration-150
                    dark:text-dark-high-emphasis
                    dark:hover:border-gray-500
                    dark:focus:border-gray-500
                  "
                  id="headlessui-menu-button-1"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mt-0.5">Sections</span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="
                      text-gray-400
                      h-5
                      w-5
                      mt-0.5
                      group-hover:text-gray-500
                      group-focus:text-gray-500
                      transition
                      ease-in-out
                      duration-150
                      dark:text-dark-med-emphasis
                      dark:group-hover:text-dark-med-emphasis
                      dark:group-focus:text-dark-med-emphasis
                    "
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <a
              class="
                inline-flex
                items-center
                px-1
                pt-0.5
                border-b-2 border-transparent
                text-base
                font-medium
                leading-6
                text-gray-500
                hover:text-gray-900 hover:border-gray-300
                focus:outline-none focus:text-gray-900 focus:border-gray-300
                dark:text-dark-high-emphasis
                dark:hover:border-gray-500
                dark:focus:border-gray-500
                transition
              "
              href="/problems/"
              >Problems</a
            >
            <nav class="h-full">
              <div class="h-full">
                <button
                  class="
                    text-gray-500
                    hover:border-gray-300
                    focus:border-gray-300
                    dark:hover:border-gray-500 dark:focus:border-gray-500
                    group
                    inline-flex
                    items-center
                    h-full
                    border-b-2 border-transparent
                    space-x-2
                    text-base
                    leading-6
                    font-medium
                    hover:text-gray-900
                    focus:outline-none focus:text-gray-900
                    transition
                    ease-in-out
                    duration-150
                    dark:text-dark-high-emphasis
                  "
                  id="headlessui-popover-button-2"
                  type="button"
                  aria-expanded="false"
                >
                  <span class="mt-0.5">Resources</span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="
                      text-gray-400
                      mt-0.5
                      ml-2
                      h-5
                      w-5
                      group-hover:text-gray-500
                      group-focus:text-gray-500
                      dark:text-dark-med-emphasis
                      dark:group-hover:text-dark-med-emphasis
                      dark:group-focus:text-dark-med-emphasis
                      transition
                      ease-in-out
                      duration-150
                    "
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>
            <button
              class="
                cursor-pointer
                inline-flex
                items-center
                px-1
                border-b-2 border-transparent
                text-base
                font-medium
                leading-6
                text-gray-500
                hover:text-gray-900 hover:border-gray-300
                focus:outline-none focus:text-gray-900 focus:border-gray-300
                dark:text-dark-high-emphasis
                dark:hover:border-gray-500
                dark:focus:border-gray-500
                transition
              "
            >
              Contact Us
            </button>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-end px-2 lg:px-0 lg:ml-6">
          <button
            type="button"
            class="
              inline-flex
              items-center
              px-2
              py-1
              border border-transparent
              rounded-md
              text-gray-500
              hover:text-gray-700
              dark:text-dark-high-emphasis
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-gray-400 dark:text-gray-300"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path></svg
            ><span class="ml-2 font-medium">Search</span>
          </button>
        </div>
        <div class="flex items-center lg:hidden">
          <button
            class="
              MobileMenuButtonContainer-dsFtSa
              bbDOxO
              inline-flex
              items-center
              justify-center
              p-2
            "
            aria-label="Main menu"
            aria-expanded="false"
          >
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path></svg
            ><svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="
            hidden
            lg:mx-3 lg:block
            border-l border-gray-200
            dark:border-gray-700
            h-6
            self-center
          "
        ></div>
        <div class="hidden lg:flex lg:items-center">
          <div class="relative inline-block text-left">
            <div>
              <button
                class="
                  flex
                  text-sm
                  border-2 border-transparent
                  rounded-full
                  focus:outline-none focus:border-white
                  transition
                "
                id="headlessui-menu-button-4"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">Open user menu</span
                ><img
                  class="h-8 w-8 rounded-full"
                  src="https://lh3.googleusercontent.com/a-/AOh14GhWFCsLfU92CZZwC8OomPdJ-34AcdqeEMXRQR9_jw"
                  alt="User photo URL"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/dashboard/"
          >Dashboard</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/general/"
          >General</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/bronze/"
          >Bronze</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/silver/"
          >Silver</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/gold/"
          >Gold</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/plat/"
          >Platinum</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/adv/"
          >Advanced</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/problems/"
          >Problems</a
        ><a
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/groups"
          >Groups</a
        ><a
          href="https://forum.usaco.guide/"
          target="_blank"
          rel="noreferrer"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          >Forum</a
        ><a
          href="https://ide.usaco.guide/"
          target="_blank"
          rel="noreferrer"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          >IDE</a
        ><a
          href="https://joincpi.org/classes"
          target="_blank"
          rel="noreferrer"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          >Classes</a
        ><a
          href="https://joincpi.org/clubs"
          target="_blank"
          rel="noreferrer"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          >Clubs</a
        ><a
          href="https://joincpi.org/contests"
          target="_blank"
          rel="noreferrer"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          >Contests</a
        ><a
          href="https://joincpi.org/workshop"
          target="_blank"
          rel="noreferrer"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          >Workshops</a
        ><button
          class="
            block
            w-full
            text-left
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
        >
          Contact Us</button
        ><a
          class="
            block
            w-full
            text-left
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
          href="/settings"
          >Settings</a
        ><button
          class="
            block
            w-full
            text-left
            pl-3
            pr-4
            py-2
            border-l-4 border-transparent
            text-base
            font-medium
            text-gray-600
            dark:text-dark-med-emphasis
            hover:text-gray-800
            dark:hover:text-dark-high-emphasis
            hover:bg-gray-50
            dark:hover:bg-gray-700
            hover:border-gray-300
            dark:hover:border-gray-500
            focus:outline-none focus:text-gray-800 focus:bg-gray-50
            dark:focus:bg-gray-700
            focus:border-gray-300
            transition
          "
        >
          Sign Out
        </button>
      </div>
    </div>
  </nav>

  <div>
    <h1>USACO Guide</h1>
  </div>
</template>
