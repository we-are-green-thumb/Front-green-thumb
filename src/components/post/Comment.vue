<template>
    <div>
        <h2> 댓글  {{comments.length}}</h2> 

        <v-btn style="float:right"><router-link :to="{name: 'WriteComment' }" style="text-decoration:none; color: hsl(94, 10%, 46%);">댓글 등록 </router-link></v-btn>
        <br><br>
        <ul>
            <li v-for="comment in comments" :key="comment"> 
               {{comment.id}} "Places to Be", "Places to See" mdi-facebook cyan darken-1<!-- 내용 -->
                {{comment.year}}<!-- 작성일 -->
                {{comment.color}}<!-- 작성자 -->
                <v-btn>하트</v-btn>
                {{comment.year}}<!-- 좋아요 수-->
            </li>
        </ul>
    </div>
</template>
<script>
import http from "@/util/http-common";

export default {
    data() {
        return {
         comments : [],
        }
    },
    created() {
        http
      .get("https://reqres.in/api/unknown") //댓글을 불러옴.
      .then((res) => {
        this.comments = res.data.data;
        console.log(this.comments);

      })
      .catch((err) => {
        console.log(err);
      });
    },
}
</script>
<style>
    
</style>