<template>
  <table id="user-list">
    <thead>
      <tr>
        <th>아이디</th>
        <th>이름</th>
        <th>나이</th>
        <th>결혼여부</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in users" :key="idx">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.married }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style>
</style>