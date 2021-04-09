<template>
  <button @click="handleAdd">count is: {{ count }}</button>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
      default: 1,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    modalValue: null,
    age: String,
    name: String,
  },
  setup(props, context) {
    function handleAdd() {
      context.emit("update:age", 2);
    }
    return {
      handleAdd,
    };
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
