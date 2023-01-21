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
</script>

<div class="border p-2 shadow h- rounded w-[450px] h-40 ">
  <div class="flex gap-2" >
   <div>
   <img src={ projects.projectAvatar } class="object-cover w-12 rounded-full aspect-square" alt="projects"/>
   </div>
   <div>
    <p class="font-semibold text-xl">{ project(projects.projectName)[1] }</p>
    <p class="text-sm leading-6 mt-0.3 text-gray-600"> { project(projects.projectName)[0] } { toDate(projects.projectDate) } </p>
   </div>
  </div>
  <div class="text-base mt-5 mb-2">
    <p>{projects.projectDesc}</p>
  </div>
  <div class="flex items-end justify-end">
    <a class="bg-black p-2 text-white rounded" href={`/projects/${ projects.id }`}>Bekijk Project</a>
  </div>
</div>
