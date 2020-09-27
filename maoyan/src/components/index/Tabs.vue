<template>
  <nav class="my-tabs">
    <address @click="toCities">{{ city }} *</address>
    <ul>
      <li v-for="(item, index) in tabsList" 
        :key="index" 
        :class="{ active: activeIndex === index }"
        @click="tabsChange(index, item.url)">
        {{ item.title }}
        <div class="underLine" v-if="activeIndex === index"></div>
      </li>
    </ul>
    <span class="iconfont icon-fangdajing"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // tabsList: ["热映", "影院", "待映", "经典电影"],
      tabsList: [
        {
          title: '热映',
          url: '/hot'
        },
        {
          title: '影院',
          url: '/cinema'
        },
        {
          title: '待映',
          url: '/wait'
        },
        {
          title: '经典电影',
          url: '/classics'
        }
      ],
      activeIndex: 0
    };
  },
  computed: {
    city() {
      return this.$store.state.city.name
    }
  },
  methods: {
    tabsChange(i, url) {
      this.activeIndex = i;
      this.$router.push(url)
    },
    toCities() {
      this.$router.push('/cities');
    }
  }
};
</script>



<style lang='scss' scoped>
@import "../../assets/style/var.scss";
.my-tabs {
  position: fixed;
  width: 100%;
  top: 50px;
  height: 44px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  background: #fff;

  address {
    color: #666;
  }

  ul {
    display: flex;
    align-items: center;
    color: #666;
    height: 100%;

    li {
      padding: 0 10px;
      height: 100%;
      line-height: 44px;
      position: relative;

      .underLine {
        position: absolute;
        width: 20px;
        height: 3px;
        border-radius: 1.5px;
        background: $theme-color;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .active {
      font-size: 18px;
      color: #000;
      font-weight: 900;
    }
  }

  .icon-fangdajing {
    font-size: 18px;
    color: $theme-color;
    font-weight: 900;
  }
}
</style>
