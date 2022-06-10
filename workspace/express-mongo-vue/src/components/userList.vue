<template>
  <div>
    <form id="user-form">
      <fieldset>
        <legend>사용자 등록</legend>
        <div>
          <input id="username" type="text" placeholder="이름" ref="username" />
        </div>
        <div><input id="age" type="number" placeholder="나이" ref="age" /></div>
        <div>
          <input id="married" type="checkbox" ref="married" /><label
            for="married"
            >결혼 여부</label
          >
        </div>
        <button type="submit" @click.prevent="userList">등록</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const user_form = ref(null);
    const username = ref(null);
    const age = ref(null);
    const married = ref([]);

    async function userList() {
      if (!username) {
        return alert("이름을 입력하세요");
      }
      if (!age) {
        return alert("나이를 입력하세요");
      }
      try {
        await axios.post("/users", { name, age, married });
        getUser();
      } catch (err) {
        console.error(err);
      }

      user_form.value.submit();
    }
    return { user_form, username, age, married, userList };
  },
};
</script>

<style>
</style>