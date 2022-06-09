<template>
  <form method="get" action="/list" ref="frm">
    <fieldset id="loginF">
      <legend>로그인</legend>
      <!-- id -->
      <div>
        <label for="idLog" class="title">ID </label>
        <input type="text" ref="id" id="id" name="id"/>
      </div>

      <!-- password -->
      <div>
        <label for="pwLog" class="title">Password</label>
        <input type="password" ref="pw" id="pw" name="pw"/>
      </div>

      <!-- button -->
      <div>
        <label class="title"></label>
        <button class="loginBtn" ref="btnJoin" @click.prevent="enter">Enter</button>
        <button class="loginBtn" ref="btnCancel" @click.prevent="cancel">Cancel</button>
        <button class="loginBtn" ref="btnRegist" @click.prevent="regist" onclick="location.href='/join'">Regist</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "ToLogin",
  setup() {
    const id = ref(null);
    const pw = ref(null);
    const frm = ref(null)

    function enter() {
      if (id.value.value === "") {
        alert("ID를 입력해주세요");
        id.value.focus();
        return;
      }
      if (pw.value.value === "") {
        alert("비밀번호을 입력해주세요");
        pw.value.focus();
        return;
      }
     
      frm.value.submit();
    }
    function cancel() {
      id.value.value = ""
      pw.value.value = ""
    }

    return { frm, id, pw, enter, cancel };
  }
}
</script>

<style>
#loginF {
  width: 350px;
  height: auto;
  text-align: left;
  /* border: 1px solid black; */
  margin: 200px auto;
  padding: 15px;
}
legend{
  text-align: center;
  margin-bottom: 30px;
}
.title {
  display: inline-block;
  width: 105px;
  margin: 4px;
  text-align: left;
}
.loginBtn {
  margin: 3px 8px 0px 0px;
  width: 60px;
  background-color:transparent;
}
</style>