<template lang="html">

  <div>
    <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="$store.state.sidebarActiveState"
    >
      <div class="header-sidebar" slot="header">
        <img src="@/assets/logo.png" style="height: 30px; margin-bottom: 1rem; margin-left: 0.8rem;" /> <br/>
        <vs-avatar  size="70px" :src="AvatarImg" alt="user_img" />
        <h4>
          User's Name
        </h4>

      </div>

      <vs-sidebar-item index="1" icon="apps" to="/">
        Dashboard
      </vs-sidebar-item>


      <vs-sidebar-item index="5" icon="linear_scale" to="/attendance">
        Contactless Attendance
      </vs-sidebar-item>

      <vs-sidebar-item index="3" icon="linear_scale" to="/mask">
        Mask Compliance
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="linear_scale" to="/social-distancing">
        Social Distancing
      </vs-sidebar-item>

      <vs-sidebar-item index="4" icon="new_releases" to="/containment-zone">
        Containment Zone
      </vs-sidebar-item>

      <vs-sidebar-item index="6" icon="track_changes" to="/temp-page">
        Contact Tracing
      </vs-sidebar-item>

      <vs-sidebar-item index="7" icon="favorite" to="/temp-page">
        Health Monitoring
      </vs-sidebar-item>


      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="8" icon="verified_user">
        Configurations
      </vs-sidebar-item>
      <vs-sidebar-item index="9" icon="account_box">
        Profile
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button> 
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
import AvatarImg from "@/assets/img_avatar.png";

export default {
    name: "Sidebar",
    data() {
        return {
            AvatarImg,            
        }
    }
}
</script>
