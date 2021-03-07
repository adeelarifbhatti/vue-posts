<template>
  <div class="loading">

  </div>
</template>

<style>

.loading{
    display: block;
    width: 80px;
    height: 80px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: rgb(20, 1, 1);
    animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
     transform: rotateZ(360deg);
  }
}
</style>