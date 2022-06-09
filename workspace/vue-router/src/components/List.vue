<template>
  <div style="width:100%; height:100%; display:flex;">
    <div class="aboutCon" style="margin:auto;">
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
                        <td>010-1234-1234</td>
                        <td>ch_123@gmail.com</td>
                    </tr>
                    <tr>
                        <td>두번째</td>
                        <td>짱구</td>
                        <td>zzang9</td>
                        <td>010-0101-0101</td>
                        <td>zzang9@hanmail.com</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>세번째</td>
                        <td>훈이</td>
                        <td>ugly</td>
                        <td>010-0000-0000</td>
                        <td>ugly24@naver.com</td>
                    </tr>
                    <tr>
                        <td>네번째</td>
                        <td>유리</td>
                        <td>glass</td>
                        <td>010-xxxx-xxxx</td>
                        <td>glass_55@naver.com</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "ToAbout",
};
</script>

<style>
.header{
    margin: 150px 0px 30px;
}
td,th {
  border-bottom: 1px solid black;
  padding: 15px;
}
</style>