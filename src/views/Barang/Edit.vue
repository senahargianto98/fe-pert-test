<template>
  <div>
    <body class="app">
      <header class="app-header fixed-top">
        <div class="app-header-inner">
          <div class="container-fluid py-2">
            <div class="app-header-content">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <a
                    id="sidepanel-toggler"
                    class="sidepanel-toggler d-inline-block d-xl-none"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      role="img"
                    >
                      <title>Menu</title>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        d="M4 7h22M4 15h22M4 23h22"
                      ></path>
                    </svg>
                  </a>
                </div>
                <!--//app-search-box-->
                <div class="app-utilities col-auto">
                  <!--//app-utility-item-->
                  <div class="app-utility-item app-user-dropdown dropdown">
                    <a
                      class="dropdown-toggle"
                      id="user-dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                      ><img
                        src="@/assets/images/app-logo.svg"
                        alt="user profile"
                    /></a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="user-dropdown-toggle"
                    >
                      <li>
                        <a class="dropdown-item" @click="logout">Log Out</a>
                      </li>
                    </ul>
                  </div>
                  <!--//app-user-dropdown-->
                </div>
                <!--//app-utilities-->
              </div>
              <!--//row-->
            </div>
            <!--//app-header-content-->
          </div>
          <!--//container-fluid-->
        </div>
        <!--//app-header-inner-->
        <div id="app-sidepanel" class="app-sidepanel">
          <div id="sidepanel-drop" class="sidepanel-drop"></div>
          <div class="sidepanel-inner d-flex flex-column">
            <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none"
              >&times;</a
            >
            <div class="app-branding">
              <a class="app-logo" href="index.html"
                ><img
                  class="logo-icon me-2"
                  src="@/assets/images/app-logo.svg"
                  alt="logo"
                /><span class="logo-text">PORTAL</span></a
              >
            </div>
            <!--//app-branding-->

            <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
              <ul class="app-menu list-unstyled accordion" id="menu-accordion">
                <li class="nav-item">
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                  <a class="nav-link" href="/home">
                    <span class="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-house-door"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                      </svg>
                    </span>
                    <span class="nav-link-text">Overview</span> </a
                  ><!--//nav-link-->
                </li>
                <!--//nav-item-->
                <li class="nav-item">
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                  <a class="nav-link active" href="/barang">
                    <span class="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-folder"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                        />
                      </svg>
                    </span>
                    <span class="nav-link-text">Docs</span> </a
                  ><!--//nav-link-->
                </li>
              </ul>
              <!--//app-menu-->
            </nav>
            <!--//app-nav-->
          </div>
          <!--//sidepanel-inner-->
        </div>
        <!--//app-sidepanel-->
      </header>

      <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="container-xl">
            <div
              class="row g-3 mb-4 align-items-center justify-content-between"
            >
              <div class="col-auto">
                <h1 class="app-page-title mb-0">My Data</h1>
              </div>
              <!--//col-auto-->
            </div>
            <!--//row-->
            <div class="row g-4 settings-section">
              <div class="col-12 col-md-4">
                <h3 class="section-title">Form Edit</h3>
              </div>
              <div class="col-12 col-md-8">
                <div class="app-card app-card-settings shadow-sm p-4">
                  <div class="app-card-body">
                    <form class="settings-form">
                      <div class="mb-3">
                        <label for="setting-input-1" class="form-label"
                          >Nama Barang<span
                            class="ms-2"
                            data-container="body"
                            data-bs-toggle="popover"
                            data-trigger="hover"
                            data-placement="top"
                            data-content="This is a Bootstrap popover example. You can use popover to provide extra info."
                            ><svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-info-circle"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                              />
                              <path
                                d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"
                              />
                              <circle cx="8" cy="4.5" r="1" /></svg></span
                        ></label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="nama_barang"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="setting-input-2" class="form-label"
                          >Harga</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          v-model="harga"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="setting-input-3" class="form-label"
                          >Code Barang</label
                        >
                        <input class="form-control" v-model="code" />
                      </div>
                      <div class="mb-3">
                        <label for="setting-input-3" class="form-label"
                          >Deskripsi</label
                        >
                        <v-textarea
                          label="Deskripsi"
                          v-model="deskripsi"
                        ></v-textarea>
                      </div>
                      <div class="mb-3">
                        <label for="setting-input-3" class="form-label"
                          >Tanggal</label
                        >
                        <v-date-picker
                          style="margin-left: 50px; margin-right: 50px"
                          v-model="tanggal"
                        ></v-date-picker>
                      </div>
                      <v-btn elevation="2" @click="postdata">Edit</v-btn>
                    </form>
                  </div>
                  <!--//app-card-body-->
                </div>
                <!--//app-card-->
              </div>
            </div>
            <!--//row-->
          </div>
          <!--//container-fluid-->
        </div>
        <!--//app-content-->
        <!--//app-footer-->
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    nama_barang: "",
    harga: "",
    tanggal: "",
    deskripsi: "",
    code: "",
    tanggal: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  created() {
    this.login()
    this.getEdit()
  },
  mounted() {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    /* ==== Enable Bootstrap Alert ====== */
    var alertList = document.querySelectorAll(".alert");
    alertList.forEach(function (alert) {
      new bootstrap.Alert(alert);
    });

    /* ===== Responsive Sidepanel ====== */
    const sidePanelToggler = document.getElementById("sidepanel-toggler");
    const sidePanel = document.getElementById("app-sidepanel");
    const sidePanelDrop = document.getElementById("sidepanel-drop");
    const sidePanelClose = document.getElementById("sidepanel-close");

    window.addEventListener("load", function () {
      responsiveSidePanel();
    });

    window.addEventListener("resize", function () {
      responsiveSidePanel();
    });

    function responsiveSidePanel() {
      let w = window.innerWidth;
      if (w >= 1200) {
        // if larger
        //console.log('larger');
        sidePanel.classList.remove("sidepanel-hidden");
        sidePanel.classList.add("sidepanel-visible");
      } else {
        // if smaller
        //console.log('smaller');
        sidePanel.classList.remove("sidepanel-visible");
        sidePanel.classList.add("sidepanel-hidden");
      }
    }

    sidePanelToggler.addEventListener("click", () => {
      if (sidePanel.classList.contains("sidepanel-visible")) {
        console.log("visible");
        sidePanel.classList.remove("sidepanel-visible");
        sidePanel.classList.add("sidepanel-hidden");
      } else {
        console.log("hidden");
        sidePanel.classList.remove("sidepanel-hidden");
        sidePanel.classList.add("sidepanel-visible");
      }
    });

    sidePanelClose.addEventListener("click", (e) => {
      e.preventDefault();
      sidePanelToggler.click();
    });

    sidePanelDrop.addEventListener("click", (e) => {
      sidePanelToggler.click();
    });

    /* ====== Mobile search ======= */
    const searchMobileTrigger = document.querySelector(
      ".search-mobile-trigger"
    );
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.href = `/`;
    },
    login() {
      if (localStorage.getItem("token")) {
        try {
          this.$store.dispatch("getToken", localStorage.getItem("token"));
        } catch (e) {
          console.log(e);
        }
      }
      if (this.$store.state.token == null) {
        this.$router.push("/");
      }
    },
    async getEdit() {
      if (this.$route.params.id) {
        try {
          const response = await axios.get(`https://api.belajaryuk.xyz/detail/${this.$route.params.id}`);
          this.nama_barang = response.data.nama_barang
          this.harga = response.data.harga
          this.code = response.data.code
          this.deskripsi = response.data.deskripsi
          this.tanggal = response.data.tanggal
        } catch (error) {
          console.log(error);
        }
      }
    },
    async postdata() {
      let formData = new FormData();
      formData.append("nama_barang", this.nama_barang);
      formData.append("harga", this.harga);
      formData.append("tanggal", this.tanggal);
      formData.append("deskripsi", this.deskripsi);
      formData.append("code", this.code);
      try {
        const response = await axios.put(`https://api.belajaryuk.xyz/edit/barang/${this.$route.params.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // console.log("sukses");
        window.location.href = `/barang`;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>