<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    async function getUser() {
      try {
        const res = await axios.get("/users");
        const users = res.data;
        console.log(users);
        const tbody = document.querySelector("#user-list tbody");
        tbody.innerHTML = "";
        users.map(function (user) {
          const row = document.createElement("tr");
          row.addEventListener("click", () => {
            getComment(user._id);
          });
          // 로우 셀 추가
          let td = document.createElement("td");
          td.textContent = user._id;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = user.name;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = user.age;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = user.married ? "기혼" : "미혼";
          row.appendChild(td);
          tbody.appendChild(row);
        });
      } catch (err) {
        console.error(err);
      }
    }
    async function getComment(id) {
      try {
        const res = await axios.get(`/users/${id}/comments`); // axios 비정기적인 정보를 담아옴
        const comments = res.data;
        const tbody = document.querySelector("#comment-list tbody");
        tbody.innerHTML = "";
        comments.map(function (comment) {
          // 로우 셀 추가
          const row = document.createElement("tr");
          let td = document.createElement("td");
          td.textContent = comment._id;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = comment.commenter.name;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = comment.comment;
          row.appendChild(td);
          // 버튼 정의
          const edit = document.createElement("button");
          edit.textContent = "수정";
          edit.addEventListener("click", async () => {
            // 수정 클릭 시
            const newComment = prompt("바꿀 내용을 입력하세요");
            if (!newComment) {
              return alert("내용을 반드시 입력하셔야 합니다");
            }
            try {
              await axios.patch(`/comments/${comment._id}`, {
                comment: newComment,
              });
              getComment(id);
            } catch (err) {
              console.error(err);
            }
          });
          const remove = document.createElement("button");
          remove.textContent = "삭제";
          remove.addEventListener("click", async () => {
            // 삭제 클릭 시
            try {
              await axios.delete(`/comments/${comment._id}`);
              getComment(id);
            } catch (err) {
              console.error(err);
            }
          });
          // 버튼 추가
          td = document.createElement("td");
          td.appendChild(edit);
          row.appendChild(td);
          td = document.createElement("td");
          td.appendChild(remove);
          row.appendChild(td);
          tbody.appendChild(row);
        });
      } catch (err) {
        console.error(err);
      }
    }

    return { getUser, getComment };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
