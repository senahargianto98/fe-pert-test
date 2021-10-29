<template>
  <div>
    <body class="app app-login p-0">
      <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-auth-body mx-auto">
              <div class="app-auth-branding mb-4">
                <a class="app-logo" href="index.html"
                  ><img
                    class="logo-icon me-2"
                    src="@/assets/images/app-logo.svg"
                    alt="logo"
                /></a>
              </div>
              <h2 class="auth-heading text-center mb-5">Log in to Portal</h2>
              <div class="auth-form-container text-start">
                <div class="auth-form login-form">
                  <div class="email mb-3">
                    <label class="sr-only" for="signin-email">Email</label>
                    <input
                      id="signin-email"
                      name="signin-email"
                      v-model="username"
                      class="form-control signin-email"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <!--//form-group-->
                  <div class="password mb-3">
                    <label class="sr-only" for="signin-password"
                      >Password</label
                    >
                    <input
                      id="signin-password"
                      name="signin-password"
                      type="password"
                      v-model="password"
                      class="form-control signin-password"
                      placeholder="Password"
                      required="required"
                    />
                    <!--//extra-->
                  </div>
                  <!--//form-group-->
                  <div class="text-center">
                    <button
                      class="btn app-btn-primary w-100 theme-btn mx-auto"
                      @click="postdata"
                    >
                      Log In
                    </button>
                  </div>
                </div>

                <div class="auth-option text-center pt-5">
                  No Account? Sign up
                  <a class="text-link" href="/register">here</a>.
                </div>
              </div>
              <!--//auth-form-container-->
            </div>
            <!--//auth-body-->
            <!--//app-auth-footer-->
          </div>
          <!--//flex-column-->
        </div>
        <!--//auth-main-col-->
        <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div class="auth-background-holder"></div>
          <div class="auth-background-mask"></div>
          <div class="auth-background-overlay p-3 p-lg-5">
            <div class="d-flex flex-column align-content-end h-100">
              <div class="h-100"></div>
            </div>
          </div>
          <!--//auth-background-overlay-->
        </div>
        <!--//auth-background-col-->
      </div>
      <!--//row-->
    </body>
  </div>
</template>

<script>
import axios from "axios";
import "@/assets/css/portal.css";
import "@/assets/plugins/fontawesome/js/all.min.js";

export default {
  data: () => ({
    username: "",
    password: "",
  }),
  // created(){
  //   localStorage.setItem('token', null)
  // },
  methods: {
    async postdata() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      try {
        const response = await axios.post(
          `https://api.belajaryuk.xyz/login`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        localStorage.setItem('token', response.data.token)
        this.$store.dispatch("getToken", response.data.token);
        await this.$router.push("/home");
        // console.log(response.data.token)
      } catch (error) {
        console.log("gagal");
      }
    },
  },
};
</script>

