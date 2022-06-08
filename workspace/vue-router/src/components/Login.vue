<template>
  <form method="get" action="/about" ref="frm">
    <fieldset>
      <legend>로그인</legend>
      <!-- id -->
      <div>
        <label for="idLog" class="title">ID </label>
        <input type="text" ref="id" id="id" />
      </div>

      <!-- password -->
      <div>
        <label for="pwLog" class="title">Password</label>
        <input type="password" ref="pw" id="pw" />
      </div>

      <!-- button -->
      <div>
        <label class="title"></label>
        <button ref="btnJoin" @click.prevent="join">Join</button>
        <button ref="btnCancel" @click.prevent="cancel">Cancel</button>
        <button ref="btnRegist" @click.prevent="regist" onclick="location.href='/join'">Regist</button>
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

    function join() {
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

    return { frm, id, pw, join, cancel };
  }
}
</script>

<style>
.title {
  display: inline-block;
  width: 105px;
  margin: 4px;
  text-align: left;
}
fieldset {
  width: 350px;
  text-align: left;
}
button {
  margin: 3px 5px 0px 0px;
}
</style>