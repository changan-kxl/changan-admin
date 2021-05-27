<template>
  <page-layout
    page-title="工作台"
    avatar="https://z3.ax1x.com/2021/05/18/ghV5RI.png"
    message="'欢迎，changan，要不要打一把 DOTA'"
    desc="'船长 | 海贼草帽团'"
  >
    <a-row style="margin-bottom: 40px">
      <a-col :xl="15" :lg="24" :md="24" :sm="24" :xs="24" class="bg-white">
        <a-card
          :loading="loading"
          :title="todoList.title"
          :bordered="false"
          :body-style="{ padding: 0 }"
        >
          <a-card-grid v-for="item in todoList.list" :key="item.id" class="cart-box">
            <div class="ant-card-body">
              <div class="ant-card-meta">
                <div class="ant-card-meta-detail">
                  <div class="ant-card-meta-title">
                    <div class="card-title">
                      <span class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                        <img :src="item.avatar" />
                      </span>
                      <span>{{ item.title }}</span>
                    </div>
                  </div>
                  <div class="ant-card-meta-description">
                    {{ item.content }}
                  </div>
                </div>
              </div>
              <div class="project-item">
                <a href="#" class="group"> {{ item.description }}</a>
                <span class="datetime">{{ item.createTime }}</span>
              </div>
            </div>
          </a-card-grid>
        </a-card>
      </a-col>
      <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24" class="bg-white" :push="1">
        <div class="calendar-time">
          <a-calendar :fullscreen="false" />
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :xl="15" :lg="24" :md="24" :sm="24" :xs="24" class="bg-white" style="padding: 0 12px">
        <a-list item-layout="horizontal" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar
                    src="https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
      <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24" class="bg-white" :push="1">
        <div id="myChart"></div>
      </a-col>
    </a-row>
  </page-layout>
</template>

<script>
import PageLayout from '@/components/layout/pageLayout.vue';
import { reactive, ref, onMounted, onActivated } from 'vue';
import * as echarts from 'echarts';
import { barChartOptions } from './chartOptions.js';

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
];
export default {
  components: {
    PageLayout
  },
  setup() {
    const loading = ref(true);
    const currDate = ref();
    const todoList = reactive({
      title: '代办事件',
      list: [
        {
          id: 1,
          title: '经典台词',
          content: '我是要成为海贼王的男人！',
          avatar: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png',
          description: '王路飞',
          createTime: '刚刚不久'
        },
        {
          id: 1,
          title: '经典台词',
          content:
            '我们绝对要过一个无悔的人生！总有一天，我们要踏上这片海洋，按照自己的梦想去闯荡！我们要过上最自由的人生！',
          avatar: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png',
          description: '王路飞',
          createTime: '刚刚不久'
        },
        {
          id: 1,
          title: '经典台词',
          content:
            '我怎么可能会输给一个舍弃自己的名子，从海上逃走的海贼呢？当一个海贼舍弃自己的名子时就和死掉没啥两样了！你们可以用这辈子来记住我的名子！因为我是…未来的海贼王！',
          avatar: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png',
          description: '王路飞',
          createTime: '刚刚不久'
        },
        {
          id: 1,
          title: '经典台词',
          content: '我是要成为海贼王的男人！',
          avatar: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png',
          description: '王路飞',
          createTime: '刚刚不久'
        },
        {
          id: 1,
          title: '经典台词',
          content:
            '我们绝对要过一个无悔的人生！总有一天，我们要踏上这片海洋，按照自己的梦想去闯荡！我们要过上最自由的人生！',
          avatar: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png',
          description: '王路飞',
          createTime: '刚刚不久'
        },
        {
          id: 1,
          title: '经典台词',
          content:
            '我怎么可能会输给一个舍弃自己的名子，从海上逃走的海贼呢？当一个海贼舍弃自己的名子时就和死掉没啥两样了！你们可以用这辈子来记住我的名子！因为我是…未来的海贼王！',
          avatar: 'https://z3.ax1x.com/2021/05/18/ghV5RI.png',
          description: '王路飞',
          createTime: '刚刚不久'
        }
      ]
    });
    // 获取标签容器
    async function setChart() {
      // 初始化
      let barChart = echarts.init(document.getElementById('myChart'));
      // barChartOptions 配置项，推荐放在外部引入。
      barChart.setOption(barChartOptions);
      window.onresize = function () {
        //自适应大小, 不用的话不会自适应大小。
        barChart.resize();
      };
    }
    function closeLoading() {
      setTimeout(function () {
        loading.value = false;
      }, 1000);
    }
    onMounted(() => {
      setChart();
      closeLoading();
    });
    onActivated(() => {
      setChart();
      closeLoading();
    });
    return {
      todoList,
      currDate,
      data,
      loading
    };
  }
};
</script>

<style lang="less" scope>
@import './index.less';
</style>
