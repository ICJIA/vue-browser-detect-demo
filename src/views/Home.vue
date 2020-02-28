<template>
  <div class="home">
    <div class="row center-xs">
      <div
        class="col-xs-12
               "
      >
        <img alt="Vue logo" src="../assets/logo.png" />
        <div class="box" style="margin-top: 30px">
          <tree-view :data="$browserDetect"></tree-view>
        </div>
      </div>
    </div>
  </div>
</template>
