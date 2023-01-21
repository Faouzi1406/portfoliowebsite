<script>
    import Navbar from "../../../components/Navbar.svelte";

  export let data;
  let user = data.user;
  console.log(data);
</script>

<Navbar 
  isLoggedIn={ user.isValidated }
  userName={ user.userName || '' }
  role={ user.role || 0 }
/>


