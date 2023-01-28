<script lang="ts">
  import NavMenu from "../../components/NavMenu.svelte";
  import Navbar from "../../components/Navbar.svelte";
  export let data;
  const user = data.user;

  let naam: String = "";
  let email: String = "";
  let bericht: String = "";

  let error = false;
  let send = false;

  const sendBericht = () => {
    if (naam.length > 5 && email.length > 5 && bericht.length > 5) {
      const mail = fetch("http://localhost:5173/contact/server", {
        method: "POST",
        body: JSON.stringify({
          naam,
          email,
          bericht,
        }),
      })
        .then((e) => {
          if (e.ok) {
            send = true;
            error = false;
          }
        })
        .catch(() => {
          error = true;
        });
    } else {
      error = true;
      send = false;
    }
  };
</script>

<NavMenu />

<Navbar
  isLoggedIn={user.isValidated}
  userName={user.userName || ""}
  role={user.role || 0}
/>


<div class="flex items-center flex-col justify-center mt-20">
<h1 class="font-bold text-xl">Contact mij</h1>
  <div class="w-full px-1 flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <label for="naam">Naam</label>
      <input
        class="border rounded-md w-full h-10 p-2"
        placeholder="Naam"
        id="naam"
        bind:value={naam}
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="email">E-mail</label>
      <input
        class="border rounded-md w-full h-10 p-2"
        placeholder="E-mail"
        id="email"
        bind:value={email}
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="bericht">Bericht</label>
      <textarea
        class="border rounded-md  w-full p-2"
        placeholder="E-mail"
        id="bericht"
        bind:value={bericht}
      />
    </div>

    <div class="flex flex-col">
      <button
        class="font-bold bg-black w-full text-white p-2  rounded shadow-md"
        on:click={sendBericht}>Verzend</button
      >
    </div>
  </div>
</div>
<a href = "mailto: faouzib1@outlook.com" class="flex items-center mt-3 ml-1 text-blue-600">E-Mail</a>

{#if error}
  <div
    class="alert alert-error shadow-lg w-fit absolute top-16 right-5"
    on:click={() => (error = false)}
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span
        >Error! Check of alle velden meer dan 5 characters hebben of neem direct
        contact op via faouzib1@outook.com.</span
      >
    </div>
  </div>
{/if}

{#if send}
  <div
    class="alert alert-success shadow-lg w-fit absolute top-14 right-5"
    on:click={() => (send = false)}
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span
        >Mail succesfol verzonden ik zall zo snell mogelijk contact opnemen.</span
      >
    </div>
  </div>
{/if}
