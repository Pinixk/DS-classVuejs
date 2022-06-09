<template>
  <form method="get" action="/login" ref="frm">
    <fieldset>
      <legend>회원가입</legend>
      <!-- id -->
      <div>
        <label for="id" class="title">ID </label>
        <input type="text" ref="joinId" id="joinId" name="joinId"/>
      </div>

      <!-- name -->
      <div>
        <label for="name" class="title">Name</label>
        <input type="text" ref="name" id="name" name="name"/>
      </div>

      <!-- password -->
      <div>
        <label for="pw" class="title">Password</label>
        <input type="password" ref="joinPw" id="joinPw" name="joinPw"/>
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
        <select ref="mob">
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
        <button class="joinBtn" ref="btnJoin" @click.prevent="join">Join</button>
        <button class="joinBtn" ref="btnCancel" @click.prevent="cancel">Cancel</button>
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
    const gen = ref('male');
    const gender = ref([]);
    const genLi = ["male", "female"];
    const mobLi = ["010", "011", "016"];
    const frm = ref(null);
    const joinId = ref(null);
    const name = ref(null);
    const joinPw = ref(null);
    const repw = ref(null);
    const mob = ref("");
    const mob2 = ref(null);
    const mob3 = ref(null);
    const mobile = ref(null);
    const hobby = ref("")

    function join() {
      if (joinId.value.value === "") {
        alert("ID를 입력해주세요");
        joinId.value.focus();
        return;
      }
      if (name.value.value === "") {
        alert("이름을 입력해주세요");
        name.value.focus();
        return;
      }
      if (joinPw.value.value === "") {
        alert("비밀번호을 입력해주세요");
        joinPw.value.focus();
        return;
      }
      if (repw.value.value !== joinPw.value.value) {
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
        alert("앞번호를 선택해주세요");
        mob.value.focus();
        return;
      }
      if (mob2.value.value === "") {
        alert("중간 번호을 입력해주세요");
        mob2.value.focus();
        return;
      }
      if (mob3.value.value === "") {
        alert("끝 번호를 입력해주세요");
        mob3.value.focus();
        return;
      }
      mobile.value.value = `${mob.value.value}-${mob2.value.value}-${mob3.value.value}`

      frm.value.submit();
    }
    function cancel() {
      frm.value.reset()

      gender.value[0].checked = true;
      hobby.value[1].checked = true;
    }

    return { hob, hobLi, hobby, gen, genLi, gender, mobLi, joinId, name, joinPw, repw, mob, mob2, mob3, mobile, join, cancel, frm };
  },
};
</script>

<style>
Form{
  width:100%; height:100%; display:flex;
}
fieldset {
  width: 350px;
  height: auto;
  text-align: left;
  border: 1px solid black;
  margin: 80px auto;
  padding: 15px;
}
.joinBtn {
  margin: 3px 8px 0px 0px;
  width: 57px;
}
.title {
  display: inline-block;
  width: 105px;
  margin: 4px;
  text-align: left;
}
</style>