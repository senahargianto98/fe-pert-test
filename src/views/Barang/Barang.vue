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
                <!--//col-->
                <div class="search-mobile-trigger d-sm-none col">
                  <i class="search-mobile-trigger-icon fas fa-search"></i>
                </div>
                <!--//col-->
                <div class="app-search-box col">
                  <form class="app-search-form">
                    <input
                      type="text"
                      placeholder="Search..."
                      name="search"
                      class="form-control search-input"
                    />
                    <button
                      type="submit"
                      class="btn search-btn btn-primary"
                      value="Search"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
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

            <!--//app-sidepanel-footer-->
          </div>
          <!--//sidepanel-inner-->
        </div>
        <!--//app-sidepanel-->
      </header>
      <!--//app-header-->

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
            <div class="row g-4">
              <div v-for="item in items" :key="item.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
                <div class="app-card app-card-doc shadow-sm h-100">
                  <div class="app-card-thumb-holder p-3">
                    <span class="icon-holder">
                      <i class="fas fa-file-alt text-file"></i>
                    </span>
                    <a class="app-card-link-mask" href="#file-link"></a>
                  </div>
                  <div class="app-card-body p-3 has-card-actions">
                    <h4 class="app-doc-title truncate mb-0">
                      <a href="#file-link">{{ item.nama_barang }}</a>
                    </h4>
                    <div class="app-doc-meta">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <span class="text-muted">Harga:</span>
                          {{ item.harga }}
                        </li>
                        <li>
                          <span class="text-muted">Tanggal:</span>
                          {{ item.tanggal }}
                        </li>
                        <li>
                          <span class="text-muted">Code:</span> {{ item.code }}
                        </li>
                        <li>
                          <span class="text-muted">Deskripsi:</span> {{ item.deskripsi }}
                        </li>
                      </ul>
                    </div>
                    <div class="app-card-actions">
                      <div class="dropdown">
                        <div
                          class="dropdown-toggle no-toggle-arrow"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-three-dots-vertical"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                            />
                          </svg>
                        </div>
                        <!--//dropdown-toggle-->
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" :href="'/edit/' + item.id"
                              ><svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-pencil me-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                /></svg
                              >Edit</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" @click="Delete(item.id)"
                              ><svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-trash me-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                /></svg
                              >Delete</a
                            >
                          </li>
                        </ul>
                      </div>
                      <!--//dropdown-->
                    </div>
                    <!--//app-card-actions-->
                  </div>
                  <!--//app-card-body-->
                </div>
                <!--//app-card-->
              </div>
            </div>

            <!--//row-->
            <nav class="app-pagination mt-5">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            <!--//app-pagination-->
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
  }),
  created() {
    this.getData();
    this.login();
  },
  methods: {
    async Delete(id) {
      try {
        await axios.delete("https://api.belajaryuk.xyz/delete/barang/" + id);
        window.location.href = `/barang`;
      } catch (error) {
        console.log(error);
      }
    },
    async getData() {
      try {
        const response = await axios.get(`https://api.belajaryuk.xyz/get/all`);
        this.$store.dispatch("getBarang", response.data);
      } catch (error) {
        console.log(error);
      }
    },
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
    const searchBox = document.querySelector(".app-search-box");

    searchMobileTrigger.addEventListener("click", () => {
      searchBox.classList.toggle("is-visible");

      let searchMobileTriggerIcon = document.querySelector(
        ".search-mobile-trigger-icon"
      );

      if (searchMobileTriggerIcon.classList.contains("fa-search")) {
        searchMobileTriggerIcon.classList.remove("fa-search");
        searchMobileTriggerIcon.classList.add("fa-times");
      } else {
        searchMobileTriggerIcon.classList.remove("fa-times");
        searchMobileTriggerIcon.classList.add("fa-search");
      }
    });
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    token() {
      return console.log(this.$store.state.token);
    },
  },
};
</script>