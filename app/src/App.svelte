<script>
  import { Route, router } from "tinro";
  import Layout from "./components/layout.svelte";
  import Connect from "./components/connect-wallet.svelte";
  import SignInX from "./components/signin-x.svelte";
  import Success from "./components/success.svelte";

  import Nav from "./components/nav.svelte";

  router.mode.hash();
</script>

<Layout>
  <div slot="main">
    <Route path="/">
      <Connect />
    </Route>
    <Route path="/signin">
      <SignInX />
    </Route>
    <Route path="/success">
      <Success />
    </Route>
    <Route path="/error">
      <h1>There was an error with your request!</h1>
    </Route>
  </div>
  <Nav slot="nav" />
</Layout>
