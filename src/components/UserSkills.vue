<template>
    <v-card class="w-100 h-100">
    <v-card-subtitle>
        وضعیت مهارت ها و زمینه فعالیت- حداکثر 4 مهارت
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
    <v-divider></v-divider>
    <v-card-subtitle class="my-5 text-red font-weight-bold">مهارت اول</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="skillType1" label="نام مهارت" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-select variant="outlined" :items="skillLevels" :disabled="!userEdit" v-model="skillLevel1" label="میزان مهارت" >
            </v-select>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="sabeghehMaharat1" label="سابقه کار در این مهارت" hint="تعداد سالی که در این مهارت سابقه کار داشته اید" suffix="سال" persistent-hint="true">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="6">
          <v-row class="d-flex d-md-none">
            <v-col :cols="noeFaragirieMaharat1=='سایر'?6:12">
                <v-card-text>
          <v-select :items="noeFaragirieMaharatItems" :disabled="!userEdit" v-model="noeFaragirieMaharat1" label="شیوه یادگیری این مهارت" hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat1=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat1=='سایر'?6:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext1" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
          <v-row class="d-none d-md-flex">
            <v-col :cols="noeFaragirieMaharat1=='سایر'?2:12">
                <v-card-text>
          <v-select :disabled="!userEdit" :items="noeFaragirieMaharatItems" v-model="noeFaragirieMaharat1" label="شیوه یادگیری این مهارت" hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat1=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat1=='سایر'?10:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext1" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
</v-card-text>
<v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle class="my-5 text-red font-weight-bold">مهارت دوم</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="skillType2" label="نام مهارت" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-select variant="outlined" :items="skillLevels" :disabled="!userEdit" v-model="skillLevel2" label="میزان مهارت" >
            </v-select>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="sabeghehMaharat2" label="سابقه کار در این مهارت" hint="تعداد سالی که در این مهارت سابقه کار داشته اید" suffix="سال" persistent-hint="true">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="6">
          <v-row class="d-flex d-md-none">
            <v-col :cols="noeFaragirieMaharat2=='سایر'?6:12">
                <v-card-text>
          <v-select :items="noeFaragirieMaharatItems" :disabled="!userEdit" v-model="noeFaragirieMaharat2" label="شیوه یادگیری این مهارت" hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat2=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat2=='سایر'?6:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext2" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
          <v-row class="d-none d-md-flex">
            <v-col :cols="noeFaragirieMaharat2=='سایر'?2:12">
                <v-card-text>
          <v-select :disabled="!userEdit" :items="noeFaragirieMaharatItems" v-model="noeFaragirieMaharat2" label="شیوه یادگیری این مهارت" hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat2=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat2=='سایر'?10:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext2" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
</v-card-text>
<v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle class="my-5 text-red font-weight-bold">مهارت سوم</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="skillType3" label="نام مهارت" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-select variant="outlined" :items="skillLevels" :disabled="!userEdit" v-model="skillLevel3" label="میزان مهارت" >
            </v-select>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="sabeghehMaharat3" label="سابقه کار در این مهارت" hint="تعداد سالی که در این مهارت سابقه کار داشته اید" suffix="سال" persistent-hint="true">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="6">
          <v-row class="d-flex d-md-none">
            <v-col :cols="noeFaragirieMaharat3=='سایر'?6:12">
                <v-card-text>
          <v-select :items="noeFaragirieMaharatItems" :disabled="!userEdit" v-model="noeFaragirieMaharat3" label="شیوه یادگیری این مهارت" hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat3=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat3=='سایر'?6:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext3" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
          <v-row class="d-none d-md-flex">
            <v-col :cols="noeFaragirieMaharat3=='سایر'?2:12">
                <v-card-text>
          <v-select :disabled="!userEdit" :items="noeFaragirieMaharatItems" v-model="noeFaragirieMaharat3" label="شیوه یادگیری این مهارت"  hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat3=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat3=='سایر'?10:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext3" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
</v-card-text>
<v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle class="my-5 text-red font-weight-bold">مهارت چهارم</v-card-subtitle>
    <v-row class="d-flex justify-start">        
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="skillType4" label="نام مهارت" >
                <template #prepend-inner>
                    <v-icon>mdi-tools</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-select variant="outlined" :items="skillLevels" :disabled="!userEdit" v-model="skillLevel4" label="میزان مهارت" >
            </v-select>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="sabeghehMaharat4" label="سابقه کار در این مهارت" hint="تعداد سالی که در این مهارت سابقه کار داشته اید" suffix="سال" persistent-hint="true">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="6">
          <v-row class="d-flex d-md-none">
            <v-col :cols="noeFaragirieMaharat4=='سایر'?6:12">
                <v-card-text>
          <v-select :items="noeFaragirieMaharatItems" :disabled="!userEdit" v-model="noeFaragirieMaharat4" label="شیوه یادگیری این مهارت"  hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat4=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat4=='سایر'?6:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext4" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
          <v-row class="d-none d-md-flex">
            <v-col :cols="noeFaragirieMaharat4=='سایر'?2:12">
                <v-card-text>
          <v-select :disabled="!userEdit" :items="noeFaragirieMaharatItems" v-model="noeFaragirieMaharat4" label="شیوه یادگیری این مهارت" hint="شیوه یادگیری این مهارت" >
          </v-select>
        </v-card-text>
            </v-col>
            <v-col :class="noeFaragirieMaharat4=='سایر'?'d-flex':'d-none'" :cols="noeFaragirieMaharat4=='سایر'?10:0">
                <v-card-text>
          <v-text-field :disabled="!userEdit" v-model="noeFaragirieMaharatext4" hint="شیوه یادگیری را وارد کنید" persistent-hint>
          </v-text-field>
        </v-card-text>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
</v-card-text>
<v-card-actions class="d-flex justify-start align-center">
         <v-col>
          <v-row>
            <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="updateSkillsFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن مهارت ها </span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="updateSkillsFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن مهارت ها</span>
          </v-btn>
          </v-row>
          <v-row>
            <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="verifyUpdateSkills" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات </span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="verifyUpdateSkills" :disabled="!userEdit">
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
                noeFaragirieMaharatItems:["مرکز فنی حرفه ای","آموزشگاه آزاد","تجربه ای","خودآموز","سایر"],
                skillLevels:["عالی","خوب","متوسط","ضعیف","خیلی ضعیف"],
                skillType1:"",
                skillType2:"",
                skillType3:"",
                skillType4:"",
                skillLevel1:"",
                skillLevel2:"",
                skillLevel3:"",
                skillLevel4:"",
                sabeghehMaharat1:"",
                sabeghehMaharat2:"",
                sabeghehMaharat3:"",
                sabeghehMaharat4:"",
                noeFaragirieMaharat1:"",
                noeFaragirieMaharat2:"",
                noeFaragirieMaharat3:"",
                noeFaragirieMaharat4:"",
                noeFaragirieMaharatext1:"",
                noeFaragirieMaharatext2:"",
                noeFaragirieMaharatext3:"",
                noeFaragirieMaharatext4:"",
                userIdParam:""

            }
        },
        created(){
          this.$store.state.isMainPage=false
          this.userIdParam=this.$route.params.id;
        PostData_normal("getskillsFromAdmin",{userId:this.userIdParam},null,(err,res)=>{
            if(err){
              console.log(err)
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
                let sk=res.data;
                  this.skillType1=sk.unst1;
                  this.skillType2=sk.unst2;
                  this.skillType3=sk.unst3;
                  this.skillType4=sk.unst4;
                  this.skillLevel1=sk.unsl1;
                  this.skillLevel2=sk.unsl2;
                  this.skillLevel3=sk.unsl3;
                  this.skillLevel4=sk.unsl4;
                  this.sabeghehMaharat1=sk.unsm1;
                  this.sabeghehMaharat2=sk.unsm2;
                  this.sabeghehMaharat3=sk.unsm3;
                  this.sabeghehMaharat4=sk.unsm4;
                  this.noeFaragirieMaharat1=sk.unsnf1;
                  this.noeFaragirieMaharat2=sk.unsnf2;
                  this.noeFaragirieMaharat3=sk.unsnf3;
                  this.noeFaragirieMaharat4=sk.unsnf4;
                  this.noeFaragirieMaharatext1=sk.unsnfe1;
                  this.noeFaragirieMaharatext2=sk.unsnfe2;
                  this.noeFaragirieMaharatext3=sk.unsnfe3;
                  this.noeFaragirieMaharatext4=sk.unsnfe4;
              }
              }
            }
            })
      },
        methods:{
          verifyUpdateSkills(){
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
          PostData_normal("verifyUpdateSkills",{userId:this.userIdParam},null,(err,res)=>{
            console.log(err)
            console.log(res)
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
            showImageLarge(imageSrcValue){
          this.imageLargeScale=true;
          this.imageLargeScaleSrc=imageSrcValue;
        },
        updateSkillsFromAdmin(){
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
            fmData.append("skillType1",this.skillType1)
            fmData.append("skillType2",this.skillType2)
            fmData.append("skillType3",this.skillType3)
            fmData.append("skillType4",this.skillType4)
            fmData.append("skillLevel1",this.skillLevel1)
            fmData.append("skillLevel2",this.skillLevel2)
            fmData.append("skillLevel3",this.skillLevel3)
            fmData.append("skillLevel4",this.skillLevel4)
            fmData.append("sabeghehMaharat1",this.sabeghehMaharat1)
            fmData.append("sabeghehMaharat2",this.sabeghehMaharat2)
            fmData.append("sabeghehMaharat3",this.sabeghehMaharat3)
            fmData.append("sabeghehMaharat4",this.sabeghehMaharat4)
            fmData.append("noeFaragirieMaharat1",this.noeFaragirieMaharat1)
            fmData.append("noeFaragirieMaharat2",this.noeFaragirieMaharat2)
            fmData.append("noeFaragirieMaharat3",this.noeFaragirieMaharat3)
            fmData.append("noeFaragirieMaharat4",this.noeFaragirieMaharat4)
            fmData.append("noeFaragirieMaharatext1",this.noeFaragirieMaharatext1)
            fmData.append("noeFaragirieMaharatext2",this.noeFaragirieMaharatext2)
            fmData.append("noeFaragirieMaharatext3",this.noeFaragirieMaharatext3)
            fmData.append("noeFaragirieMaharatext4",this.noeFaragirieMaharatext4)
          PostData_formData("updateSkillsFromAdmin",fmData,{
            onUploadProgress: (progressEvent) =>{
              console.log(progressEvent)
              this.$store.state.pgv = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            }
          },(err,res)=>{
            if(err){
              console.log(err)
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
                let sk=res.data;
                this.skillType1=sk.unst1;
                  this.skillType2=sk.unst2;
                  this.skillType3=sk.unst3;
                  this.skillType4=sk.unst4;
                  this.skillLevel1=sk.unsl1;
                  this.skillLevel2=sk.unsl2;
                  this.skillLevel3=sk.unsl3;
                  this.skillLevel4=sk.unsl4;
                  this.sabeghehMaharat1=sk.unsm1;
                  this.sabeghehMaharat2=sk.unsm2;
                  this.sabeghehMaharat3=sk.unsm3;
                  this.sabeghehMaharat4=sk.unsm4;
                  this.noeFaragirieMaharat1=sk.unsnf1;
                  this.noeFaragirieMaharat2=sk.unsnf2;
                  this.noeFaragirieMaharat3=sk.unsnf3;
                  this.noeFaragirieMaharat4=sk.unsnf4;
                  this.noeFaragirieMaharatext1=sk.unsnfe1;
                  this.noeFaragirieMaharatext2=sk.unsnfe2;
                  this.noeFaragirieMaharatext3=sk.unsnfe3;
                  this.noeFaragirieMaharatext4=sk.unsnfe4;
              }
              }
            }

        })
        }
},
        }
    }
    </script>