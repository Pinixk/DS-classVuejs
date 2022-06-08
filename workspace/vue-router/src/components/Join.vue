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
            ref="hob"
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
            ref="gen"
            v-model="gen"
          />
        </label>
      </div>

      <!-- mobile -->
      <div>
        <label for="" class="title">Mobile</label>
        <select name="mobile" v-model="mob">
          <option
            :value="item"
            v-for="(item, idx) in mobLi"
            :key="idx"
            ref="mob1"
          >
            {{ item }}
          </option>
        </select>
        - <input type="text" ref="mob2" size="1" /> -
        <input type="text" ref="mob3" size="1" />
        <input type="hidden" name="mobile" ref="mob" />
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
export default {
  name: "ToLogin",
  data() {
    return {
      hob: [""],
      hobLi: ["축구", "농구", "배구"],
      gen: "male",
      genLi: ["male", "female"],
      mob: "010",
      mobLi: ["010", "011", "016"],
      sel: "sel",
      notSel: "",
    };
  },
  methods: {
    join() {
      const frm = this.$refs.frm;
      const id = this.$refs.id;
      const name = this.$refs.name;
      const pw = this.$refs.pw;
      const repw = this.$refs.repw;
      const mob2 = this.$refs.mob2;
      const mob3 = this.$refs.mob3;
      const gen = this.$refs.gen;
      // const hob = this.$refs.hob;

      if (id.value === "") {
        alert("ID를 입력해주세요");
        id.focus();
        return;
      }
      if (name.value === "") {
        alert("이름을 입력해주세요");
        name.focus();
        return;
      }
      if (pw.value === "") {
        alert("비밀번호을 입력해주세요");
        pw.focus();
        return;
      }
      if (repw.value !== pw.value) {
        alert("비밀번호와 다릅니다.");
        repw.focus();
        return;
      }
      // if (
      //   hob[0].checked == false &&
      //   hob[1].checked == false &&
      //   hob[2].checked == false
      // ) {
      //   alert("취미를 입력해주세요");
      //   return;
      // }
      if (gen[0].checked === false && gen[1].checked === false) {
        alert("성별을 입력해주세요");
        return;
      }
      if (mob2.value === "") {
        alert("전화번호을 입력해주세요");
        mob2.focus();
        return;
      }
      if (mob3.value === "") {
        alert("전화번호을 입력해주세요");
        mob3.focus();
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
    },
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