<template>
    <v-locale-provider rtl>
        <v-card style="height:calc(100% - 64px);margin-top:70px;z-index:unset !important;position:unset !important;" class="bg-grey-lighten-3 d-flex justify-center align-center h-100">
       <v-row dense class="h-100 w-100 align-start">
                    <v-row  v-if="!this.$store.state.uln && !this.$store.state.showlogin" class="justify-center align-center mx-4 w-100 h-100">
               <v-col cols="12" sm="6" md="4">
                <v-alert color="orange" title="توجه">برای استفاده از سایت ابتدا باید وارد شوید</v-alert>
               </v-col>
            </v-row>
            <div class="w-100 h-100" v-else>
                    <v-row v-if="this.$store.state.isMainPage" class="justify-center align-center mx-4 w-100 h-100">
               <v-col cols="12" sm="6" md="4">
                <v-alert color="green" title="توجه">خوش آمدید. شما وارد سایت هستید.</v-alert>
               </v-col>
            </v-row>
                <router-view ></router-view>
            </div>
       </v-row>
       <v-snackbar v-model="this.$store.state.snd" :color="this.$store.state.snbg" >
        {{this.$store.state.snt}}
       </v-snackbar>
    </v-card>
    </v-locale-provider>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js"
    export default{
        data(){
            return{
            }
        },
        created(){
            this.$store.state.isMainPage=true
            this.checkadmin();
        },
        methods:{
            checkadmin(){
                PostData_normal("checkadmin",{},null,(err,res)=>{
                    console.log(err)
                    console.log(res)
                    if(err){
                        this.$store.state.uln="";
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در ارتباط با سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 1000);

                    }
                    else{
                        if(res.data.result && res.data.result!="R4"){
                            this.$store.state.uln=true;
                            console.log(this.$route.fullPath)
                            if(this.$route.fullPath=="/"){
                                this.$store.state.isMainPage=true;
                            }
                            else{
                                this.$store.state.isMainPage=false;
                            }
                        this.$store.state.snd=true;
                        this.$store.state.snt="خوش آمدید"
                        this.$store.state.snbg="green"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 1000);
                        }
                        else{
                            this.$store.state.uln="";
                        this.$store.state.snd=true;
                        this.$store.state.snt="اطلاعات به درستی بازیابی نشد. مطمعن شوید که به درستی ورود کرده اید"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 1000);
                        }
                    }
                })
            }
        }
    }
    </script>
    <style>
   
    </style>
