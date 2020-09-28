<template>
  <div>
    <!-- 热门城市 -->
    <div class="hotTop">
      热门城市
    </div>
    <div class="hotCities" v-if="list.length">
      <span v-for="(item, index) in list[0].cities" :key="index" @click="handleClick(item)">
        {{ item.name }}
      </span>
    </div>

    <van-index-bar :index-list="indexList">
      <!-- <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" /> -->
      <div v-for="(item, index) in list" :key="index">
        <template v-if="item.prefix !== 'hotCities'">
          <van-index-anchor :index="item.prefix | toUpperCase"/>
          <van-cell :title="it.name" v-for="(it, i) in item.cities" :key="i" @click="handleClick(it)"/>
        </template>
      </div>
      
    </van-index-bar>
  </div>
</template>

<script>
import { getCitiesList } from '../utils/api';

import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('cities')

export default {
  data() {
    return {
      // indexList: ['A', 'B'],
      // list: []
    };
  },
  computed: {
    ...mapState({
      list: state => state.citieslist
    }),
    indexList() {
      let arr = [];
      for (let i = 1; i < this.list.length; i++) {
        arr.push(this.list[i].prefix.toUpperCase())
      }
      return arr
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase()
    }
  },
  mounted() {
    // this.getList();
    // this.$store.dispatch('cities/getCities')
    this.getCities();
  },
  methods: {
    ...mapActions([
      'getCities'
    ]),
    async getList() {
      const res = await getCitiesList();
      console.log(res);
      this.list = res;
    },
    handleClick(it) {
      // console.log(it)
      // this.$emit('toParent', it)
      this.$store.commit('changeCity', it)
      this.$router.go(-1)
    }
  },
};
</script>
<style lang='scss' scoped>
.hotTop {
  z-index: 1;
  box-sizing: border-box;
  padding: 0 0.42667rem;
  color: #323233;
  font-weight: 500;
  font-size: 0.37333rem;
  line-height: 0.85333rem;
  background-color: transparent;
}

.hotCities {
  background: #fff;
  overflow: hidden;
}

.hotCities span {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
}
</style>
