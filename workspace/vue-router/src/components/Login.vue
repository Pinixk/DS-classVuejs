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
export default {
  name: "ToLogin",
  data() {
    return {
    };
  },
  methods: {
    join() {
      const frm = this.$refs.frm;
      const id = this.$refs.id;
      const pw = this.$refs.pw;

      if (id.value === "") {
        alert("ID를 확인해주세요");
        id.focus();
        return;
      }
     
      if (pw.value === "") {
        alert("비밀번호을 입력해주세요");
        pw.focus();
        return;
      }
      
      frm.submit();
    },
    cancel() {
      // this.$refs.frm.reset()
      // document.querySelector("#male").checked = true;

      const frm = this.$refs.frm;
      const gen = this.$refs.gen;
      // const hob = this.$refs.hob;

      frm.reset();
      gen[0].checked = true;
      // hob[1].checked = true;
    }
  },
};
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