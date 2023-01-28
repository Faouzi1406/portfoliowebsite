<script lang="ts">
    import Ervaringen from "./Ervaringen.svelte";
    import Projects from "./Projects.svelte";

    export let data:any;
</script>

<div class="py-2">
<div class="h-52 py-6 flex items-center flex-col gap-5 justify-center">
    <div>
      <p class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 dark:from-white dark:to-white text-transparent font-bold ">Software developer</p>
      <h1 class="text-3xl font-extrabold text-center dark:text-white">Faouzi Bouchkhachekh</h1>
    </div>
    <div class="flex items-center gap-3">
      <a class="btn btn-info text-white" href="/contact" >Contact  mij</a>
      <a class="btn btn-outline dark:text-white" href="/projects">Projecten</a>
    </div>
</div>
<div class="flex flex-col items-center justify-center">
  <div class="w-96 pt-10">
     <h1 class="font-semibold text-center pb-5 text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 dark:from-white dark:to-white text-transparent font-bold">Over mij</h1>
     <p>
     Mijn naam is Faouzi Bouchkhachekh. Ik ben een software developer die momenteel de opleiding software development volgt aan Grafisch Lyceum Rotterdam (Jaar 2). Mijn hoofdtalen is Rust, C# en JS. Ik heb ook ervaring met React, Svelte en Next.js. Mijn voorkeurseditor is Vim. Mijn primaire besturingssysteem is Linux, waar ik ook verstand van heb. Mijn interesse ligt vooral bij systeemprogrammering & web-development.
     </p>
  </div>
  <div class="grid grid-cols-2 mt-4 gap-10">
    <a href="https://github.com/Faouzi1406">
      <img src="/githubIcon.svg" alt="github icon" class="w-12  rounded-full bg-white border border-white"/>
    </a>

    <a href="https://www.linkedin.com/in/faouzi-bouchkhachekh-496624254/">
      <img src="/linkedIn.png" alt="github icon" class="w-12 rounded-full bg-white border"/>
    </a>
  </div>
</div>
<Ervaringen />
</div>
