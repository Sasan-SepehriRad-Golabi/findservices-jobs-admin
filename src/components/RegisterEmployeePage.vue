<template>
    <v-locale-provider rtl>
        <v-card elevation="0" class="w-100 h-100 ma-0">
        <v-tabs 
        centered
        stacked
        v-model="employeeTab"
        bg-color="black lighten-3"
        show-arrows
        slider-color="white" >
        <v-tab value="personal" @click="goToPersonal" class="mx-3">
            <v-icon>mdi-account</v-icon>
            اطلاعات شخصی
        </v-tab>
        <v-tab value="unicert"  @click="goToUniCert" class="mx-3">
            <v-icon>mdi-school</v-icon>
            اطلاعات دانشگاهی
        </v-tab>
        <v-tab value="zaban" @click="goToZaban" class="mx-3">
            <v-icon>mdi-language-lua</v-icon>
            زبان خارجی
        </v-tab>
        <v-tab value="skill" @click="goToSkills" class="mx-3">
            <v-icon>mdi-tools</v-icon>
            مهارت ها
        </v-tab>
        <v-tab value="jobresume" @click="goToJobResume" class="mx-3">
            <v-icon>mdi-tools</v-icon>
            سوابق کاری
        </v-tab>
        <v-tab value="interests" @click="goToInterests" class="mx-3">
            <v-icon>mdi-heart</v-icon>
            علاقه مندی ها
        </v-tab>
        </v-tabs>
        <div>
      <div>
        <router-view></router-view>
      </div>
    </div>
    </v-card>
    </v-locale-provider>
</template>
<script>
export default {
    data(){
        return{
            employeeTab:"",
            userId:""
        }
    },
    props:{
        tabValue:String
    },
    created(){
        this.$store.state.isMainPage=false
        this.userId=this.$route.params.id;
        console.log(this.userId)
        this.employeeTab=null;
        if((/personal/).test(this.$route.path)){
            this.employeeTab="personal";
        }
        else if((/unicert/).test(this.$route.path)){
            this.employeeTab="unicert";
        }
        else if((/foreignlanguage/).test(this.$route.path)){
            this.employeeTab="zaban";
        }
        else if((/skills/).test(this.$route.path)){
            this.employeeTab="skill";
        }
        else if((/jobresume/).test(this.$route.path)){
            this.employeeTab="jobresume";
        }
        else if((/interests/).test(this.$route.path)){
            this.employeeTab="interests";
        }
        else{
            this.employeeTab=null;
        }
    },
    methods:{
        goToPersonal(){
            console.log(this.userId);
            this.$router.push("/admin/userinfo/"+this.userId+"/personal")
        },
        goToUniCert(){
            console.log(this.userId);
            this.$router.push("/admin/userinfo/"+this.userId+"/unicert")
        },
        goToZaban(){
            console.log(this.userId);
            this.$router.push("/admin/userinfo/"+this.userId+"/foreignlanguage")
        },
        goToSkills(){
            console.log(this.userId);
            this.$router.push("/admin/userinfo/"+this.userId+"/skills")
        },
        goToJobResume(){
            console.log(this.userId);
            this.$router.push("/admin/userinfo/"+this.userId+"/jobresume")
        },
        goToInterests(){
            console.log(this.userId);
            this.$router.push("/admin/userinfo/"+this.userId+"/interests")
        }
    }

}
</script>
<style scoped>
.v-tabs--density-default.v-tabs--stacked{
    height:90px;
    --v-tabs-height:80px
}
</style>