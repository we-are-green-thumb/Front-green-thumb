<!-- 삭제 예정 !!!!!!!!!!!!!!!!!!!!!!!!!21년 12월 19일-->

<template>
  <!-- <div class="place">
    <div class="profileform">
      <ul>
        <li>
          <span><p>{{ User.nickName }}의 식물들!</p></span>
          <a class="followercheck" href="#">팔로우 추가</a>
        </li>
        <li>
          <span><p>{{ User.profile }}</p></span>
        </li>
        <li>
          <span><a href="#">팔로우: {{ User.followeeCount }}</a></span>
        </li>
        <li>
          <span><a href="#">팔로워: {{ User.followerCount }}</a></span>
        </li>
      </ul>
    </div> -->
          <!-- 식물 등록 모달 -->
    <!-- <ul class="myplantcontainer">
      <li class="myplantform">
        <div id="modalp">
          <h1>식물 등록 컴포넌트</h1>
          <modalPlantRegister
            v-if="isModalViewed"
            @close-modal="isModalViewed = false"
          >
            <contentPlantRegister msg="Hello Vue in CodeSandbox!" />
          </modalPlantRegister>
          <button @click="isModalViewed = true">식물 등록</button>
        </div>
      </li> -->
      <!-- 내 식물 리스트 --->
      <!-- <div v-for="(u, i) in myplant" :key="i">
        <router-link
          :to="{
            name: 'Detailmyplant',
            params: { userId: u.userId, plantId: u.plantId },
          }"
        >
          <li class="myplantform">
            <div>
              <img class="imgSize" :src="u.imageUrl" />
            </div>
            <div class="plantcontent">
              <h3>{{ u.nickName }}</h3>
              <a> {{ u.water }}일 뒤 물을 주세요! </a><br />
              <a> 온도는 {{ u.temp }}도가 딱이에요! </a><br />
            </div>
          </li>
        </router-link>
      </div>
    </ul>
  </div>
</template> -->

<script>
import modalPlantRegister from "../../components/Modal/modalPlantRegister.vue";
import contentPlantRegister from "../../components/Modal/contentPlantRegister.vue";
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  data() {
    return {
      myplant: [],
      User: [],
      isModalViewed: false,
    };
  },
  components: {
    modalPlantRegister,
    contentPlantRegister,
  },
  computed: {
    ...mapState(["myplant"]),
    ...mapState(["userInfo"]),
  },
  created() {  
    let id = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    http
      .get("user/" + id + "/plants", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.myplant = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});

    http
      .get("user/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.User = response.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
};
</script>
<!-- <style scoped>
.myplantcontainer {
  display: grid;
  grid-template-columns: 450px 450px;
}

ul {
  margin: 0;
  padding: 0 0 0 10px;
}

.myplantform {
  background-color: lightgrey;
  text-align: center;
  border-radius: 15px;
  margin: 0 10px 10px 5px;
}
.imgSize {
  width: 160px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
}

.plantcontent {
  float: center;
  width: 60%;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 16px 0 10px;
}

.myplantBtn {
  all: unset;
  cursor: pointer;
}
#modalp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.profileform {
  display: grid;
  margin: 0 10px 10px 5px;
}

.followercheck {
  float: right;
}

a {
  text-decoration: none;
  color: black;
}
</style> -->