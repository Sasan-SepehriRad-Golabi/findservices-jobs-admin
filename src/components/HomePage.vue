<template>
    <v-locale-provider rtl>
        <v-app-bar elevation="0" >
            <v-app-bar-nav-icon @click="this.$store.state.drawer=!this.$store.state.drawer"></v-app-bar-nav-icon>
            <v-app-bar-title style="white-space:normal !important" class="text-red font-weight-bold">سامانه کاریابی رامش ( ادمین )</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn @click="goToLogin" variant="outlined" class="bg-red-lighten-3 font-weight-bold text-white">
                <v-icon >mdi-login</v-icon>
                <span>ورود</span>
            </v-btn>
        </v-app-bar>
    </v-locale-provider>
</template>
<script>
export default {
    data() {
        return {
            isValid: false,
            fetchError: false
        }
    },
    created(){
        this.$store.state.isMainPage=false
    },
    mounted() {
      
    },
    methods: {
        goToLogin(){
            this.$store.state.showlogin=true; 
            this.$router.push('/admin/adminlogin')
        }
    }
}
</script>
<style scoped>
.v-toolbar-title__placeholder{
    white-space:normal !important;
}
</style>