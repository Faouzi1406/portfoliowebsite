<script>
  import ErvaringenAccordion from "./ErvaringenAccordion.svelte";
</script>

<div class="w-[100vw] flex items-center justify-center mt-10 flex-col">
  <h2 class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 dark:from-white dark:to-white text-transparent font-bold text-2xl">Mijn ervaring</h2>
  <div class="">
    <!-- Informatie -->
    <div
      class="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
    >
      <div class="flex flex-col gap-2">
        <p class="font-black text-[18px] text-center">Language's</p>
        <ErvaringenAccordion
          accordionProps={{
            icon: "/jsLogo.png",
            desc: "Met Javscript heb ik nogal wat applicatie's gemaakt zowel op school voor opdrachten als na school om bijvoorbeeld web-applicaties te maken.",
            title: "JavaScript",
          }}
        />
        <ErvaringenAccordion
          accordionProps={{
            icon: "/rustLogo.png",
            desc: "Rust is mijn favoriete taal omdat ik het nogal leuk vind om hierin applicatie's te maken en system programming te doen zoals tools om web requests te maken vanuit de terminal en tcp servers te schrijven.",
            title: "Rust",
          }}
        />
        <ErvaringenAccordion
          accordionProps={{
            icon: "/csLang.svg",
            desc: "Met C# heb ik nogal veel applicatie's gemaakt voor school waardoor ik hiermee veel ervaring heb gebouwt en meerdere crud applicatie's heb gemaakt.",
            title: "C#",
          }}
        />
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-black text-[18px] text-center">Frameworks & Library's</p>
        <ErvaringenAccordion
          accordionProps={{
            icon: "/svelteLogo.svg",
            desc: "Svelte is een JS framework waarme je nogal snelle goede applicaties kan maken, met svelte heb ik onder andere deze portfollio gemaakt",
            title: "Svelte & Svelte kit",
          }}
        />
        <ErvaringenAccordion
          accordionProps={{
            icon: "/nextjslogo.svg",
            desc: "Next.js is een JavaScript-framework voor het bouwen van server-gerenderende React-applicaties met SSR, SSG, code splitting en meer. Hier heb ik ook meerdere applicatie mee gemaakt zoals een social media applicatie.",
            title: "Next.js",
          }}
        />
        <ErvaringenAccordion
          accordionProps={{
            icon: "/react.svg",
            desc: "React maakt het makkelijk om met components een goede samenhangende user interface te maken en maakt het ook makkelijk om met states reactivity toe te passen.",
            title: "React",
          }}
        />
        <ErvaringenAccordion
          accordionProps={{
            icon: "/tauriLogo.svg",
            desc: "Tauri maakt het makkelijk om met Rust en een frontend framework zoals Next.js of Svelte een desktop applicatie te maken die stabiel is. Met tauri heb ik wat applicatie's gemaakt maar het meeste plezier gehad met het maken een Pokedex.",
            title: "Tauri",
          }}
        />
        <ErvaringenAccordion
          accordionProps={{
            icon: "/rocketRust.jpeg",
            desc: "Met rocket kan je in Rust snele Api's schrijven.",
            title: "Rocket",
          }}
        />
      </div>
    </div>
  </div>
</div>
