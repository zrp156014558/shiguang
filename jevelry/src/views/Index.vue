<template>
  <div id="index">
    <!-- 轮播图 -->
    <el-carousel class="carousel" trigger="click" height="650px" style="width:100%">
      <el-carousel-item v-for="(image,i) of images" :key="i">
        <!-- 内部文字 -->
        <div class="imagetext">
          <p>在线选购&nbsp;&nbsp;&nbsp;&nbsp;时尚首饰</p>
          <p>更完美&nbsp;更庄严&nbsp;开启魅力之门</p>
          <el-button size="medium">即可享购</el-button>
        </div>
        <img style="width:100%;height:100%;" :src="image" />
      </el-carousel-item>
    </el-carousel>
    <div class="con">
      <!-- 五张分类图 -->
      <div class="fiveimage">
        <el-row :gutter="16">
          <div v-for="(item,i) of fiveimage" :key="i">
            <router-link :to="`/productList/${item.aid}/${item.fname}`">
              <el-col :span="4">
                <img :src="item.image" alt />
                <p>{{item.fname}}</p>
              </el-col>
            </router-link>
          </div>
        </el-row>
      </div>
      <!-- 分割线 -->
      <div class="not_decide"></div>
      <!-- 四张图片部分 -->
      <div class="fourimage">
        <el-row :gutter="16">
          <div v-for="(item,i) of fourimage" :key="i">
            <router-link :to="`/productList/${item.aid}/${item.fname}`">
              <el-col :span="6">
                <img :src="item.image" alt />
              </el-col>
            </router-link>
          </div>
        </el-row>
      </div>

      <!-- 三张大图片部分 -->
      <div class="threeimage">
        <el-row :gutter="16">
          <div v-for="(item,i) of bthreeimage" :key="i">
            <router-link :to="`/productList/${item.aid}/${item.fname}`">
              <el-col :span="8">
                <img :src="item.image" alt />
                <div class="pp">
                  <p style="color:#a3a3a3;margin: 25px 0 10px">{{item.fname}}</p>
                  <p style="color:#ddba93;">{{item.title}}</p>
                </div>
              </el-col>
            </router-link>
          </div>
        </el-row>
      </div>

      <!-- 三张小图片部分 -->
      <div class="three1image">
        <el-row :gutter="16">
          <div v-for="(item,i) of sthreeimage" :key="i">
            <router-link
              :to="`/productDetail/${item.jewelry_id}/${item.aid}/${item.fname}/${item.subtitle}`"
            >
              <el-col :span="8">
                <img :src="item.image" alt />
                <p style="color:#a3a3a3;margin: 25px 0 10px">{{item.wname}}</p>
                <p style="color:#ddba93;">{{item.title}}</p>
              </el-col>
            </router-link>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      images: [],
      fiveimage: [],
      fourimage: [],
      bthreeimage: [],
      sthreeimage: [],
    }
  },
  methods: {
    load() {
      this.axios.get( "/").then(res => {
        // console.log(res);
        
        //获取服务器返回的图片数据
        var fiveimage = res.data.fiveimage;
        fiveimage.forEach(element => {
          //因为有的文章不存在缩略图，所以无需动态加载
          if (element.image != null) {
            element.image = require("../assets/index/five/" + element.image);
          }
          this.fiveimage.push(element);
        });

        var fourimage = res.data.fourimage;
        fourimage.forEach(element => {
          if (element.image != null) {
            element.image = require("../assets/index/four/" + element.image);
          }
          this.fourimage.push(element);
        });

        var bthreeimage = res.data.bthreeimage;
        bthreeimage.forEach(element => {
          if (element.image != null) {
            element.image = require("../assets/index/three/" + element.image);
          }
          this.bthreeimage.push(element);
        });

        var sthreeimage = res.data.sthreeimage;
        sthreeimage.forEach(element => {
          if (element.image != null) {
            element.image = require("../assets/index/three2/" + element.image);
          }
          this.sthreeimage.push(element);
        });
      });
    }
  },
  created() {
    this.load();
  },
  //挂载完成后需要加载的图片
  mounted() {
    // 加载轮播图
    for (var i = 1; i <= 3; i++) {
      var imagename = "lunbo" + i + ".png";
      this.images.push(require("../assets/index/lunbo/" + imagename));
    }
  }
}
</script>
<style>
  /* --轮播图文字部分-- */
#index .carousel {
  width: 100% !important;
}
#index .carousel img {
  position: relative;
  z-index: 10;
}
#index .carousel .imagetext {
  width: 30%;
  height: 20%;
  /* border: 1px solid; */
  position: absolute;
  z-index: 11;
  top: 150px;
  left: 200px;
}
#index .carousel .imagetext p:first-child {
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
}
#index .carousel .imagetext p:nth-child(2) {
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 1.3rem;
  color: #fff;
}
/* 轮播指示器 */
#index .el-carousel__indicator .el-carousel__button {
  border-radius: 50%;
  width: 10px;
  margin-left: 5px;
  height: 10px;
}
/* --五张图片部分-- */
#index .fiveimage {
  margin-top: 70px;
}
#index .fiveimage .el-col {
  width: 16%;
  height: 100%;
  text-align: center;
  margin: 0 20px;
  /* border: 1px solid; */
  background-color: #202020;
  padding-top: 35px;
  padding-bottom: 15px;
}

#index .fiveimage p {
  margin-top: 60px;
  color: #909399;
}

/* --分割线-- */
#index .not_decide {
  width: 100%;
  height: 120px;
}

/* --四张图片部分-- */
#index .fourimage {
  margin-top: 20px;
}
#index .fourimage .el-col {
  width: 25%;
  height: 100%;
  text-align: center;
}
#index .fourimage img {
  width: 350px;
}
/* --三张大图片部分-- */
#index .threeimage .el-col {
  position: relative;
}
#index .threeimage .el-col img {
  width: 100%;
  height: 250px;
}
#index .threeimage {
  margin-top: 100px;
}
#index .threeimage .pp {
  position: absolute;
  z-index: 1;
  top: 150px;
  left: 30px;
}
#index .threeimage .p1 {
  color: #eee;
  font-size: 18px;
  margin-bottom: 25px;
}
#index .threeimage .p2 {
  color: #999;
  font-size: 14px;
}
/* --三张小图片部分-- */
#index .three1image {
  margin-top: 20px;
}
#index .three1image .el-col {
  text-align: center;
}
#index .three1image .el-col img {
  width: 100%;
}
</style>