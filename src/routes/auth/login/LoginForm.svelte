<script>
  let username = "";
  let password = "";

  let isValid = false;
  let validateFields = () => {isValid = username.length >= 6 && password.length >= 6};
</script>

<div class="flex justify-center  mt-20">

   <form method="post" action="/auth/api">
    {#if !isValid }
      <span class="text-red-500">
      All fields must be 6 characters or longer
      </span>
    {/if}
      <div class="flex flex-col gap-2">
       <input 
       type="text" 
       placeholder="Login" 
       class="input input-bordered rounded-sm max-w-xs w-96"  
       name="username"
       bind:value={username}
       on:input={() => validateFields()}
       class:input-error="{username.length < 6}" 
       />
       <input 
       type="password" 
       placeholder="Password" 
       name="password" 
       class="input input-bordered max-w-xs w-96 rounded-sm" 
       bind:value={password}
       on:input={() => validateFields()}
       class:input-error="{password.length < 6}" 
       />
     </div>
     <button 
     class="border bg-black p-2 text-white w-full mt-2 rounded-md shadow-md" 
     disabled={!isValid} 
     >Login</button>
   </form>
</div>
