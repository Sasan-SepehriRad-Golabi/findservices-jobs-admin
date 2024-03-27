<template>
        <v-card class="w-100 h-100">
    <v-card-subtitle style="white-space:wrap !important">
       .سوابق کاری خود برای حداکثر 3 شغل اخیر خود را وارد نمایید. به جای اینکار می توانید برگه سوابق بیمه خود را آپلود نمایید
    </v-card-subtitle>
    <v-row class="justify-center align-center">
        <v-col cols="12">
            <v-card-text class="my-5">در صورت آپلود برگه رسمی سوابق بیمه نیازی به پر کردن بخش پایین در مورد شغل خود ندارید</v-card-text>
        </v-col>
        <v-col cols="8" md="4" >
            <v-file-input variant="outlined" prepend-inner-icon="mdi-camera" prepend-icon="" show-size chips v-model="jobsabeghebimehfile" hint="برگه سوابق بیمه خود را آپلود کنید." persistent-hint>
        </v-file-input>
    </v-col>
        <v-col cols="4" md="2">
            <img  :src="(jobsabeghebimehfileprev&& jobsabeghebimehfileprev!='null'&&jobsabeghebimehfileprev!='undefined')?jobsabeghebimehfileprev:require('@/assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
        </v-col>
        <v-divider class="my-2"></v-divider>
    </v-row> 
<v-card-text>
    <v-row class="d-flex justify-center">
        <v-col cols="12" md="6" lg="4">
            <v-btn block variant="outlined" @click="userEdit=!userEdit" class="d-flex bg-red text-white">
             <v-icon>{{!userEdit?'mdi-pencil':'mdi-lock'}}</v-icon>
              <span>{{!userEdit?'ویرایش':'قفل'}}</span>
            </v-btn>
        </v-col>
    </v-row>
    <v-card-subtitle class="my-5 text-red font-weight-bold">شغل اول</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobname1" label="عنوان شغل" اهدف="کارمند بیمه" persistent-hint>
                <template #prepend-inner>
                    <v-icon>mdi-account-hard-hat</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="joboveralllocation1" label="محل شغل" hint="مثلا بیمه ایران شعبه ..." >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobdesc1" label="توضیح یک جمله ای در باره کارتان" hint="مثلا کار در قسمت ثبت خسارت "  persistent-hint>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobmoddatekar1" label="مدت شایقه کار در شغل مورد نظر" hint="مثلا کار در قسمت ثبت خسارت "  persistent-hint>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobdetaillocation1" label="آدرس و تلفن محل کار" >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobleftreason1" label="علت ترک کار" hint="مثلا پایان قرارداد" persistent-hint>
            </v-text-field>
        </v-col>
        <v-divider class="my-2"></v-divider>
    </v-row>
    <v-card-subtitle class="my-5 text-red font-weight-bold">شغل دوم</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobname2" label="عنوان شغل" اهدف="کارمند بیمه" persistent-hint>
                <template #prepend-inner>
                    <v-icon>mdi-account-hard-hat</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="joboveralllocation2" label="محل شغل" hint="مثلا بیمه ایران شعبه ..." >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobdesc2" label="توضیح یک جمله ای در باره کارتان" hint="مثلا کار در قسمت ثبت خسارت "  persistent-hint>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobmoddatekar2" label="مدت شایقه کار در شغل مورد نظر" hint="مثلا کار در قسمت ثبت خسارت "  persistent-hint>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobdetaillocation2" label="آدرس و تلفن محل کار" >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobleftreason2" label="علت ترک کار" hint="مثلا پایان قرارداد" persistent-hint>
            </v-text-field>
        </v-col>
        <v-divider class="my-2"></v-divider>
    </v-row>
    <v-card-subtitle class="my-5 text-red font-weight-bold">شغل سوم</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobname3" label="عنوان شغل" اهدف="کارمند بیمه" persistent-hint>
                <template #prepend-inner>
                    <v-icon>mdi-account-hard-hat</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="joboveralllocation3" label="محل شغل" hint="مثلا بیمه ایران شعبه ..." >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobdesc3" label="توضیح یک جمله ای در باره کارتان" hint="مثلا کار در قسمت ثبت خسارت "  persistent-hint>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobmoddatekar3" label="مدت شایقه کار در شغل مورد نظر" hint="مثلا کار در قسمت ثبت خسارت "  persistent-hint>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobdetaillocation3" label="آدرس و تلفن محل کار" >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="jobleftreason3" label="علت ترک کار" hint="مثلا پایان قرارداد" persistent-hint>
            </v-text-field>
        </v-col>
    </v-row>
</v-card-text>
<v-card-actions class="d-flex justify-start align-center">
          <v-col>
            <v-row>
                <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="updateJobResumeFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن سوابق شغلی  </span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="updateJobResumeFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن سوابق شغلی </span>
          </v-btn>
            </v-row>
            <v-row>
                <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="verifyUpdateJobResume" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات  </span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="verifyUpdateJobResume" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات </span>
          </v-btn>
            </v-row>
          </v-col>
        </v-card-actions>
</v-card>
    </template>
    <script>
    import {PostData_formData,PostData_normal} from "@/services/remotedatamodify"
    export default{
        data(){
            return{
                userIdParam:"",
                btnLoading:false,
                userEdit:false,
                jobname1:"",
                jobname2:"",
                jobname3:"",
                joboveralllocation1:"",
                joboveralllocation2:"",
                joboveralllocation3:"",
                jobdesc1:"",
                jobdesc2:"",
                jobdesc3:"",
                jobmoddatekar1:"",
                jobmoddatekar2:"",
                jobmoddatekar3:"",
                jobdetaillocation1:"",
                jobdetaillocation2:"",
                jobdetaillocation3:"",
                jobleftreason1:"",
                jobleftreason2:"",
                jobleftreason3:"",
                jobsabeghebimehfile:"",
                jobsabeghebimehfileprev:""

            }
        },
        created(){
            this.$store.state.isMainPage=false
            this.userIdParam=this.$route.params.id;
            PostData_normal("getjobresumeFromAdmin",{userId:this.userIdParam},null,(err,res)=>{
          if(err){
            this.$store.state.snd=true;
            this.$store.state.snt="مشکل در ارتباط با سرور. پس از چند لحظه دوباره تلاش کنید"
            setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
          }
          else{
            if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R8"){
                this.$store.state.snd=true;
                  this.$store.state.snt="کاربر مورد نظر در رسیستم شناسایی نشد"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else{
                if(res.data){
                    let jbr=res.data;
            this.jobname1= jbr.unjn1;
            this.jobname2= jbr.unjn2;
            this.jobname3= jbr.unjn3;
            this.joboveralllocation1=  jbr.unjol1;
            this.jobdetaillocation2= jbr.unjol2;
            this.joboveralllocation3= jbr.unjol3;
            this.jobdesc1= jbr.unjd1;
            this.jobdesc2= jbr.unjd2;
            this.jobdesc3=jbr.unjd3;
            this.jobmoddatekar1=jbr.unjmk1;
            this.jobmoddatekar2=jbr.unjmk2;
            this.jobmoddatekar3=jbr.unjmk3;
            this.jobdetaillocation1=jbr.unjdl1;
            this.jobdetaillocation2=jbr.unjdl2;
            this.jobdetaillocation3=jbr.unjdl3;
            this.jobleftreason1=jbr.unjlr1;
            this.jobleftreason2=jbr.unjlr2;
            this.jobleftreason3=jbr.unjlr3;
            this.jobsabeghebimehfileprev=jbr.unjsbf?"data:image/jpeg;base64,"+jbr.unjsbf:null;  
              }
              } 
            }
        })
        },
        methods:{
            verifyUpdateJobResume(){
                if(this.userIdParam==-1){
          this.$store.state.snd=true;
                  this.$store.state.snt="برای آپدیت اطلاعات دوباره وارد صفحه کاربرها شوید و کاربر ساخته شده را از آنجا انتخاب نمایید."
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 4000);
        }
        else{
            this.btnLoading=true;
          PostData_normal("verifyUpdateJobResume",{userId:this.userIdParam},null,(err,res)=>{
            if(err){
              this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
            }
            else{
              if(res.data && res.data.result){
                if(res.data.result=="R0"){
                  this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="green"
                  this.$store.state.snt="اطلاعات با  موفقیت تایید شد و 50 امتیاز به کاربر اضافه شد"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                }
                else{
                  this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="در آپدیت اطلاعات خطا رخ داد. شما به درستی در سیستم شناسایی نشده اید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                }
              }
              else{
                this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }

            }
          })
        }
        },
            updateJobResumeFromAdmin(){
                if(this.userIdParam==-1){
          this.$store.state.snd=true;
                  this.$store.state.snt="برای آپدیت اطلاعات دوباره وارد صفحه کاربرها شوید و کاربر ساخته شده را از آنجا انتخاب نمایید."
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 4000);
        }
        else{
            let fmData=new FormData();
                fmData.append("userId",this.userIdParam)
                fmData.append("jobname1",this.jobname1);
                fmData.append("jobname2",this.jobname2);
                fmData.append("jobname3",this.jobname3);
                fmData.append("joboveralllocation1",this.joboveralllocation1);
                fmData.append("joboveralllocation2",this.joboveralllocation2);
                fmData.append("joboveralllocation3",this.joboveralllocation3);
                fmData.append("jobdesc1",this.jobdesc1);
                fmData.append("jobdesc2",this.jobdesc2);
                fmData.append("jobdesc3",this.jobdesc3);
                fmData.append("jobmoddatekar1",this.jobmoddatekar1);
                fmData.append("jobmoddatekar2",this.jobmoddatekar2);
                fmData.append("jobmoddatekar3",this.jobmoddatekar3);
                fmData.append("jobdetaillocation1",this.jobdetaillocation1);
                fmData.append("jobdetaillocation2",this.jobdetaillocation2);
                fmData.append("jobdetaillocation3",this.jobdetaillocation3);
                fmData.append("jobleftreason1",this.jobleftreason1);
                fmData.append("jobleftreason2",this.jobleftreason2);
                fmData.append("jobleftreason3",this.jobleftreason3);
                for(let i=0;i<this.jobsabeghebimehfile.length;i++){
                    fmData.append("jobsabeghebimehfile",this.jobsabeghebimehfile[i],`jobsabeghebimehfile.${this.jobsabeghebimehfile[i]&&this.jobsabeghebimehfile[i].name?this.jobsabeghebimehfile[i].name.split(".").pop():""}`);
                }
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
                PostData_formData("updateJobResumeFromAdmin",fmData,{
                    onUploadProgress:(progressEvent)=>{
                        this.$store.state.pgv = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                    }
                },(err,res)=>{
                    if(err){
              this.btnLoading=false;
              this.$store.state.snd=true;
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                    }
                    else{
                        this.btnLoading=false;
                        if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R8"){
                this.$store.state.snd=true;
                  this.$store.state.snt="کاربر مورد نظر در رسیستم شناسایی نشد"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }   
              else{
                if(res.data){
                    this.$store.state.snd=true;
                  this.$store.state.snt="اطلاعات با موفقیت آپدیت شد"
                  this.$store.state.snbg="green"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
            let jbr=res.data;
            this.jobname1= jbr.unjn1;
            this.jobname2= jbr.unjn2;
            this.jobname3= jbr.unjn3;
            this.joboveralllocation1=  jbr.unjol1;
            this.jobdetaillocation2= jbr.unjol2;
            this.joboveralllocation3= jbr.unjol3;
            this.jobdesc1= jbr.unjd1;
            this.jobdesc2= jbr.unjd2;
            this.jobdesc3=jbr.unjd3;
            this.jobmoddatekar1=jbr.unjmk1;
            this.jobmoddatekar2=jbr.unjmk2;
            this.jobmoddatekar3=jbr.unjmk3;
            this.jobdetaillocation1=jbr.unjdl1;
            this.jobdetaillocation2=jbr.unjdl2;
            this.jobdetaillocation3=jbr.unjdl3;
            this.jobleftreason1=jbr.unjlr1;
            this.jobleftreason2=jbr.unjlr2;
            this.jobleftreason3=jbr.unjlr3;
            this.jobsabeghebimehfileprev="data:image/jpeg;base64,"+jbr.unjsbf;                  
              }
              }
                    }
                })
        }
            }
        }   
    }
    </script>