export default function ({ store, redirect }) {//vuex store
  if (!store.state.users.me) {//로그인 x
    redirect('/');
  }
}
