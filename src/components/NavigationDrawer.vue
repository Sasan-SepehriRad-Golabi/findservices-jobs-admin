<template>
    <v-card>
        <v-locale-provider rtl>
        <v-navigation-drawer
        temporary
        v-model="this.$store.state.drawer"
        location="right"
      >
        <template v-slot:prepend>
          <v-list-item class="my-3 pa-2"
            :title="this.$store.state.uln?uname:'کاربر ناشناس'"
            :subtitle="this.$store.state.uln?'شما وارد هستید':'شما وارد نشده اید'"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

     
        <v-list density="compact" nav>
          <v-list-item class="my-3 pa-2" @click="this.$store.state.isMainPage=true; this.$router.push('/admin/')" prepend-icon="mdi-home-city" title="خانه" ></v-list-item>
          <v-divider class="my-2 tex-red bg-red"></v-divider>
          <v-list-item  class="my-3 pa-2" @click="this.$router.replace('/admin/adminUsers')" prepend-icon="mdi-account" title="کارجوها" ></v-list-item>
          <v-divider class="my-2 tex-red bg-red"></v-divider>
          <v-list-item class="my-3 pa-2" @click="this.$router.replace('/admin/adminJobs')" prepend-icon="mdi-account-group-outline" title="شغل ها" ></v-list-item>
          <v-divider class="my-2 tex-red bg-red" ></v-divider>
          <v-list-item class="my-3 pa-2" @click="this.$router.replace('/admin/adminRequests')"  prepend-icon="mdi-account-group-outline" title="درخواست ها ی شغل" ></v-list-item>
          <v-divider class="my-2 tex-red bg-red"></v-divider>
          <v-list-item class="my-3 pa-2" @click="this.$router.replace('/admin/adminMessages')" prepend-icon="mdi-account-group-outline" title="مدیریت پیام ها" ></v-list-item>
          <v-divider class="my-2 tex-red bg-red"></v-divider>
          <v-list-item class="my-3 pa-2" prepend-icon="mdi-account-group-outline" @click="adminExit" title="خروج" ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-locale-provider>
    </v-card>
</template>
<script>
import { mapState } from 'vuex';
import {PostData_normal} from "@/services/remotedatamodify.js"
export default {
    data() {
        return {
            uname:""
        }
    },
    computed: {
        ...mapState(['maindrawer'])
    },
    methods:{
      adminExit(){
        PostData_normal("adminExit",{},null,(err,res)=>{
          if(err){
            this.$store.state.snd=true;
            this.$store.state.snt="خطا در برقراری ارتباط با سرور"
            this.$store.state.snbg="red"
            setTimeout(() => {
              this.$store.state.snd=false
            }, 2000);
          }
          else{
            if(res.data.result=="OK"){
              this.$store.state.snd=true;
            this.$store.state.snt="شما با موفقیت خارج شده اید"
            this.$store.state.snbg="green"
            setTimeout(() => {
              this.$store.state.snd=false
              this.$store.state.uln=false
              this.$store.state.showlogin=false
              this.$router.replace("/admin/")
            }, 2000);
            }
            else{
              this.$store.state.snd=true;
            this.$store.state.snt="خطا در خروج شما از سرور"
            this.$store.state.snbg="red"
            setTimeout(() => {
              this.$store.state.snd=false
            }, 2000);
            }
          }
        })
      }
    }
}
</script>