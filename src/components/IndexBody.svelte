<script>
    import Ervaringen from "./Ervaringen.svelte";
    import Projecten from "./Projecten.svelte";
</script>

<div class="py-2">
<div class="flex flex-col items-center justify-center">
  <div class="w-96 pt-10">
     <h1 class="font-semibold text-xl text-center pb-5">Faouzi Bouchkhachekh</h1>
     <p>
     Mijn naam is Faouzi Bouchkhachekh. Ik ben een software developer die momenteel de opleiding software development volgt aan Grafisch Lyceum Rotterdam (Jaar 2). Mijn hoofdtaal is Rust, C# en JS. Ik heb ook ervaring met React, Svelte en Next.js. Mijn voorkeurseditor is Vim. Mijn primaire besturingssysteem is Linux, waar ik ook verstand van heb. Mijn interesse ligt vooral bij systeemprogrammering.
     </p>
  </div>
  <div class="grid grid-cols-3 mt-4 gap-10">
    <a href="https://github.com/Faouzi1406">
      <img src="/githubIcon.svg" alt="github icon" class="w-12  rounded-full bg-white border border-white"/>
    </a>

    <a href="https://www.linkedin.com/in/faouzi-bouchkhachekh-496624254/">
      <img src="/linkedIn.png" alt="github icon" class="w-12 rounded-full bg-white border"/>
    </a>

    <a href="https://www.linkedin.com/in/faouzi-bouchkhachekh-496624254/">
      <img src="/linkedIn.png" alt="github icon" class="w-12 rounded-full bg-white border"/>
    </a>
  </div>
</div>

<Ervaringen />
</div>
