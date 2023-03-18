<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="resetIndex"><!--事件委派/事件代理-->
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId"
                 :class="{cur:currentIndex===index}">
              <h3 @mouseover="changeIndex(index)">
                <a href="">{{ c1.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{display:(currentIndex===index?'block':'none')}">
                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                        <a href="">{{ c3.categoryName }}</a>
                      </em>
                    </dd>

                  </dl>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";
//节流lodash
import {throttle} from 'lodash';

export default {
  name: 'TypeNav',
  computed: {
    ...mapState('typeNav', ['categoryList'])
  },
  methods: {
    ...mapActions('typeNav', ['getCategoryList']),
    // name() {
    //
    // }
    // changeIndex(index) {
    //   //鼠标正常移动时，hover时都会触发；但是当鼠标快速移动时，只有部分能够触发
    //   //因为浏览器解析和执行代码也需要时间，如果console.log这段代码换成业务代码，很容易造成卡顿现象。
    //   // 因此需要一些策略来解决这样的问题：防抖&节流。
    //   // 防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发只会执行一次 (加入确认机制)
    //   // 节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发 (加入cd机制)
    //   console.log("鼠标进入",index)
    //   this.currentIndex = index
    // },
    //上面用节流写法
    changeIndex: throttle(function (index) {
      console.log("鼠标进入", index)
      this.currentIndex = index
    }, 1000),
    resetIndex() {
      this.currentIndex = -1
    }
  },
  mounted() {
    //dispatch
    // this.categoryList=this.getCategoryList()
    // console.log(this.categoryList,"####")
    this.getCategoryList()
  },
  data() {
    return {
      currentIndex: -1
    }
  }
}
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

        }

        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}

</style>