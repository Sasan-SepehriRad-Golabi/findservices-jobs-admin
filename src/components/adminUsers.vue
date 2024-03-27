<template>
    <v-card class="w-100 py-4">
        <v-divider></v-divider>
        <v-form @submit.prevent="findUser" class="w-100 h-100 my-4">
        <v-row  class="w-100 justify-center px-6">
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس شماره کاربری" prepend-inner-icon="mdi-magnify" v-model="searchedUserId">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس نام کاربر" prepend-inner-icon="mdi-magnify" v-model="searchedUserName">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row class="justify-start">
            <v-col cols="12" sm="6" md="3">
                <v-btn type="submit" block class="bg-red">
                    <v-icon>mdi-magnify</v-icon>
                    <span>جستجو</span>
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
    <v-divider></v-divider>
    <v-row class="justify-center">
        <v-col cols="10" sm="6">
            <v-btn @click="this.$router.replace(`/admin/userinfo/-1`)" block class="bg-red">ثبت کاربر جدید</v-btn>
        </v-col>
    </v-row>
    <v-divider></v-divider>
      <v-row class="w-100 justify-center">
        <v-col cols="12" sm="8" md="6">
            <v-list v-if="users.length>0">
            <v-list-item @click="showUserInfo(user.id)" :class="[user.blocked?'bg-red-lighten-3':!user.verified?'bg-orang':'bg-green-lighten-3','my-3', 'pa-5']" lines="2" class="my-3 pa-5" v-for="(user,index) in users" :key="index">
                <v-card-subtitle style="white-space:normal !important;" class="text-center w-100">{{!user.verified?'نیاز به تایید ':'کاربر تایید شده است'}}</v-card-subtitle>
                <v-card-subtitle style="white-space:normal !important;" class="text-center w-100">{{user.blocked?'کاربر بلاک شده است':''}}</v-card-subtitle>
                <v-list-item-title>
                    {{user.id}}نام کاربری
                </v-list-item-title>
                <v-list-item-subtitle style="white-space:normal !important; display:block !important;">
                    نام :{{user.name}}-نام خانوادگی:{{user.lastname}}
                </v-list-item-subtitle>
                <template #append>
                    <span>مشاهده اطلاعات</span>
                    <v-icon>
                        mdi-eye
                    </v-icon>
                    </template>
            </v-list-item>
        </v-list>
        <v-card v-else class="w-100 h-100">
            <v-alert title="توجه">
                <v-card-subtitle style="white-space:normal !important; display:block !important;">کاربری با مشخصات وارد شده پیدا نشد</v-card-subtitle>
            </v-alert>
        </v-card>
        </v-col>
      </v-row>
    </v-card>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js"
    export default{
        data(){
            return{
                searchedUserName:"",
                searchedUserId:"",
                users:[]
            }
        },
        created(){
            this.$store.state.isMainPage=false
            this.getUsers();
        },
        methods:{
            findUser(){
                let x=this.searchedUserName.split(" ");
                let userName="";
                let userLastName="";
                userName=x[0];
                if(x.length>1){
                    userLastName=x[1];
                }
               PostData_normal("findUser",{userId:this.searchedUserId,userName:userName,userLastName:userLastName},null,(err,res)=>{
                if(err){
                    this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                }
                else{
                    if(res.data){
                        if(res.data.result && res.data.result=="R4"){
                            this.$store.state.snd=true;
                            this.$store.state.snt="سیستم شما را به درستی شناسایی نکرد"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                        }
                        else if(res.data.result && res.data.result=="R3"){
                            this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                        }
                        else{
                            if(res.data.length>0){
                             this.users=res.data
                            }
                            else{
                                this.users=[]
                            }
                        }
                    }
                    else{
                        this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);  
                    }
                }
               })
            },
            showUserInfo(userId){
                console.log(userId)
                this.$router.push(`/admin/userinfo/${userId}`)
            },
            getUsers(){
                    PostData_normal("admingetUsers",{},null,(err,res)=>{
                            if(err){
                                this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=true;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                            }
                            else{
                                if(res.data.result && res.data.result=="R4"){
                                    this.$store.state.snd=true;
                            this.$store.state.snt="عدم شناسایی در سیستم. دوباره وارد شوید"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=true;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                                this.$router.replace("/admin/adminlogin");
                            }, 2000)
                                }
                                else{
                                this.$store.state.uln=true;
                                this.users=res.data;
                                }
                            }
                    })
            }
        }
    }
    </script>
