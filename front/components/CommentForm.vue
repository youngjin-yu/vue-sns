<template>
  <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
    <v-textarea
      v-model="content"
      filled
      auto-grow
      label="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
    />
    <v-btn color="green" dark absolute top right type="submit">작성</v-btn>
  </v-form>
</template>

<script>
  export default {
    props: {
      postId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        valid: false,
        content: '',
        success: false,
        successMessages: '',
        hideDetails: true,
      };
    },
    computed: {
      me() {
        return this.$store.state.users.me;
      },
    },
    methods: {
      onChangeTextarea(value) {
        if (value.length) {//content 있는 경우
          this.hideDetails = true;
          this.success = false;
          this.successMessages = '';
        }
      },
      onSubmitForm() {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('posts/addComment', {
            id: Date.now(),//댓글 id
            postId: this.postId,
            content: this.content,
            User: {
              nickname: this.me.nickname,
            },
          })
            .then(() => {
              this.content = '';
              this.success = true;
              this.successMessages = '댓글 작성 완료';
              this.hideDetails = false;
            })
            .catch(() => {

            });
        }
      },
    },
  };
</script>

<style>

</style>
