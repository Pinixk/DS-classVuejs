<template>
  <div>
    <form id="comment-form">
      <fieldset>
        <legend>댓글 등록</legend>
        <div><input id="userid" type="text" placeholder="사용자 아이디" /></div>
        <div><input id="comment" type="text" placeholder="댓글" /></div>
        <button type="submit">등록</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
   const userid = ref(null)
   cosnt comment = ref(null)

    document
      .getElementById("comment-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = e.target.userid.value;
        const comment = e.target.comment.value;
        if (!id) {
          return alert("아이디를 입력하세요");
        }
        if (!comment) {
          return alert("댓글을 입력하세요");
        }
        try {
          await axios.post("/comments", { id, comment });
          getComment(id);
        } catch (err) {
          console.error(err);
        }
        e.target.userid.value = "";
        e.target.comment.value = "";
      });
  },
};
</script>

<style>
</style>