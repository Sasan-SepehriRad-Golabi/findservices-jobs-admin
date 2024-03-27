<template>
    <v-locale-provider rtl>
   <v-row class="justify-center">
    <v-col cols="12" sm="6" md="4" style="overflow:auto !important;">
    <v-card style="margin-top:130px !important;" class="pa-5">
        <v-card-subtitle style="white-space:normal !important;" class="my-5 text-red">متن پیام خود به کارجو با شماره کاربری <span class="text-red">{{employeeId}}</span> وارد کنید و سپس ارسال نمایید</v-card-subtitle>
        <v-form @submit.prevent="sendMessageToUser">
        <v-textarea no-resize rows="5" variant="outlined" prepend-inner-icon="mdi-text-box" v-model="userMessageText" hint="حداکثر 25 حرف" persistent-hint counter :rules="[rules.checkLength]" placeholder="متن پیام خود را وارد نمایید"></v-textarea>
            <v-btn :loading="sendingMessage" type="submit"  block class="bg-red">ارسال پیام</v-btn>
        </v-form>
    </v-card>
    </v-col>
   </v-row>
  </v-locale-provider>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js"
    export default{
        data(){
            return{
                sendingMessage:false,
                messageId:"",
                userId:"",
                userMessageText:"",
                rules:{
                    checkLength:(value)=>{
                        if(value.length<25){
                            return true
                        }
                        else{
                            this.userMessageText=this.userMessageText.substring(0,24);
                            return false
                        }
                    }
                },

            }
        },
        created(){
            this.$store.state.isMainPage=false
            this.messageId=this.$route.params.messageId
            this.userId=this.$route.params.userId;
        },
        methods:{
            sendMessageToUser(){
                console.log("jjjjjjj")
                this.sendingMessage=true;
                PostData_normal("sendMessageToUser",{userId:this.userId,userMessageText:this.userMessageText,messageId:this.messageId},null,(err,res)=>{
                    if(err){
                        this.sendingMessage=false;
                            this.$store.state.snd=true;
                        this.$store.state.snt="خطا در ارتباط با سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
                        this.sendingMessage=false;
                        if(res.data.result && res.data.result=="R4"){
                            this.$store.state.snd=true;
                        this.$store.state.snt="شما به درستی شناسایی نشدید در حال انتقال به صفحه ورود..."
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                            this.$router.replace("/admin/adminlogin")
                        }, 2000);
                        }
                        else if(res.data.result && res.data.result=="R5"){
                            this.$store.state.snd=true;
                        this.$store.state.snt="خطا در بازیابی اطلاعات"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                        }
                        else if(res.data.result && res.data.result=="R11"){
                            this.$store.state.snd=true;
                            this.$store.state.snt="پیام با موفقیت ارسال شد و نیز ذخیره گردید"
                        this.$store.state.snbg="green"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                        }
                        else if(res.data.result && res.data.result=="R15"){ 
                        this.$store.state.snd=true;
                            this.$store.state.snt="پیام با موفقیت ارسال شد ولی در سیستم ذخیره نشد و با خطا روبرو شد "
                        this.$store.state.snbg="green"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                        }
                        else{
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در بازیابی اطلاعات"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    
                        }
                    }
                })
            },
        }
    }
    </script>