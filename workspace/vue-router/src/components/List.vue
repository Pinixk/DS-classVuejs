<template>
  <div style="width:100%; height:100%; display:flex;">
    <div class="aboutCon" style="margin:auto;">
        <div class="header">
            <h1>회원 정보</h1>
        </div>
        <div>
            <div v-for="(item,idx) in header" :key="idx">{{item}}</div>
            <table>
                <thead>
                    <th v-for="(item,idx) in header" :key="idx">{{item}}</th>
                </thead>
                <tbody>
                    <tr>
                      

                    </tr>
                </tbody>
         
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "ToAbout",
  set(){
    const header = ['순번','이름','ID','전화번호','E-mail'];
    const menber = [
        ['1st','2nd','3rd','4th'],
        ['짱구','철수','훈이','유리'],
        ['Zzang9','stealWater','ugly2','glassy'],
        ['010-0000-0000','010-1111-1111','010-0101-1010','010-xxxx-xxxx'],
        ['Zzang9@gmail.com', 'stealWater@naver.com', 'ugly2@nate.com', 'glassy@hanmail.net'],
    ];


    return {header, menber}
  }
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