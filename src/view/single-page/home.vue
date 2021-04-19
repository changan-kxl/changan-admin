<template>
  <div
    id="rightMenuDom"
    class="right-menu"
    :style="{
      display: rightMenuStatus,
    }"
  >
    <ul>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightMenuStatus: "none",
    };
  },
  mounted() {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.rightMenuStatus = "block";
    });
    document.addEventListener("mousedown", (event) => {
      event.preventDefault();
      if (event.button == 1) {
        console.log("右击事件");
      }
      this.rightMenuStatus = "none";
    });
  },
};
</script>
<style lang="less">
.right-menu {
  position: absolute;
  background: #fff;
  color: #34495e;
  min-width: 100px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  cursor: pointer;
  z-index: 1002;
  ul {
    list-style: none;
    width: 100px;
    box-shadow: 0 10px 10px #c2c1c2;
    padding: 0;
    margin: 0;
    font-size: 15px;
  }
  li {
    list-style: none;
    box-sizing: border-box;
    padding: 6px 0;
    border-bottom: 1px solid rgb(216, 216, 217);
    text-align: center;
    &:hover {
      background-color: #0070f5;
      cursor: pointer;
      color: #ffffff;
    }
    &:nth-child(1) {
      padding-top: 2px;
    }

    &:nth-last-child(1) {
      border-bottom: none;
    }
  }
}
</style>
