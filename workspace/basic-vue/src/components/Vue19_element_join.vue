<template>
  <h1>form element join</h1>
  <form action="Vue20_memberList.vue">
    <fieldset>
      <legend>회원가입</legend>
      <div>
        <label for="id" class="title">ID </label>
        <input type="text" ref="id" id="id" />
      </div>
      <div>
        <label for="name" class="title">Name</label>
        <input type="text" ref="name" id="name" />
      </div>
      <div>
        <label for="pw" class="title">Password</label>
        <input type="password" ref="pw" id="pw" />
      </div>
      <div>
        <label for="repw" class="title">Re Password</label>
        <input type="password" ref="repw" id="repw" />
      </div>
      <div>
        <label for="" class="title">Hobby</label>
        <label :for="item" v-for="(item, idx) in hobLi" :key="idx">{{ item }}
          <input type="checkbox" name="hob" :id="item" :value="item" v-model="hob"/>
        </label>
      </div>
      <div>
        <label for="" class="title">Gender</label>
        <label :for="item" v-for="(item, idx) in genLi" :key="idx">{{ item }}
          <input type="radio" name="gen" :id="item" :value="item" v-model="gen"/>
        </label>
      </div>
      <div>
        <label for="" class="title">Mobile</label>
        <select name="mobile" id="mobile" v-model="mob">
          <option :value="item" v-for="(item, idx) in mobLi" :key="idx">
            {{ item }}
          </option>
        </select>
        - <input type="text" id="mobile1" size="1"/> -
        <input type="text" id="mobile2" size="1"/>
        <input type="hidden" name="mobile">
      </div>
      <div>
        <label class="title"></label>
        <button ref="btnJoin" @click="join">Join</button>
        <button @click="Cancel">Cancel</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      hob: ["농구"],
      hobLi: ["축구", "농구", "배구"],
      gen: "male",
      genLi: ["male", "female"],
      mob: "010",
      mobLi: ["010", "011", "019"],
    };
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
fieldset{width:350px; text-align: left; }
button{margin : 3px 5px 0px 0px}
</style>