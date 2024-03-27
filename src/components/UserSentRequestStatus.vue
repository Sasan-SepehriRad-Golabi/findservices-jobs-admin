<template>
    <v-divider class="mb-5"></v-divider>
             <v-card style="margin-top:100px;" class="w-100 h-100">
                <v-row class="w-100 justify-center">
               <v-locale-provider rtl>
                <v-col cols="10" sm="6" md="4">
                        <v-alert color="warning" class="my-3 text-justify" icon="mdi-alert-box-outline" title="توجه">
          <v-card-subtitle style="white-space :normal !important;" >در حال حاضر امکان انتخاب کارجو بوسیله خود کارفرما ممکن نیست و این موضوع از طریق تماس تیم هماهنگی رامش با شما و کارجوها هماهنگ می شود. در این صفحه تنها می توانید اطلاعات مربوطه را مشاهده نمایید</v-card-subtitle>
        </v-alert>
                    </v-col>
               </v-locale-provider>
                </v-row>
                 <v-card v-if="!requestexists && !distictRequests.length>0">
                  <v-locale-provider rtl>
                     <v-row class="justify-center align-center h-screen">
                         <v-col cols="12" md="4">
                            <v-alert type="info" color="bg-orange">
                             <span>   هنوز درخواستی ثبت نشده است </span>
                            </v-alert>
                         </v-col>
                     </v-row>
                  </v-locale-provider>
                 </v-card>
                 <div v-else>
                   <v-container class="justify-center">
                   <v-locale-provider rtl>
                     <v-row class="justify-center">
                         <v-col cols="12" md="6">
                             <v-btn @click="closeGoToMainPage" block class="bg-red text-white pa-4 my-3" variant="outlined">
                                 برگشت به صفحه اصلی
                             </v-btn>
                         </v-col>
                     </v-row>
                   </v-locale-provider>
                     <v-card elevation="10" class="w-95 my-3" v-for="(request,index) in distictRequests" :key="index">
                     <v-locale-provider rtl>
                     <v-card-text>
                         <v-card-subtitle class="text-red">شغل مورد درخواست شما</v-card-subtitle>
                         <v-row>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                     <span>عنوان شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                    {{request.jobonvan}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>نوع شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobtype}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>شرایط زمانی شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     <span>{{request.jobSaateKartype}}</span><span>-</span><span class="text-red-darken-3">{{request.jobSaateKarDetail}}</span>
                                 </v-col>
                             </v-col>
                         </v-row>
                         <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                             <!--second row-->
                             <v-row>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>روزهای کاری شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobRoozhayeKari}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>حقوق پیشنهادی شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobHoghoghePishnehadi}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>آدرس شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobLocation}}
                                 </v-col>
                             </v-col>
                         </v-row>
                         <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                             <!-- third row-->
                             <v-row>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>میزان فوریت</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobImportanceLevel}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>تاریخ ایجاد شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobDateOfCreationInPersian}}
                                 </v-col>
                             </v-col>
                         </v-row>
                         <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                             <!--fourth row-->
                             <v-row>
                             <v-col class="d-flex" cols="12" md="6">
                                 <v-col cols="6">
                                 <span>سایر نکات و ویژگی ها</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     <v-textarea no-resize rows="3" style="white-space:normal !important;" v-model="request.jobMazayaAndNokat">
                                     </v-textarea>
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>تاریخ درخواست برای شغل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                         {{request.applyDateInPersian}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>درخواست از طرف کارفرما به کارجو بوده؟</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                         {{request.employeeAddByEmployer?'بله':'خیر'}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="3">
                                 <v-col cols="6">
                                 <span>وضعیت فعلی پیشنهاد کاری</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.jobSatusText}}
                                 </v-col>
                             </v-col>
                         </v-row>
                         <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                          <!--5th row-->
                          <v-card-subtitle class="text-red">مشخصات کارفرما</v-card-subtitle>
                          <v-row>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>نام کاربری</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                         {{request.employerId}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>نام</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                     {{request.employerName}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-flex" cols="12" md="4">
                                 <v-col cols="6">
                                 <span>وضعیت تاهل</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                         {{request.employerMoteahhel}}
                                 </v-col>
                             </v-col>
                             <v-col class="d-fles" cols="8">
                             <v-col cols="6">
                                 <span>کلید واژه های تخصص های کارفرما</span>
                                 </v-col>
                                 <v-col style="color:green;" cols="6">
                                         {{request.decoratedemployerKeyWords}}
                                 </v-col>
                         </v-col>
                         </v-row>
                         
                      <!-- 6th row-->
                      <v-divider class="w-75 bg-red my-2"></v-divider>
                    
                      
                     </v-card-text>
                     </v-locale-provider>
                 </v-card>
                   </v-container>
                 </div>
             </v-card>
     </template>
     <script>
     import {PostData_normal} from "@/services/remotedatamodify.js"
     export default{
         data(){
             return{
                 requestexists:false,
                 distictRequests:[],
                 employerKeyWords:"-",
                 employees:[],
                 employeesKeyWords:[],
                 requestId:""
             }
         },
         created(){
            console.log(this.$route.params.requestId)
            this.requestId=this.$route.params.requestId
          this.getrequests()
         },
         methods:{
             closeGoToMainPage(){
                 this.$router.replace("/admin/");
             },
             getrequests(){
                console.log(this.requestId)
                 PostData_normal("getUserRequestsById",{requestId:this.requestId},null,(err,res)=>{
                     console.log(res)
                 if(err){
                     this.requestexists=false;
                     this.$store.state.snd=true;
                     this.$store.state.snt="خطا در ارتباط با سرور. مجددا تلاش نمایید"
                     this.$store.state.snbg="red";
                     setTimeout(() => {
                         this.$store.state.snd=false;
                     }, 2000);
                 }
                 else{
                     if(res.data){
                         let result=res.data;
                         if(result.result=="R0"){
                             if(result.records.length>0){
                                 this.$store.state.snd=true;
                                 this.$store.state.snbg="green";
                     this.$store.state.snt="اطلاعات درخواست با موفقیت بارگذاری شد"
                     setTimeout(() => {
                         this.$store.state.snd=false;
                     }, 2000);
                                 this.requestexists=true;
                                 this.distictRequests=result.records;
                                 
                                    this.distictRequests.forEach(element => {
                                        let tempStr="-";
                                        let parsedKeyWords=[];
                                        try{
                                            parsedKeyWords=JSON.parse(element.employerSelectedKeyWords);
                                            if(parsedKeyWords.length>0){
                                                parsedKeyWords.forEach(keyWord => {
                                                    tempStr=tempStr+keyWord+"-";
                                                });
                                            }
                                        }
                                        catch(err){
                                            console.log(err)  ;
                                        }
                                        element["decoratedemployerKeyWords"]=tempStr;
                                    });                              
                                 }
                                 else{
                                     this.distictRequests=[];   
                                     this.requestexists=false; 
                                 }
                                 console.log(this.distictRequests)
                             }
                         else if(result.result=="R4"){
                             this.requestexists=false;
                             this.$store.state.snd=true;
                     this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                     this.$store.state.snbg="red";
                     setTimeout(() => {
                         this.$store.state.snd=false;
                         this.$store.state.uln="";
                         this.$router.replace("/admin/adminlogin")
                     }, 2000);
                         }
                         else{
                             this.requestexists=false;
                             this.$store.state.snd=true;
                     this.$store.state.snt="خطا در ارتباط با سرور. مجددا تلاش نمایید"
                     this.$store.state.snbg="red";
                     setTimeout(() => {
                         this.$store.state.snd=false;
                     }, 2000);
                         }
                     }
                     else{
                         this.requestexists=false;
                         this.$store.state.snd=true;
                     this.$store.state.snt="خطا در ارتباط با سرور. مجددا تلاش نمایید"
                     this.$store.state.snbg="red";
                     setTimeout(() => {
                         this.$store.state.snd=false;
                     }, 2000);
                     }
                     }
                 })
         }
     }
     }
     </script>