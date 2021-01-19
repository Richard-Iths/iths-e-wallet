<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6em;
  font-family: "PT Mono", monospace;
  line-height: 1.6em;
}
.wrapper {
  margin: 0 auto;

  .btn {
    margin-top: 2.5rem;
    text-decoration: none;
    border: 2px solid #222;
    padding: 1.2rem;
    border-radius: 10px;
    min-width: 32rem;
    color: #222;
    font-weight: bold;
    text-align: center;
    background-color: white;
    flex: 0 1 30rem;

    &:hover {
      background-color: #222;
      transform: scale(1.1);
      color: #fff;
      transition: all ease 500ms;
    }
  }
}
</style>
