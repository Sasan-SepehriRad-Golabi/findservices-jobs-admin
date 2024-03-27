<template>
    <v-card class="w-100">
        <v-row class="justify-center">
            <v-col cols="10" sm="6" md="4">
                <v-btn block @click="this.$router.replace('/admin/jobdetail/-1')" class="bg-red">ثبت شغل جدید</v-btn>
            </v-col>
        </v-row>
      <v-row class="w-100 justify-center">
        <v-col cols="12" sm="8" md="6">
            <v-list>
            <v-list-item class="my-2"  @click="showJobInfo(job.id)" :style="{'background-color':job.jobStatusCode==0?'orange':job.jobStatusCode==1?'green':job.jobStatusCode==2?'red':'grey'}"  v-for="(job,index) in jobs" :key="index">
                <span>---</span>
                <span>{{job.jobStatusCode==0?'تاید نشده':job.jobStatusCode==1?'تایید شده و منتظر انتخاب کارجو':job.jobStatusCode==2?'رد شده توسط ادمین':job.jobStatusCode==3?'کارجو انتخاب شده و در حال انجام':job.jobStatusCode==4?'تمام شده':job.jobStatusCode==5?'در حال بررسی مشکلات کارفرما و کارجو':job.jobStatusCode==6?'تمام شده با حل مشکلات':'نامشخص'}}</span>
                <v-list-item-title>
                    عنوان شغل -- {{job.jobOnvan}}
                </v-list-item-title>
                <v-list-item-subtitle style="white-space:normal !important;display:block !important;">
                  نام و نام خانوادگی سازنده: {{job.jobCreatorNameAndLastName}}
                </v-list-item-subtitle>
                <v-list-item-subtitle style="white-space:normal !important;display:block !important;">
                    تاریخ ایجاد : {{job.jobDateOfCreationInPersian}}
                </v-list-item-subtitle>
        <template v-slot:append>
            <span>مشاهده اطلاعات</span>
                    <v-icon>
                        mdi-eye
                    </v-icon>
        </template>
            </v-list-item>
        </v-list>
        </v-col>
      </v-row>
    </v-card>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js"
    export default{
        data(){
            return{
                jobs:[]
            }
        },
        created(){
            this.getJobs();
            this.$store.state.isMainPage=false
        },
        methods:{
            showJobInfo(jobId){
                this.$router.replace(`/admin/jobdetail/${jobId}`)
            },
            getJobs(){
                    PostData_normal("admingetJobs",{},null,(err,res)=>{
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
                                this.jobs=res.data;
                                }
                            }
                    })
            }
        }
    }
    </script>
