<script lang="ts">
  export let projects:any;

  const toDate = (date:Date) => {
    let month = date.getUTCMonth() +1;
    let day = date.getUTCDay();
    let year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }

  const project = (project:String):string[] => {
    let projectName= project.split("/");
    return projectName;
  }
  console.log(projects);
</script>

<div class="border rounded-md w-96 h-96 shadow grid dark:text-white">
  <div>
    <img 
    src={ projects.projectThumb.split("/")[2] } 
    class="h-60 w-full object-cover" 
    alt="Thumbmail"/>
  </div>
  <div class="py-2 px-1 flex gap-2">
  <img 
  src={ projects.projectAvatar} 
  class="w-14 h-14 rounded-full object-cover aspect-square"
  alt="Profiel foto"/>
  <div>
    <p class="font-bold text-2xl">
      {  project(projects.projectName)[1] }
    </p>
    <p class="text-gray-500">
      @{ project(projects.projectName)[0] }
    </p>

    <p class="text-gray-500 dark:text-white">
      { projects.projectDesc }
    </p>
  </div>
  </div>
  <a class="bg-black rounded-b text-white flex items-center p-2 justify-center font-semibold text-lg" href={`/projects/${projects.id}`}>Bekijk project</a>
</div>
