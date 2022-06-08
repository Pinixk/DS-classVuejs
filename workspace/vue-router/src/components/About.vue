<template>
  <div class="aboutCon" style="display: grid; grid-template-rows: auto auto">
    <div class="header">
      <h1>회원 정보</h1>
    </div>
    <div>
    <table>
      <thead>
        <th>순번</th>
        <th>이름</th>
        <th>ID</th>
        <th>전화번호</th>
        <th>E-mail</th>
      </thead>
      <tbody>
        <tr>
          <td>첫번째</td>
          <td>철수</td>
          <td>ch_123</td>
          <td>010-1241-3325</td>
          <td>ch_123@gmail.com</td>
        </tr>
        <tr>
          <td>두번째</td>
          <td>짱구</td>
          <td>zzang9</td>
          <td>010-9998-8976</td>
          <td>zzang9@hanmail.com</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>세번째</td>
          <td>훈이</td>
          <td>ugly</td>
          <td>010-1547-7651</td>
          <td>ugly@naver.com</td>
        </tr>
      </tfoot>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToAbout",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.aboutCon {
  position: relative;
  margin : 50px 0;
}
table {
  position: absolute;
  width: 500px;
  height: 200px;
  text-align: left;
  border: 1px solid black;
  left: 35%; top: 200%;
  padding: 15px;
}
td,
th,
tr {
  border: 1px solid black;
  padding: 10px;
}
</style>