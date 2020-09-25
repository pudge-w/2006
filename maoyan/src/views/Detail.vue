<template>
  <div class="detail-wrap">
    <!-- <div v-if="loading">加载中...</div> -->
    <main>
      <header class="title">
        猫眼电影 > {{ movieInfo.nm }}
      </header>
      <section class="info">
        <img :src="movieInfo.img" alt="" class="poster">
        <article>
          <p>{{ movieInfo.nm }}</p>
          <p>{{ movieInfo.enm }}</p>
          <p>
            <span v-for="(item, index) in movieInfo.tags" :key="index">{{ item }}{{ index=== movieInfo.tags.length - 1 ? '' : '/' }}</span>
          </p>
          <p class="star">
            <span v-for="(item, index) in movieInfo.star" :key="index">{{ item }}{{ index=== movieInfo.star.length - 1 ? '' : '/' }}</span>
          </p>
          <p>{{ movieInfo.showTime }}</p>
          <div style="display: flex">
            <button>111</button>
            <button>222</button>
          </div>
        </article>
      </section>

      <section class="praise">
        <div class="top">
          <span>{{ praise.watched }}人看过</span>
          <span>{{ praise.wish }}人想看</span>
        </div>
        <div>{{ praise.score }}</div>
        <div>{{ praise.evaluate }}评价过</div>
        <detail-score 
          v-for="(item, index) in praise.mark" 
          :key="index" 
          :item="item"
          :pic="praise.starPic"
          :evaluate="praise.evaluate"
          :num="5 - index"
        />
      </section>
    </main>
  </div>
</template>

<script>
import { getMovieInfo } from '../utils/api';
import DetailScore from '../components/detail/Score'
export default {
  // beforeRouteUpdate(to, from, next) {
  //   // 需要重新请求数据
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log(this)
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log(this)
  //   next()
  // },
  beforeRouteEnter (to, from, next) {
    getMovieInfo({id: to.params.id}).then(res => {
      next(vm => vm.setData(res))
    })
  },
  data() {
    return {
      // loading: true,
      movieInfo: {},
      praise: {},
      discuss: []
    }
  },
  components: {
    DetailScore
  },
  mounted() {
    // console.log('执行了mounted')
    // this.getMovieInfo1()
  },
  methods: {
    setData(res) {
      this.movieInfo = res.movieInfo
      this.praise = res.praise
      this.discuss = res.discuss
    }
    // async getMovieInfo1() {
    //   this.loading = true
    //   const res = await getMovieInfo({
    //     id: this.$route.params.id
    //   })
    //   // console.log(res)
    //   if (res.status === 0) {
    //     this.loading = false
    //     this.movieInfo = res.movieInfo
    //     this.praise = res.praise
    //     this.discuss = res.discuss
    //   }
    // }
  }
}
</script>

<style lang="scss">
  .detail-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #385266;
    z-index: 999;

    main {
      padding: 21px 16px;

      header {
        color: #ccc;
        font-size: 14px;
        margin-bottom: 15px;
      }

      .info {
        width: 100%;
        height: 138px;
        display: flex;

        .poster {
          width: 100px;
          height: 138px;
        }

        article {
          font-size: 14px;
          width: 243px;

          .star {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: hsla(0,0%,100%,.35);
            box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,.1);
            border-radius: .08rem;
            font-size: .28rem;
            width: 47.61904762%;
            height: .6rem;
            color: #fff;
            border: none;
          }
        }
      }

      .praise {
        width: 100%;
        height: 176px;
        margin-top: 15px;
        padding: 10px 12px;
        background-color: rgba(0,0,0,.2);
        box-shadow: 0 0 0.06rem 0 hsla(0,0%,100%,.03);
        border-radius: 6px;
        font-size: 14px;
        color: #fff;

        .top {
          display: flex;
          justify-content: flex-end;
          span {
            margin: 0 10px;
            
          }
        }
      }
    }
  }
</style>