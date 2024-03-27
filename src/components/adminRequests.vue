<template>
    <v-dialog v-model="rejectRequestConfirmation">
        <v-card>
            <v-alert titiel="توجه" icon="mdi-alert-box">
                        <v-card-subtitle style="white-space:normal !important">این درخواست قبلا تایید شده. آیا مطمعنید؟</v-card-subtitle> 
            </v-alert>
            <v-card-actions>
                <v-btn variant="outlined" @click="rejectrequeststep2(temprequestId,tempemployeeID)" >بله</v-btn>
                <v-spacer></v-spacer>
                                <v-btn variant="outlined" @click="rejectRequestConfirmation=false;" >خیر</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-card class="w-100 py-4">
        <v-divider></v-divider>
        <v-form @submit.prevent="findRequestByJob" class="w-100 h-100 my-4">
        <v-row  class="w-100 justify-center px-6">
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس عنوان شغل" prepend-inner-icon="mdi-magnify" v-model="searchedJobOnvan">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس شماره مشخصه شغل" prepend-inner-icon="mdi-magnify" v-model="searchedJobId">
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
        <v-form @submit.prevent="findRequestByEmployer" class="w-100 h-100 my-4">
        <v-row  class="w-100 justify-center px-6">
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس  شماره کاربری کارفرما" prepend-inner-icon="mdi-magnify" v-model="searchedEmployerId">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس نام یا نام خانوادگی  کارفرما " prepend-inner-icon="mdi-magnify" v-model="searchedEmployerName">
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
        <v-form @submit.prevent="findRequestByEmployee" class="w-100 h-100 my-4">
        <v-row  class="w-100 justify-center px-6">
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس شماره کاربری کارجو" prepend-inner-icon="mdi-magnify" v-model="searchedEmployeeId">
                </v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field class="w-100" variant="outlined" label="جستجو بر اساس نام یا نام خانوادگی کارجو" prepend-inner-icon="mdi-magnify" v-model="searchedEmployeeName">
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
    <v-row class="justify-center align-center font-weight-bold">
            <v-col  cols="10" md="8">
                <v-alert color="orange" title="توجه" icon="mdi-alert-box-outline">
                    در هر باکس بروی روی کارجو، کارفرما و یا شغل می توانید کلیک کنید تا اطلاعات کامل تر در باره آنها را مشاهده نمایید
                </v-alert>
            </v-col>
        </v-row>
        <v-divider></v-divider>
      <v-row class="w-100 justify-center">
        <v-col cols="12" sm="8" md="6">
            <v-card v-if="requests.length>0" elevation="0">
           <v-card :class="[request.requestStatusCode==1?'bg-green-lighten-3':(request.requestStatusCode==2||request.requestStatusCode==3||request.requestStatusCode==4)?'bg-red-lighten-3':'bg-orange','my-3']"  v-for="(request,index) in requests" :key="index">
            <v-row class="my-3 py-3" @click="showRequest(request.id)">
                <v-card-text>درخواست شماره {{request.id}}</v-card-text>
            <v-card-subtitle style="white-space:normal !important;">وضعیت درخواست - <span class="text-red">   {{request.requestStatusText&&request.requestStatusText.length>0?request.requestStatusText:"در دست بررسی"}}</span></v-card-subtitle>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-2">
            <v-col cols="12" sm="4">
                <v-list-item @click="this.$router.push(`/admin/userinfo/${request.employeeID}`)">
                    <v-list-item-title style="white-space:normal !important;">شماره کاربری کارجو {{request.employeeID}}</v-list-item-title>
                    <v-list-item-subtitle style="white-space:normal !important;">نام کارجو - {{request.employeeName}}</v-list-item-subtitle>
                </v-list-item>
            </v-col>
            <v-col cols="12" sm="4">
                <v-list-item @click="this.$router.push(`/admin/userinfo/${request.employerId}`)">
                    <v-list-item-title style="white-space:normal !important;">شماره کاربری کارفرما {{request.employerId==-1?'':request.employerId}}}</v-list-item-title>
                    <v-list-item-subtitle style="white-space:normal !important;">نام کارفرما - {{request.employerId==-1?'سامانه رامش':request.employername}}</v-list-item-subtitle>
                </v-list-item>
            </v-col>
            <v-col cols="12" sm="4">
                <v-list-item @click="this.$router.push(`/admin/jobdetail/${request.jobId}`)">
                    <v-list-item-title style="white-space:normal !important;">شماره شغل {{request.jobId}}</v-list-item-title>
                    <v-list-item-subtitle style="white-space:normal !important;">تاریخ ایجاد شغل - {{request.jobcreationdate}}</v-list-item-subtitle>
                    <v-list-item-subtitle style="white-space:normal !important;">عنوان شغل - {{request.jobOnvan}}</v-list-item-subtitle>
                </v-list-item>
            </v-col>
           </v-row>
           <v-card-actions>
            <v-row class="justify-center">
                <v-col cols="12" sm="6" md="4">
                    <v-btn :loading="btnloading" @click="verifyrequest(request.id,request.employeeID,request.employerId)" block class="bg-red">تایید این درخواست</v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-btn block :loading="btnloading" @click="rejectrequeststep1(request.id,request.employeeID)" class="bg-red">رد کردن این درخواست</v-btn>
                </v-col>
            </v-row>
           </v-card-actions>
           </v-card>
        </v-card>
        <v-card v-else class="w-100 h-100">
            <v-alert title="توجه">
                <v-card-subtitle style="white-space:normal !important; display:block !important;">درخواستی  پیدا نشد</v-card-subtitle>
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
                requests:[],
                btnloading:false,
                searchedEmployerId:"",
                searchedEmployeeId:"",
                searchedEmployerName:"",
                searchedEmployeeName:"",
                searchedJobId:"",
                searchedJobOnvan:"",
                rejectRequestConfirmation:false,
                temprequestId:"",
                tempemployeeID:""
            }
        },
        created(){
            this.$store.state.isMainPage=false
            this.getRequests();
        },
        methods:{
            findRequestByJob(){
                PostData_normal("findRequestByJob",{jobId:this.searchedJobId.trim().length>0?this.searchedJobId.trim():-1,jobOnvan:this.searchedJobOnvan.trim().length>0?this.searchedJobOnvan:'n'},null,(err,res)=>{
                    if(err){
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
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
                            this.$router.replace("/admin/adminlogin")
                        }, 2000);
                        }
                        else{
                            this.requests=res.data.length && res.data.length>0?res.data:[];
                        }

                    }
                })
            },
            findRequestByEmployer(){
                PostData_normal("findRequestByEmployer",{employerId:this.searchedEmployerId.trim().length>0?this.searchedEmployerId.trim():-1,employerName:this.searchedEmployerName.trim().length>0?this.searchedEmployerName:'n'},null,(err,res)=>{
                    if(err){
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
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
                            this.$router.replace("/admin/adminlogin")
                        }, 2000);
                        }
                        else{
                            this.requests=res.data.length && res.data.length>0?res.data:[];
                        }

                    }
                })
            },
            findRequestByEmployee(){
                PostData_normal("findRequestByEmployee",{employeeId:this.searchedEmployeeId.trim().length>0?this.searchedEmployeeId.trim():-1,employeeName:this.searchedEmployeeName.trim().length>0?this.searchedEmployeeName:'n'},null,(err,res)=>{
                    if(err){
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
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
                            this.$router.replace("/admin/adminlogin")
                        }, 2000);
                        }
                        else{
                            this.requests=res.data.length && res.data.length>0?res.data:[];
                        }

                    }
                })
            },
            showRequest(requestid){
                this.$router.replace(`/admin/showRequest/${requestid}`)
            },
            rejectrequeststep1(requestid,employeeID){
                PostData_normal("rejectrequeststep1",{requestId:requestid},null,(err,res)=>{
                    console.log(err)
                    console.log(res)
                    if(err){
                        this.btnloading=false;
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
                        if(res.data.result && res.data.result=="ok"){
                            this.rejectrequeststep2(requestid,employeeID);
                        }
                        else if(res.data.result && res.data.result=="pv"){
                            
                            this.rejectRequestConfirmation=true;
                            this.temprequestId=requestid;
                            this.tempemployeeID=employeeID;
                        }
                        else{
                            this.btnloading=false;
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
            rejectrequeststep2(requestid,employeeID){
                this.btnloading=true;
                PostData_normal("rejectrequeststep2",{requestId:requestid},null,(err,res)=>{
                    if(err){
                        this.btnloading=false;
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
                        this.btnloading=false;
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
                        else{
                            this.$store.state.snd=true;
                        this.$store.state.snt="درخواست مورد نظر رد شد ...درحال انتقال به صفحه ارسال پیام"
                        this.$store.state.snbg="orange"
                        setTimeout(() => {
                            this.$store.state.snd=false
                            this.$router.replace(`/admin/sendMessageToEmployeeandEmployer/${employeeID}/0`)
                        }, 2000);
                        }
                    }
                })
            },
            verifyrequest(requestid,employeeID,employerId){
                this.btnloading=true;
                PostData_normal("verifyrequest",{requestId:requestid},null,(err,res)=>{
                    if(err){
                        this.btnloading=false;
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
                        this.btnloading=false;
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
                        else if(res.data.result && res.data.result=="notOk"){
                            this.$store.state.snd=true;
                        this.$store.state.snt="قبل از تایید یک درخواست مطمعن شوید کارجو و کارفرما و شغل مورد نظر تایید شده باشند"
                        this.$store.state.snbg="orange"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                        }
                        else if(res.data.result && res.data.result=="ok")
                        {
                            this.$store.state.snd=true;
                        this.$store.state.snt="درخواست مورد نظر تایید شد ...درحال انتقال به صفحه ارسال پیام"
                        this.$store.state.snbg="green"
                        setTimeout(() => {
                            this.$store.state.snd=false
                            this.$router.replace(`/admin/sendMessageToEmployeeandEmployer/${employeeID}/${employerId}`)
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
            getRequests(){
                PostData_normal("/getrequests",{},null,(err,res)=>{
                    if(err){
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در اتصال به سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false
                        }, 2000);
                    }
                    else{
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
                            this.$router.replace("/admin/adminlogin")
                        }, 2000);
                        }
                        else{
                            this.requests=res.data.length && res.data.length>0?res.data:[];
                        }

                    }
                })
            }
        }

    }
    </script>