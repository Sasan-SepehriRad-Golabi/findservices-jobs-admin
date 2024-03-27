<template>
    <v-card class="w-100">
      <v-row class="w-100 justify-center">
        <v-col cols="12" sm="8" md="6">
            <v-card class="my-3 pa-3"  :style="{'background-color':message.answered?'green':'orange'}"  v-for="(message,index) in messages" :key="index">
               <v-card-title>
                <span>---</span>
                <span>{{message.answered?'پاسخ داده شده':'منتظر پاسخ'}}</span>
               </v-card-title>
               <v-divider></v-divider>
                <v-card-text class="font-weight-bold">
                    موضوع پیام -- {{message.messageTitle}}
                </v-card-text>
               <v-divider></v-divider>
               <v-card-text>
                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        متن پیام
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                 {{message.messageText}}
                    </v-expansion-panel-text>
                </v-expansion-panel>
               </v-expansion-panels>
               </v-card-text>
               <v-divider></v-divider>
                <v-card-subtitle style="white-space:normal !important;display:block !important;" class="text-red">
                    تاریخ ایجاد : {{message.messageDateInPersian}}
                </v-card-subtitle>
                <v-card-actions>
                    <v-btn block class="bg-red"  @click="answereMessage(message.userid,message.id)">پاسخ با کاربر</v-btn>
                </v-card-actions>
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
                messages:[]
            }
        },
        created(){
            this.getMessages();
            this.$store.state.isMainPage=false
        },
        methods:{
            answereMessage(userid,messageid){
                this.$router.replace(`/admin/answerUserMessages/${userid}/${messageid}`)
            },
            getMessages(){
                    PostData_normal("admingetMessages",{},null,(err,res)=>{
                        console.log(res)
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
                                this.messages=res.data;
                                }
                            }
                    })
            }
        }
    }
    </script>
