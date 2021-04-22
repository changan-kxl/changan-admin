<template>
  <transition
    v-if="!disabled"
    :enter-active-class="`animated ${enterAnimate} page-toggle-enter-active`"
    :leave-active-class="`animated ${leaveAnimate} page-toggle-leave-active`"
  >
    <slot></slot>
  </transition>
  <div v-else><slot></slot></div>
</template>

<script>
const animates = [
  {
    name: "back",
    alias: "渐近",
    directions: ["left", "right", "down", "up"],
  },
  {
    name: "bounce",
    alias: "弹跳",
    directions: ["left", "right", "down", "up", "default"],
  },
  {
    name: "fade",
    alias: "淡化",
    directions: [
      "left",
      "right",
      "down",
      "up",
      "downBig",
      "upBig",
      "leftBig",
      "rightBig",
      "topLeft",
      "bottomRight",
      "topRight",
      "bottomLeft",
      "default",
    ],
  },
  {
    name: "flip",
    alias: "翻转",
    directions: ["x", "y"],
  },
  {
    name: "lightSpeed",
    alias: "光速",
    directions: ["left", "right"],
  },
  {
    name: "rotate",
    alias: "旋转",
    directions: ["downLeft", "upRight", "downRight", "upLeft", "default"],
  },
  {
    name: "roll",
    alias: "翻滚",
    directions: ["default"],
  },
  {
    name: "zoom",
    alias: "缩放",
    directions: ["left", "right", "down", "up", "default"],
  },
  {
    name: "slide",
    alias: "滑动",
    directions: ["left", "right", "down", "up"],
  },
];
export default {
  name: "PageToggleTransition",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: String,
      validator(value) {
        return animates.findIndex((item) => item.name == value) != -1;
      },
      default: "bounce",
    },
    direction: {
      type: String,
      validator(value) {
        return (
          [
            "x",
            "y",
            "left",
            "right",
            "up",
            "down",
            "downLeft",
            "upRight",
            "downRight",
            "upLeft",
            "downBig",
            "upBig",
            "downLeft",
            "downRight",
            "topRight",
            "bottomLeft",
            "topLeft",
            "bottomRight",
            "default",
          ].indexOf(value) > -1
        );
      },
    },
    reverse: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    enterAnimate() {
      return this.activeClass(false);
    },
    leaveAnimate() {
      return this.activeClass(true);
    },
  },
  methods: {
    activeClass(isLeave) {
      let animate = animates.find((item) => this.animate == item.name);
      if (animate == undefined) {
        return "";
      }
      let direction = "";
      if (this.direction == undefined) {
        direction = animate.directions[0];
      } else {
        direction = animate.directions.find((item) => item == this.direction);
      }
      direction =
        direction == undefined || direction === "default" ? "" : direction;
      if (direction != "") {
        direction =
          isLeave && this.reverse
            ? this.reversePosition(direction, animate.directions)
            : direction;
        direction = direction[0].toUpperCase() + direction.substring(1);
      }
      let t = isLeave ? "Out" : "In";
      return animate.name + t + direction;
    },
    reversePosition(direction, directions) {
      if (direction.length == 0 || direction == "x" || direction == "y") {
        return direction;
      }
      let index = directions.indexOf(direction);
      index = index % 2 == 1 ? index - 1 : index + 1;
      return directions[index];
    },
  },
};
</script>

<style lang="less">
.page-toggle-enter-active {
  position: absolute !important;
  animation-duration: 0.8s !important;
  width: calc(100%) !important;
}
.page-toggle-leave-active {
  position: absolute !important;
  animation-duration: 0.8s !important;
  width: calc(100%) !important;
}
.page-toggle-enter {
}
.page-toggle-leave-to {
}
</style>
