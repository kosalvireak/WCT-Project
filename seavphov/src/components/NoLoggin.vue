<template>
  <div
    style="height: 35rem; width: 30rem"
    class="NoLoggin d-flex align-items-center justify-content-center flex-column"
  >
    <div
      class="bg-white p-5 rounded-7 d-flex align-items-center justify-content-center flex-column"
    >
      <img
        src="https://media.istockphoto.com/id/953476400/vector/no-trespass-sign-trespassing-prohibited-symbol-stop-pictogram.jpg?s=612x612&w=0&k=20&c=lZjAidmWlFL3WQNCBT-s_OchpumzoSUd7nsfnm-3ikU="
        alt=""
        srcset=""
        style="width: 150px; height: 150px"
      />

      <h4 class="mt-4">Please login to see this page.</h4>
      <br />
      <a
        @click="
          () => {
            this.$router.push('/login');
          }
        "
        class="text-gray"
      >
        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        Login
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoLoggin",
};
</script>

<style>
</style>