<template>
  <div>
    <body class="app app-signup p-0">
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
              <h2 class="auth-heading text-center mb-4">Sign up to Portal</h2>

              <div class="auth-form-container text-start mx-auto">
                <div class="auth-form auth-signup-form">
                  <div class="email mb-3">
                    <label class="sr-only" for="signup-email">Username</label>
                    <input
                      id="signup-name"
                      name="signup-name"
                      type="text"
                      class="form-control signup-name"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <div class="password mb-3">
                    <label class="sr-only" for="signup-password"
                      >Password</label
                    >
                    <input
                      id="signup-password"
                      name="signup-password"
                      type="password"
                      class="form-control signup-password"
                      placeholder="Create a password"
                      required="required"
                    />
                  </div>
                  <div class="extra mb-3">
                    <div class="form-check"></div>
                  </div>
                  <!--//extra-->

                  <div class="text-center">
                    <button
                      class="btn app-btn-primary w-100 theme-btn mx-auto"
                      @click="postdata"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <!--//auth-form-->

                <div class="auth-option text-center pt-5">
                  Already have an account?
                  <a class="text-link" href="/">Log in</a>
                </div>
              </div>
              <!--//auth-form-container-->
            </div>
            <!--//auth-body-->

            <footer class="app-auth-footer">
              <div class="container text-center py-3">
                <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
                >
              </div>
            </footer>
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

export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async postdata() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      try {
        const response = await axios.post(
          `https://api.belajaryuk.xyz/register`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // window.location.href = `/admin/1`;
        console.log(response);
      } catch (error) {
        console.log("gagal");
      }
    },
  },
};
</script>