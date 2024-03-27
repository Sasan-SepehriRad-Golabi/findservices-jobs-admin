<template>
      <v-overlay v-model="sendMessageDialog">
 <v-row class="justify-center align-center h-screen" style="width:100vw !important">
  <v-col cols="12" sm="6" md="4">
    <v-card  class="pa-10">
      <v-card-subtitle style="white-space:normal !important ">پیام ارسالی برای کاربر</v-card-subtitle>
        <v-card-text>
          <v-textarea no-resize v-model="messageToUserText" rows="2" variant="outlined" prepend-inner-icon="mdi-text-box" placeholder="در یک جمله پیام را وارد نمایید"
          hint="مثلا اطلاعات پرسنلی شما تایید شد- تایید نشد" persistent-hint></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-col>
            <v-btn block class="bg-red" :loading="sendMessageBtnLoading" @click="sendMessageToUser">ارسال پیام</v-btn>
          </v-col>
          <v-col>
            <v-btn block class="bg-red my-4"  @click="sendMessageDialog=false">بستن</v-btn>
          </v-col>
        </v-card-actions>
    </v-card>
  </v-col>
 </v-row>
  </v-overlay>
    <v-dialog v-model="showresultdialog" transition="dialog-bottom-transition">
    <v-locale-provider rtl>
      <v-row class="justify-center align-center">
        <v-card style="max-width:400px;">
        <v-card-text class="text-green-darken-3">
          شغل مورد نظر با موفقیت ثبت شد و پس از تایید در سایت نمایش داده خواهد شد
        </v-card-text>
        <v-card-subtitle v-if="showresultdialogwithemployee" style="white-space:normal !important" class="my-3">
          نیروی کار مورد شما به این مرتبط شد. انتخاب نهایی نیرو و سایر موارد توسط تیم رامش با شما هماهنگ می شود
        </v-card-subtitle>
        <v-card-subtitle style="white-space:normal !important" class="my-3">
            تیم رامش زمان قرار گرفتن در سایت و نیز زمان قبول شغل توسط کارجو را با پیامک به شما اطلاع رسانی می کند
        </v-card-subtitle>
                <v-card-text>
                    <v-alert
    density="compact"
    type="warning"
    title="توجه"
    text="جهت تایید شما، پرسنل ما با شماره ثابت شما تماس خواهند گرفت.">
                </v-alert>
                </v-card-text>
        <v-card-actions>
          <v-btn class="bg-red text-white" block @click="closeshowresultdialog">بستن</v-btn>
        </v-card-actions>
      </v-card>
      </v-row>
    </v-locale-provider>
    </v-dialog>
    <v-card class="w-100 h-100">
        <v-locale-provider rtl>
            <v-divider class="mb-5"></v-divider>
            <v-card style="margin-top:100px;" class="w-100 h-100">
                <div v-if="jobIdParam==-1">
                    <v-card-text>
                <v-card-subtitle style="whaite-space:normal !important">مشخصات شغل یا پیشنهاد کاری مورد نظر خود را وارد نمایید</v-card-subtitle>
                <v-divider class="mt-5 mb-8"></v-divider>
                <v-row class="justify-center">
                 <v-col cols="10">
                  <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobOnvan" label="عنوان شغل">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select :items="jobtypes" v-model="jobtype" label="نوع شغل">
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select :items="jobtimes" v-model="jobSaateKartype" label="ساعات کار">
                        </v-select>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobSaateKarDetail" label="ساعت کاری" hint="مثلا از ساعات 10 صبح تا 5 عصر">

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobRoozhayeKari" label="روزهای کاری" hint="مثلا  شنبه تا 4 شنبه">

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobHoghoghePishnehadi" label="حقوق پیشهادی" hint="مثلا ماهی 2 میلیون به بالا" persistent-hint suffix="تومان">
                        </v-text-field>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobLocation" label="محل انجام کار" hint="آدرس شما تنها توسط سامانه رامش مشاهده می شود" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobTelephoneSabet" label="تلفن ثابت" hint="تلفن شما تنها توسط سامانه رامش و جهت هماهنگی با شما استفاده می شود و نمایش داده نمی شود" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobCreatorNameAndLastName" label="نام و نام خانوادگی خود را وارد کنید" hint="برای تایید و هماهنگی با شما. تلفن شما به کسی نشان داده نمی شود" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-select :items="importancelevelsarray" v-model="jobImportanceLevel" label="میزان فوریت نیاز شما">
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-textarea rows="5" no-resize v-model="jobMazayaAndNokat" variant="outlined" label="مزایا یا نکات خاص" hint="اگر شرایط یا نکات خاصی در مورد شرایط کاری یا نیروی مدنظرتان دارید بنویسید" persistent-hint >
                        </v-textarea>
                    </v-col>
                  </v-row>
                 </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn @click="registerJob" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>ثبت پیشنهاد کاری</span>
                    </v-btn>
                        </v-col>
                    </v-row>

            </v-card-actions>
                </div>
                <div class="w-100 h-100" v-else>
            <v-card-text>
                <v-alert color="orange" icon="mdi-alert-box-outline" title="توجه">
          <v-card-subtitle  style="white-space:wrap !important">
         
         در این صفحه می تونید یک پیشنهاد کاری ایجادکنید یا پیشنهاد های قبلی را تغییر بدهید. همچنین تایید یا رد کردن پیشنهاد های کاری و ارسال پیام به کارفرماها در این صفحه انجام می شود.
       </v-card-subtitle>
        </v-alert>
                
                <v-divider class="mt-5 mb-8"></v-divider>
               
                <v-row class="justify-center">
                 <v-col cols="10">
                  <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobOnvan" hint="عنوان شغل" persistent-hint>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select :items="jobtypes" v-model="jobtype" hint="نوع شغل" persistent-hint>
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select :items="jobtimes" v-model="jobSaateKartype" hint="ساعات کار" persistent-hint>
                        </v-select>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobSaateKarDetail" hint="ساعت کاری" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobRoozhayeKari" hint="روزهای کاری" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobHoghoghePishnehadi" hint="حقوق پیشهادی"  persistent-hint suffix="تومان">
                        </v-text-field>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobLocation" hint="محل انجام کار" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobTelephoneSabet" hint="تلفن ثابت" persistent-hint >

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobCreatorNameAndLastName" hint="نام و نام خانوادگی کارفرما" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col  cols="12" md="4">
                        <v-text-field variant="solo-filled" @click="this.$router.push(`/admin/userinfo/${jobUserId}`)" v-model="jobUserId" hint="نام کاربری- برای دیدن اطلاعات بیشتر کارفرما کلیک کنید" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-select :items="importancelevelsarray" v-model="jobImportanceLevel" label="میزان فوریت نیاز شما">
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-textarea rows="5" no-resize v-model="jobMazayaAndNokat" variant="outlined" label="مزایا یا نکات خاص" hint="اگر شرایط یا نکات خاصی در مورد شرایط کاری یا نیروی مدنظرتان دارید بنویسید" persistent-hint >
                        </v-textarea>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobDateOfCreationInPersian"  hint="تاریخ ثبت کار" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="bankpeygiricode"  hint="شماره پیگیری پول واریزی توسط کارفرما" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="employerPayment"  hint="میزان پرداخت پول توسط کارفرما به تومان" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="dateOfVerifyInPersian"  hint="تاریخ تایید شغل توسط سامانه رامش" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" readonly v-model="jobStatusText"  hint="وضعیت شغل" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobDateOfFinishInPersian"  hint="تاریخ پایان کار" persistent-hint>

                        </v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field variant="solo-filled" v-model="jobAcceptor" @click="this.$router.push(`/admin/userinfo/${jobAcceptor}`)" hint="نام کاربری کارجوی نهایی- برای دیدن اطلاعات فرد کلیک کید" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-textarea no-resize rows="3" variant="outlined" v-model="jobFinalConditionsAcceptedByBoth"  hint="شرایط نهایی که دو طرف بر آن توافق کرده اند" persistent-hint>

                        </v-textarea>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-textarea no-resize rows="3" variant="outlined" v-model="jobFeedbackFromCreator"  hint="نظر کارفرما درباره کارجو" persistent-hint>

                        </v-textarea>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobScoreToAcceptorByCreator"  hint="امتیاز نهایی کارفرما به کارجو از 10 نمر0" persistent-hint>

                        </v-text-field>
                    </v-col>              
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobFeedbackFromCreatorDateInPersian"  hint="تاریخ ارسال نظر کارفرما" persistent-hint>

                        </v-text-field>
                    </v-col>
                  </v-row>
                 </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                   <v-col>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn :loading="btnLoading" @click="updateJobFromAdmin" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>آپدیت کردن اطلاعات</span>
                    </v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn :loading="btnLoading" @click="verifyJob" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>تایید پیشنهاد کاری</span>
                    </v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn :loading="btnLoading" @click="rejectJob" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>رد کردن پیشنهاد کاری</span>
                    </v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn :loading="btnLoading" @click="finishJob" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>اتمام شغل</span>
                    </v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn  @click="openSendMessage" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>ارسال پیام به کارفرما</span>
                    </v-btn>
                        </v-col>
                    </v-row>
                   </v-col>

            </v-card-actions>
               </div>
            </v-card>
        </v-locale-provider>
    </v-card>   
</template>
<script>
import {mapState} from "vuex"
import {PostData_normal} from "@/services/remotedatamodify"
export default{
    data(){
        return{
            messageToUserText:"",
            sendMessageDialog:false,
            sendMessageBtnLoading:"",
            btnLoading:false,
            jobMazayaAndNokat:"",
            jobtype:"",
            jobOnvan:"",
            jobSaateKartype:"",
            jobSaateKarDetail:"",
            jobRoozhayeKari:"",
            jobLocation:"",
            jobHoghoghePishnehadi:"",
            jobTelephoneSabet:"",
            jobCreatorNameAndLastName:"",
            jobImportanceLevel:"",
            showresultdialog:false,
            showresultdialogwithemployee:false,
            importancelevelsarray:["خیلی فوری","فوری","عادی","عجله ای ندارم"],
            jobtypes:['دایمی','موقت'],
            jobtimes:['پاره وقت','تمام وقت'],
            emplayerphone:"",
            employeeCode:"",
            jobIdParam:"",
            jobDateOfCreationInPersian:"",
            dateOfVerifyInPersian:"",
            jobStatusText:"",
            jobDateOfFinishInPersian:"",
            jobAcceptor:"",
            jobFinalConditionsAcceptedByBoth:"",
            jobFeedbackFromCreator:"",
            jobScoreToAcceptorByCreator:"",
            jobFeedbackFromCreatorDateInPersian:"",
            jobUserId:"",
            bankpeygiricode:"",
            employerPayment:""
        }
    },
    computed:{
        ...mapState(['uln'])
    },
    created(){
        this.$store.state.isMainPage=false
        this.jobIdParam=this.$route.params.id;
        this.getJobDetails();
    },
    methods:{
        verifyJob(){
            this.btnloading=true;
            PostData_normal("verifyJob",{jobId:this.jobIdParam},null,(err,res)=>{
                if(err){
                    this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
                }
                else{
                    this.btnloading=false;
                    if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                this.$store.state.snbg="red"
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
             else if(res.data.result && res.data.result=="R1"){
                this.$store.state.snd=true;
                this.$store.state.snbg="red"
                  this.$store.state.snt="وضعیت این درخواست کاری به مرحله های بعدی داده شده است. شما نمی توانید به مراحل قبلی برگردید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R0"){
                this.$store.state.snd=true;
                this.$store.state.snbg="green"
                  this.$store.state.snt="شغل مورد نظر با موفقیت تایید شد و در  وب سایت نشان داده خواهد"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else{
                this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
              }
                }
            })
        },
        finishJob(){
            this.btnloading=true;
            PostData_normal("finishJob",{jobId:this.jobIdParam},null,(err,res)=>{
                if(err){
                    this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
                }
                else{
                    this.btnloading=false;
                    if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                this.$store.state.snbg="red"
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R5"){
                this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else if(res.data.result && res.data.result=="R0"){
                this.$store.state.snd=true;
                this.$store.state.snbg="green"
                  this.$store.state.snt="شغل مورد نظر با موفقیت اتمام شد و در وب سایت نشان داده نمی شود."
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else{
                this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
              }
                }
            })
        },
        rejectJob(){
            this.btnloading=true;
            PostData_normal("rejectJob",{jobId:this.jobIdParam},null,(err,res)=>{
                if(err){
                    this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
                }
                else{
                    this.btnloading=false;
                    if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                this.$store.state.snbg="red"
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R5"){
                this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else if(res.data.result && res.data.result=="R0"){
                this.$store.state.snd=true;
                this.$store.state.snbg="green"
                  this.$store.state.snt="شغل مورد نظر با موفقیت رد شد و در وب سایت نشان داده نمی شود."
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else{
                this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 3000);
              }
                }
            })
        },
        openSendMessage(){
          this.sendMessageDialog=true;
          this.sendMessageBtnLoading=false;
        },
        sendMessageToUser(){
          this.sendMessageBtnLoading=true;
          PostData_normal("sendMesssageToUser",{userId:this.jobUserId,messageText:this.messageToUserText},null,(err,res)=>{
            if(err){
              this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
              this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
            }
            else{
              if(res.data && res.data.result=="R0"){
                this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="green"
              this.$store.state.snt="پیام با موفقیت ارسال شد"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else if(res.data && res.data.result=="R3"){
                this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
              this.$store.state.snt="متن پیام را به درستی وارد کنید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else if(res.data && res.data.result=="R4"){
                this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
              this.$store.state.snt="شما به درستی شناسایی نشده اید. دوباره وارد شوید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else if(res.data && res.data.result=="R7"){
                this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
              this.$store.state.snt="خطا در ارسال پیامک دوباره تلاش نمایید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else if(res.data && res.data.result=="R8"){
                this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
              this.$store.state.snt="خطا در شناسایی کاربر مورد نظر"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
              else{
                this.sendMessageBtnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
              this.$store.state.snt=res.data.result
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }
            }
          })
        },
        getJobDetails(){
            PostData_normal("getJobdetails",{jobId : this.jobIdParam},null,(err,res)=>{
                console.log(res)
                if(err){
                    this.$store.state.snd=true;
                  this.$store.state.snt="خطا در ارتباط با سرور"
                  this.$store.state.snbg="red"
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                }
                else{
                    if(res.data.result && res.data.result=="R4"){
                        this.$store.state.snd=true;
                  this.$store.state.snt="سیستم به درستی شما را شناسایی نکرد. دوباره وارد شوید"
              this.$store.state.snbg="red"
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$router.replace("/admin/adminlogin")
                  }, 3000);
                    }
                    else if(res.data.length>0){
                    let job=res.data[0];
                    this.jobtype=job.jobtype
            this.jobOnvan=job.jobOnvan
            this.jobSaateKartype=job.jobSaateKartype
            this.jobSaateKarDetail=job.jobSaateKarDetail
            this.jobRoozhayeKari=job.jobRoozhayeKari
            this.jobLocation=job.jobLocation
            this.jobHoghoghePishnehadi=job.jobHoghoghePishnehadi
            this.jobTelephoneSabet=job.jobTelephoneSabet
            this.jobCreatorNameAndLastName=job.jobCreatorNameAndLastName
            this.jobImportanceLevel=job.jobImportanceLevel,
            this.jobMazayaAndNokat=job.jobMazayaAndNokat,
            this.jobDateOfCreationInPersian=job.jobDateOfCreationInPersian,
                        this.dateOfVerifyInPersian=job.dateOfVerifyInPersian,
                        this.jobStatusText=job.jobStatusText;
                        this.jobDateOfFinishInPersian=job.jobDateOfFinishInPersian,
                        this.jobAcceptor=job.jobAcceptor;
                        this.jobFinalConditionsAcceptedByBoth=job.jobFinalConditionsAcceptedByBoth;
                        this.jobFeedbackFromCreator=job.jobFeedbackFromCreator;
                        this.jobScoreToAcceptorByCreator=job.jobScoreToAcceptorByCreator;
                        this.jobFeedbackFromCreatorDateInPersian=job.jobFeedbackFromCreatorDateInPersian
                        this.jobUserId=job.userid;
                        this.employerPayment=job.employerPayment;
                        this.bankpeygiricode=job.bankpeygiricode;
                    }
                    else{
                        this.$store.state.snd=true;
                  this.$store.state.snt="اطلاعاتی بازیابی نشد"
                  this.$store.state.snbg="red"
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                    }

                }
            })
        },
        closeshowresultdialog(){
            this.showresultdialog=false;
            this.$router.replace("/admin/")
        },
        updateJobFromAdmin(){
            this.showresultdialogwithemployee=false;
                PostData_normal("/updateJobFromAdmin",{jobOnvan:this.jobOnvan,
                jobtype:this.jobtype,jobSaateKartype:this.jobSaateKartype,
                bankpeygiricode:this.bankpeygiricode,
                employerPayment:this.employerPayment,
                jobSaateKarDetail:this.jobSaateKarDetail,jobRoozhayeKari:this.jobRoozhayeKari,
                jobHoghoghePishnehadi:this.jobHoghoghePishnehadi,jobLocation:this.jobLocation,
                jobTelephoneSabet:this.jobTelephoneSabet,jobCreatorNameAndLastName:this.jobCreatorNameAndLastName,
                jobMazayaAndNokat:this.jobMazayaAndNokat,jobImportanceLevel:this.jobImportanceLevel,
                jobDateOfCreationInPersian:this.jobDateOfCreationInPersian,
                dateOfVerifyInPersian:this.dateOfVerifyInPersian,
                jobDateOfFinishInPersian:this.jobDateOfFinishInPersian,
                jobAcceptor:this.jobAcceptor,
                jobFinalConditionsAcceptedByBoth:this.jobFinalConditionsAcceptedByBoth,
                jobFeedbackFromCreator:this.jobFeedbackFromCreator,
                jobScoreToAcceptorByCreator:this.jobScoreToAcceptorByCreator,
                jobFeedbackFromCreatorDateInPersian:this.jobFeedbackFromCreatorDateInPersian,
                userid:this.jobUserId,
                jobId:this.jobIdParam
                    },null,(err,res)=>{
                console.log(res)
                if(err){
                   this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. اطلاعات وارد شده را بررسی کنید و سپس دوبار تلاش نمایید";
                   this.$store.state.snbg="red"
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else{
                   if(res.data.result&& res.data.result=="ok"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شغل مورد نظر با موفقیت آپدیت شد ";
                   this.$store.state.snbg="green"
                   this.showresultdialog=true;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 3000);
                   }
                   else if(res.data.result && res.data.result=="R4"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شما به درستی ثبت نشده اید. به عنوان کارفرما یا هر دو ثبت نام نمایید";
                   this.$store.state.snbg="red"
                   this.showresultdialog=false;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                    this.$router.replace("/admin/adminlogin")
                   }, 3000)
                   }
                   else if(res.data.result && res.data.result=="R5"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در  دیتابیس";
                   this.$store.state.snbg="red"
                   this.showresultdialog=false;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 3000)
                   }
                   else if(res.data.result && res.data.result=="error"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در  دیتابیس";
                   this.$store.state.snbg="red"
                   this.showresultdialog=false;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 3000)
                   }
                   else{
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. اطلاعات وارد شده را بررسی کنید و سپس دوبار تلاش نمایید";
                   this.$store.state.snbg="red"
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                   }
                }
            })
        },
        registerJob(){
                this.showresultdialogwithemployee=false;
                PostData_normal("/registerJobFromAdmin",{jobOnvan:this.jobOnvan,
                jobtype:this.jobtype,jobSaateKartype:this.jobSaateKartype,
                jobSaateKarDetail:this.jobSaateKarDetail,jobRoozhayeKari:this.jobRoozhayeKari,
                jobHoghoghePishnehadi:this.jobHoghoghePishnehadi,jobLocation:this.jobLocation,
                jobTelephoneSabet:this.jobTelephoneSabet,jobCreatorNameAndLastName:this.jobCreatorNameAndLastName,
                jobMazayaAndNokat:this.jobMazayaAndNokat,jobImportanceLevel:this.jobImportanceLevel
                    },null,(err,res)=>{
                if(err){
                   this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. اطلاعات وارد شده را بررسی کنید و سپس دوبار تلاش نمایید";
                   this.$store.state.snbg="red"
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else{
                   if(res.data.result&& res.data.result=="R0"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شغل مورد نظر با موفقیت ثبت و پس از تایید ادمین نمایش داده می شود";
                   this.$store.state.snbg="green"
                   this.showresultdialog=true;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 3000);
                   }
                   else if(res.data.result && res.data.result=="R4"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شما به درستی ثبت نشده اید. به عنوان کارفرما یا هر دو ثبت نام نمایید";
                   this.$store.state.snbg="red"
                   this.showresultdialog=false;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                    this.$router.replace("/admin/adminlogin")
                   }, 3000)
                   }
                   else{
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. اطلاعات وارد شده را بررسی کنید و سپس دوبار تلاش نمایید";
                   this.$store.state.snbg="red"
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