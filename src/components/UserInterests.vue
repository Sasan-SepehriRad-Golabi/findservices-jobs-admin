<template>
    <v-card class="w-100 h-100">
    <v-card-subtitle>
 شغل ها و شرایط کاری مورد علاقه خود را وارد نمایید
    </v-card-subtitle>
<v-card-text>
    <v-row class="d-flex justify-center">
        <v-col cols="12" md="6" lg="4">
            <v-btn block variant="outlined" @click="userEdit=!userEdit" class="d-flex bg-red text-white">
             <v-icon>{{!userEdit?'mdi-pencil':'mdi-lock'}}</v-icon>
              <span>{{!userEdit?'ویرایش':'قفل'}}</span>
            </v-btn>
        </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="interestjob1" label="شغل مورد علاقه" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="interestjob2" label="شغل مورد علاقه" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="interestjob3" label="شغل مورد علاقه" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-divider class="my-5"></v-divider>
    </v-row>
    <v-row>
        <v-col cols="12" md="4">
            <v-select variant="outlined" :items="jobtypes" :disabled="!userEdit" v-model="jobtype" label="نوع شغل مورد علاقه" >
            </v-select>
        </v-col>
        <v-col cols="12" md="4">
            <v-select variant="outlined" :items="jobtimes" :disabled="!userEdit" v-model="jobtime" label="میزان ساعات کاری ترجیح شما" >
            </v-select>
        </v-col>
        <v-col cols="12" md="4">
            <p>
            <span style="display:block !important;">تمایل به خوداشتغالی دارید؟</span>
           <v-checkbox style="display:inline-block !important;" value="intrestedinselfjob" v-model="selfjob" label="بله"></v-checkbox>
           <v-checkbox style="display:inline-block !important;" value="notintrestedinselfjob" v-model="selfjob" label="خیر"></v-checkbox>
            </p>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="6">
            <v-select variant="outlined" :items="drivinglicences" :disabled="!userEdit" v-model="drivinglicence" label="گواهینامه رانندگی شما" >
            </v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-textarea
            :disabled="!userEdit"
            v-model="extraexplain"
            prepend-inner-icon="mdi-comment"
          label="هر گونه توضیحات اضافی "
          auto-grow
          variant="outlined"
          rows="5"
          row-height="15"
        ></v-textarea>
        </v-col>
    </v-row>
</v-card-text>
<v-card-actions class="d-flex justify-start align-center">
          <v-col>
            <v-row>
              <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="updatejobinterestsFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن علایق شغلی </span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="updatejobinterestsFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن علایق شغلی</span>
          </v-btn>
            </v-row>
            <v-row>
              <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="verifyUpdatejobinterests" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات </span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="verifyUpdatejobinterests" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات</span>
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
                btnLoading:false,
                userEdit:false,
                interestjob1:"",
                interestjob2:"",
                interestjob3:"",
                jobtype:"",
                jobtime:"",
                selfjob:"",
                drivinglicence:"",
                extraexplain:"",
                jobtypes:["دولتی","خصوصی","فرقی نمی کند"],
                jobtimes:["تمام وقت روزانه","تمام وقت شبانه","پاره وقت خصوصی","تمام وقت شیفتی","پاره وقت شیفتی","سایر"],
                drivinglicences:["پایه 1","پایه دو","پایه 3","گواهینامه رانندگی ندارم"],
                userIdParam:""

            }
        },
        created(){
          this.$store.state.isMainPage=false
          this.userIdParam=this.$route.params.id;
        PostData_normal("getjobinterestsFromAdmin",{userId:this.userIdParam},null,(err,res)=>{
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
                    let jin=res.data;
            this.interestjob1= jin.unji1
            this.interestjob2= jin.unji2;
            this.interestjob3= jin.unji3;
            this.jobtype=  jin.unjty;
            this.jobtime= jin.unjti;
            this.selfjob= jin.unsj;
            this.drivinglicence= jin.undl;
            this.extraexplain= jin.unex; 
              }
              }               
            }
            })
      },
        methods:{
          verifyUpdatejobinterests(){
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
          PostData_normal("verifyUpdatejobinterests",{userId:this.userIdParam},null,(err,res)=>{
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
        updatejobinterestsFromAdmin(){
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
            console.log("starttttt")
            let fmData=new FormData();
            fmData.append("userId",this.userIdParam)
            fmData.append("interestjob1",this.interestjob1)
            fmData.append("interestjob2",this.interestjob2)
            fmData.append("interestjob3",this.interestjob3)
            fmData.append("jobtype",this.jobtype)
            fmData.append("jobtime",this.jobtime)
            fmData.append("selfjob",this.selfjob)
            fmData.append("drivinglicence",this.drivinglicence)
            fmData.append("extraexplain",this.extraexplain)
          PostData_formData("updatejobinterestsFromAdmin",fmData,{
            onUploadProgress: (progressEvent) =>{
              console.log(progressEvent)
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
                    let jin=res.data;
            this.interestjob1= jin.unji1
            this.interestjob2= jin.unji2;
            this.interestjob3= jin.unji3;
            this.jobtype=  jin.unjty;
            this.jobtime= jin.unjti;
            this.selfjob= jin.unsj;
            this.drivinglicence= jin.undl;
            this.extraexplain= jin.unex; 
              }
              }          
            }

        })
        }
},
        }
    }
    </script>