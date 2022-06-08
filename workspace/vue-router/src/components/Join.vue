<template>


  <form method="get" action="/login" ref="frm">
    <fieldset>
      <legend>회원가입</legend>
      <!-- id -->
      <div>
        <label for="id" class="title">ID </label>
        <input type="text" ref="id" id="id" />
      </div>

      <!-- name -->
      <div>
        <label for="name" class="title">Name</label>
        <input type="text" ref="name" id="name" />
      </div>

      <!-- password -->
      <div>
        <label for="pw" class="title">Password</label>
        <input type="password" ref="pw" id="pw" />
      </div>

      <!-- re password -->
      <div>
        <label for="repw" class="title">Re Password</label>
        <input type="password" ref="repw" id="repw" />
      </div>

      <!-- hobby -->
      <div>
        <label for="" class="title">Hobby</label>
        <label :for="item" v-for="(item, idx) in hobLi" :key="idx"
          >{{ item }}
          <input
            type="checkbox"
            name="hob"
            :id="item"
            :value="item"
            ref="hobby"
            v-model="hob"
          />
        </label>
      </div>

      <!-- gender -->
      <div>
        <label for="" class="title">Gender</label>
        <label :for="item" v-for="(item, idx) in genLi" :key="idx"
          >{{ item }}
          <input
            type="radio"
            name="gen"
            :id="item"
            :value="item"
            ref="gender"
            v-model="gen"
          />
        </label>
      </div>

      <!-- mobile -->
      <div>
        <label for="" class="title">Mobile</label>
        <select name="mob" ref="mob">
          <option value="">선택</option>
          <option :value="item" v-for="(item, idx) in mobLi" :key="idx">
            {{ item }}
          </option>
        </select>
        - <input type="text" ref="mob2" size="1" /> -
        <input type="text" ref="mob3" size="1" />
        <input type="hidden" name="mobile" ref="mobile" />
      </div>

      <!-- button -->
      <div>
        <label class="title"></label>
        <button ref="btnJoin" @click.prevent="join">Join</button>
        <button ref="btnCancel" @click.prevent="cancel">Cancel</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "ToLogin",
  setup() {
    const hob = ref(['']);
    const hobLi = ["축구", "농구", "배구"];
    const gen = ref('');
    const gender = ref([]);
    const genLi = ["male", "female"];
    const mobLi = ["010", "011", "016"];
    const frm = ref(null);
    const id = ref(null);
    const name = ref(null);
    const pw = ref(null);
    const repw = ref(null);
    const mob = ref("");
    const mob2 = ref(null);
    const mob3 = ref(null);
    const hobby = ref("")

    function join() {
      if (id.value.value === "") {
        alert("ID를 입력해주세요");
        id.value.focus();
        return;
      }
      if (name.value.value === "") {
        alert("이름을 입력해주세요");
        name.value.focus();
        return;
      }
      if (pw.value.value === "") {
        alert("비밀번호을 입력해주세요");
        pw.value.focus();
        return;
      }
      if (repw.value.value !== pw.value.value) {
        alert("비밀번호와 다릅니다.");
        repw.value.focus();
        return;
      }
      if (
        hobby.value[0].checked == false &&
        hobby.value[1].checked == false &&
        hobby.value[2].checked == false
      ) {
        alert("취미를 입력해주세요");
        return;
      }
      if (gender.value[0].checked === false && gender.value[1].checked === false) {
        alert("성별을 입력해주세요");
        return;
      }
      if (mob.value.value == "") {
        alert("전화번호 앞번호를 입력해주세요");
        mob.value.focus();
        return;
      }
      if (mob2.value.value === "") {
        alert("전화번호을 입력해주세요");
        mob2.value.focus();
        return;
      }
      if (mob3.value.value === "") {
        alert("전화번호을 입력해주세요");
        mob3.value.focus();
        return;
      }

      frm.value.submit();
    }
    function cancel() {
      frm.value.reset()

      gender.value[0].checked = true;
      hobby.value[1].checked = true;
    }

    return { hob, hobLi, hobby, gen, genLi, gender, mobLi, id, name, pw, repw, mob, mob2, mob3, join, cancel, frm };
  },
};
</script>

<style>
template {
  position: relative;
}
.title {
  display: inline-block;
  width: 105px;
  margin: 4px;
  text-align: left;
}
fieldset {
  position: absolute;
  width: 350px;
  height: auto;
  text-align: left;
  border: 1px solid black;
  margin: 10vw 30vw;
  padding: 15px;
}
button {
  margin: 3px 5px 0px 0px;
}
</style>