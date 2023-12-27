<template>
  <div class="box-div">
        <!-- 添加加载页面 -->
        <div v-if="isLoading" class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="card" v-else>
      <img v-if="fieldValue === '优秀学生助理奖'" src="../assets/images/优秀学生助理奖.png" alt="优秀学生助理奖图片">
      <img v-else-if="fieldValue === '体育标兵奖'" src="../assets/images/体育标兵奖.png" alt="体育标兵奖图片">
      <img v-else-if="fieldValue === '劳育标兵奖'" src="../assets/images/劳育标兵奖.png" alt="劳育标兵奖图片">
      <img v-else-if="fieldValue === '双创之星'" src="../assets/images/双创之星.png" alt="双创之星图片">
      <img v-else-if="fieldValue === '品牌之星'" src="../assets/images/品牌之星.png" alt="品牌之星图片">
      <img v-else-if="fieldValue === '学习优秀奖'" src="../assets/images/学习优秀奖.png" alt="学习优秀奖图片">
      <img v-else-if="fieldValue === '学习标兵奖'" src="../assets/images/学习标兵奖.png" alt="学习标兵奖图片">
      <img v-else-if="fieldValue === '学习进步奖'" src="../assets/images/学习进步奖.png" alt="学习进步奖图片">
      <img v-else-if="fieldValue === '德育标兵奖'" src="../assets/images/德育标兵奖.png" alt="德育标兵奖图片">
      <img v-else-if="fieldValue === '科研之星'" src="../assets/images/科研之星.png" alt="科研之星图片">
      <img v-else-if="fieldValue === '竞赛之星'" src="../assets/images/竞赛之星.png" alt="竞赛之星图片">
      <img v-else-if="fieldValue === '美育标兵奖'" src="../assets/images/美育标兵奖.png" alt="美育标兵奖图片">
      <img v-else-if="fieldValue === '阅读之星'" src="../assets/images/阅读之星.png" alt="阅读之星图片">
      <img v-else src="../assets/images/none.png" style="height: 400px;" alt="暂无数据图片">
      <div class="username-content">
        {{ username1 }}
      </div>
      <p class="content">姓名：
        <span class="font-span">
          {{ username }}
        </span>
      </p>
      <p class="content">专业：
        <span class="font-span">
          {{ userclass }}
        </span>
      </p>
      <p class="content">学号：
        <span class="font-span">
          {{ usernumber }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldValue: '',
      username1: '',
      username: '',
      userclass: '',
      usernumber: '',
      isLoading: true // 添加加载状态变量，默认为 true
    }
  },
  mounted () {
    // 设置加载状态为 true
    this.isLoading = true
    const queryParam = this.$route.query
    console.log(queryParam)
    // 获取 awardsname 和 stuid 的值
    const awardsname = queryParam.awardsname
    const stuid = queryParam.stuid
    sessionStorage.setItem('awardsname', awardsname)
    sessionStorage.setItem('stuid', stuid)
    this.getData()
    // .then(() => {
    //   this.isLoading = false // 数据获取完毕后设置加载状态为 false
    // })
    console.log('awardsname:', awardsname)
    console.log('stuid:', stuid)
  },
  methods: {
    async getData () {
      const awardsname = sessionStorage.getItem('awardsname')
      const stuid = sessionStorage.getItem('stuid')
      console.log('awardsname:', awardsname)
      console.log('stuid:', stuid)
      const { data: res } = await this.$http.get(`/api/getaward?awardsname=${awardsname}&stuid=${stuid}`)
      // console.log(res)
      if (res.code === 200) {
        this.username1 = res.data.stuname
        this.username = res.data.stuname
        this.userclass = res.data.stumajor
        this.usernumber = res.data.stuid
        this.fieldValue = res.data.awardsname
        setTimeout(() => {
          // 在两秒后将 isLoading 设置为 false
          this.isLoading = false
        }, 2000) // 2000 毫秒（2 秒）
        // this.isLoading = false
      } else {
        this.username1 = ''
        this.username = '暂无数据'
        this.userclass = '暂无数据'
        this.usernumber = '暂无数据'
        this.fieldValue = '暂无数据'
      }
    }
  }
}
</script>

<style>
/* @import '@/assets/css/style.css'; */
:root {
  --contentPadding: 0 32px;
  --baseFontSize: 20px;
  /* 设置基本字体大小 */
}

.box-div {
  background-image: url('../assets/images/background.png');
  /* 背景图片的路径 */
  background-size: cover;
  /* 将背景图片缩放以覆盖整个容器 */
  background-repeat: no-repeat;
  /* 禁止背景图片重复显示 */
  background-position: center center;
  /* 将背景图片居中对齐 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

body {
  margin: 0;
  font-family: 'Rajdhani', sans-serif;
  background: #3e5699;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: rgba(255, 255, 255, 0.1);
  /* background: rgba(0,0,0,0.3); */
  width: 80%;
  height: 90%;
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* display: flex; */
  align-items: center;
  flex-direction: column;
  /* 背景模糊 */
  backdrop-filter: blur(5px);
  /* 阴影 */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
  margin: 30px;
  padding: 15px;
  /* 增加内边距以增加卡片的大小 */
  position: relative;
  width: 90%;
  /* 使用百分比设置宽度，随着屏幕大小而变化 */
  max-width: 750px;
  /* 增加最大宽度以限制最大宽度 */
}

.card img {
  border-radius: 8px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.5);
  width: 100%;
  /* 图片宽度占满卡片宽度 */
  height: auto;
  /* 根据宽度等比例调整高度 */
  object-fit: cover;
}

.card .content {
  font-size: 1.2em;
  /* 使用em单位，相对于父元素的字体大小进行缩放 */
  margin: 8px 0;
  color: #fff;
  /* padding: var(--contentPadding); */
}

.card .font-span {
  color: #fff;
  font-weight: 300;
}

.card h2:before {
  /* ... */
}

.card h2 a {
  color: #545454;
  text-decoration: none;
}

.card h2 a::after {
  /* ... */
}

.username-content {
  position: absolute;
  top: 35.5%;
  left: 14.5%;
  font-weight: 700;
  font-size: 1.2em;
  font-family: 'kaiti';
  margin: 8px 0;
  padding: var(--contentPadding);
}

.card p {
  font-size: 0.875em;
  /* 使用em单位，相对于父元素的字体大小进行缩放 */
  font-weight: 600;
  margin: 8px 0 0;
  /* padding: var(--contentPadding); */
}

.loader{
    /* 相对定位 */
    position: relative;
    color: #fff;
    width: 96px;
    height: 68px;
}
.loader div{
    /* currentColor可以获取到父元素的color */
    background-color: currentColor;
}
/* loader下的第一个div（小球） */
.loader div:nth-child(1){
    width: 32px;
    height: 32px;
    /* 绝对定位 */
    position: absolute;
    bottom: 32%;
    left: 18%;
    border-radius: 50%;
    /* 设置变换基点的位置 */
    transform-origin: center bottom;
    /* 执行动画：动画名 时长 加速后减速 无限次播放 */
    animation: ball-jump 0.6s ease-in-out infinite;
}
/* loader下的非第一个div（其他三个div，楼梯） */
.loader div:not(:nth-child(1)){
    width: 32px;
    height: 5px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(60%);
    animation: ball-steps 1.8s linear infinite;
}
/* 接下来需要分别为每一节楼梯设置不同的动画延迟 */
.loader div:nth-child(2){
    animation-delay: 0s;
}
.loader div:nth-child(3){
    animation-delay: -0.6s;
}
.loader div:nth-child(4){
    animation-delay: -1.2s;
}

/* 定义动画 */
/* 小球弹跳动画 */
@keyframes ball-jump {
    0%{
        transform: scale(1,0.7);
    }
    20%{
        transform: scale(0.7,1.2);
    }
    40%{
        transform: scale(1,1);
    }
    50%{
        bottom: 150%;
        transform: scale(1,1);
    }
    80%,90%{
        transform: scale(0.7,1.2);
    }
    100%{
        transform: scale(1,0.7);
    }
}
/* 楼梯移动动画 */
@keyframes ball-steps {
    0%{
        top: 0;
        right: 0;
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}

@media (max-width: 768px) {

  /* 在屏幕宽度小于768px时，适配手机端布局 */
  .card {
    width: 95%;
    /* 适当调整宽度以适应小屏幕 */
  }

  .card .content {
    font-size: 0.875em;
    /* 适当调整字体大小以适应小屏幕 */
  }

  .username-content {
    top: 27.5%;
    /* 调整用户名位置 */
    left: 7%;
    /* 调整用户名位置 */
    font-size: 0.70em;
    /* 调整用户名字体大小 */
  }

  .card p {
    font-size: 0.75em;
    /* 适当调整字体大小以适应小屏幕 */
  }
}
</style>
