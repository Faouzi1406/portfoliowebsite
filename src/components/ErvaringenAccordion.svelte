<script lang="ts">
  type Accordion = {
    icon:string,
    desc:string,
    title:string
  }

  export let accordionProps:Accordion;
</script>

<div class="collapse collapse-plus shadow rounded-md border w-96">
  <input type="checkbox" /> 
  <div class="collapse-title text-xl font-medium">
  <div class="grow flex items-center gap-2">
  <img 
    src={accordionProps.icon} 
    alt={ accordionProps.title } 
    class="w-10 rounded-full border bg-white p-1 object-cover aspect-square"
  />
  <p>{ accordionProps.title }</p>
  </div>
  </div>
  <div class="collapse-content"> 
    <p>{ accordionProps.desc }</p>
  </div>
</div>
