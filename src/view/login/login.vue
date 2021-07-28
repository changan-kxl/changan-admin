<template>
  <common-layout>
    <div class="top">
      <div class="header">
        <img alt="logo" class="logo" src="@/assets/img/logo.png" />
        <span class="title">{{ systemName }}</span>
      </div>
      <div class="desc"></div>
    </div>
    <div class="login">
      <a-form v-bind="formItemLayout" layout="horizontal" :model="modelRef">
        <a-form-item v-bind="validateInfos.user">
          <a-input v-model:value="modelRef.user" placeholder="superAdmin" size="large">
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input
            v-model:value="modelRef.password"
            type="password"
            placeholder="888888"
            size="large"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <div>
          <a-checkbox :checked="true">自动登录</a-checkbox>
          <a style="float: right">忘记密码</a>
        </div>
        <a-form-item>
          <a-button
            :loading="logging"
            style="width: 100%; margin-top: 24px"
            size="large"
            type="primary"
            @click.prevent="onSubmit"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </common-layout>
</template>

<script>
import { ref, reactive, toRaw } from 'vue'
import CommonLayout from '@/components/layout/CommonLayout.vue'
import { Form } from 'ant-design-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

const useForm = Form.useForm
export default {
  components: {
    CommonLayout
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const logging = ref(false)
    const modelRef = reactive({
      user: '',
      password: ''
    })
    const { validate, validateInfos } = useForm(
      modelRef,
      reactive({
        user: [
          {
            required: true,
            message: 'Please input name'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please input sub name'
          }
        ]
      })
    )
    const systemName = ref('Vue Antd Admin')
    const formItemLayout = reactive({
      labelCol: { span: 0 },
      wrapperCol: { span: 24 }
    })

    async function login(values) {
      const res = await store.dispatch('user/login', values)
      logging.value = false
      if (res.result === 1) {
        message.success('登录成功')
        router.push('/home')
      } else {
        message.warning('用户名或密码错误')
        return
      }
    }
    function onSubmit() {
      validate()
        .then(() => {
          logging.value = true
          const formValues = toRaw(modelRef)
          login(formValues)
        })
        ['catch']((err) => {
          logging.value = false
        })
    }

    return {
      systemName,
      modelRef,
      onSubmit,
      validateInfos,
      formItemLayout,
      logging
    }
  }
}
</script>

<style lang="less" scoped>
.common-layout {
  .top {
    text-align: center;
    .header {
      height: 44px;
      line-height: 44px;
      a {
        text-decoration: none;
      }
      .logo {
        height: 44px;
        vertical-align: top;
        margin-right: 16px;
      }
      .title {
        font-size: 33px;
        color: #000;
        font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: relative;
        top: 2px;
      }
    }
    .desc {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 12px;
      margin-bottom: 40px;
    }
  }
  .login {
    width: 368px;
    margin: 0 auto;
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-width: 320px) {
      .captcha-button {
        font-size: 14px;
      }
    }
    .icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.45);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
}
</style>
