<template>
  <div class="list">
    <div class="aboutCon">
      <div class="listH">
        <h1>회원 정보</h1>
      </div>
      <table>
        <thead>
          <th v-for="(item, idx) in listT" :key="idx">{{ item }}</th>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in users" :key="idx">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.number }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import userList from "../assets/data/user.json";

export default {
  name: "ToList",
  setup() {
    const listT = ["ID", "이름", "성별", "전화번호"];
    return {  listT};
  },
  computed: {
    users() { 
      return userList.users.map((items) => { 
      return items;
      })
    },
  }
}
</script>

<style>
.list {
  width: 100%;
  height: 100%;
  display: flex;
}
.aboutCon {
  margin: auto;
}
.listH {
  margin: 150px 0px 30px;
}
td,
th {
  border-bottom: 1px solid black;
  padding: 20px;
}
</style>